import React, { useState } from 'react';
import { useContext } from 'react';
import { formContext } from '../Create_Acc_Parent/ParentForm';
import { useEffect } from 'react';
import './FormBandRoles.css';

function FormBandRoles() {
  //reference the context of parent componnent
  const context = useContext(formContext);
  const [tempArr, setTempArr] = useState([]); // when user
  //Roles users can select
  const roles = [
    'Producer',
    'Vocalist',
    'Drummer',
    'Percussionist',
    'Guitarist',
    'Bassist',
    'Synth / Keys',
    'Saxophone',
  ];

  //Validator for checking tempArr Length is correct.
  //If tempArr > 5, remove last element and alert.
  function checkLength(arr) {
    if (arr.length > 5) {
      let maxSizeArr = arr.slice(0, arr.length - 1);
      setTempArr(maxSizeArr);
      alert('Please select up to 5');
    }
  }

  //Keep track of tempArr state changes and validate length
  useEffect(() => {
    console.log('tempArr updated');
    console.log(tempArr, '<< tempArr BandRoles');
    checkLength(tempArr);
  }, [tempArr]);

  //Function for Previous Button
  function goPrevPage() {
    context.setPage((page) => page - 1);
  }

  //Handle submit. Go to next page and update context <usrObj> state
  function handleSubmit(event) {
    try {
      event.preventDefault();
      //Go to next page
      context.setPage((page) => page + 1);
    } catch (err) {
      console.log(' : : : error submitting Band Roles : : : ', err);
    }
  }

  //Func for toggling element in / out of tempArr
  function toggleElement(item) {
    setTempArr((prevArr) => {
      let arrCopy = [...prevArr];
      //if item already exists, remove it from array
      if (arrCopy.includes(item)) {
        arrCopy = arrCopy.filter((val) => {
          //return an array not including the val
          return val !== item;
        });
        //if it doesnt exist, add it to array
      } else {
        arrCopy.push(item);
      }
      //return array to be <setTempArr>
      return arrCopy;
    });
  }

  //returning our rendered form
  return (
    <div className="roles-form-container" onSubmit={handleSubmit}>
      {/* <p>{JSON.stringify(tempArr)}</p> */}
      <form className="roles-form">
        <h3 className="top-text">What roles describe you best?</h3>
        <h4 className="sub-top">Pick the 5 most relevant</h4>
        <div className="roles-container">
          {roles.map((item) => {
            let isSelected = tempArr.includes(item); //returns true if tempArr includes item
            return (
              <div
                key={item}
                className={`${isSelected && 'usr-selected'}  usr-select`}
                onClick={() => {
                  toggleElement(item);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>

        <div className="footer">
          <button className="footer-btn" onClick={goPrevPage}>
            Prev
          </button>
          <button className="footer-btn" type="submit">
            Next Page
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormBandRoles;
