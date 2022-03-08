import React, { useState } from 'react';
import { useContext } from 'react';
import { formContext } from '../Create_Acc_Parent/ParentForm';
import { useEffect } from 'react';
import './FormGenres.css';

function FormGenres() {
  const context = useContext(formContext);
  const [tempArr, setTempArr] = useState([]);
  const genres = [
    'Hip-Hop',
    'Pop',
    'RnB',
    'Blues',
    'Soul',
    'Jazz',
    'Funk',
    'Rock',
    'Punk',
    'House / Techno',
    'Metal',
    'Experimental',
  ];

  function checkLength(arr) {
    if (arr.length > 7) {
      let maxSizeArr = arr.slice(0, arr.length - 1);
      setTempArr(maxSizeArr);
      alert('Please select your 7 most relevant genres :)');
    }
  }

  useEffect(() => {
    console.log('tempArr updated');
    console.log(tempArr, '<< tempArr GENRES');
    checkLength(tempArr);
  }, [tempArr]);

  function goPrevPage() {
    context.setPage((page) => page - 1);
  }

  function toggleElement(item) {
    setTempArr((prevArr) => {
      let arrCopy = [...prevArr];
      if (arrCopy.includes(item)) {
        arrCopy = arrCopy.filter((val) => {
          return val !== item;
        });
      } else {
        arrCopy.push(item);
      }
      return arrCopy;
    });
  }

  function handleSubmit(event) {
    try {
      event.preventDefault();
      //Update context
      context.setUserObj({ ...context.userObj, genres: tempArr });
      //Go to next page
      context.setPage((page) => page + 1);
    } catch (err) {
      console.log(' : : : error submitting User Genres : : : ', err);
    }
  }

  return (
    <div className="genres-form-container" onSubmit={handleSubmit}>
      <form className="genres-form">
        <h3 className="top-text">What genres describe you best?</h3>
        <h4 className="sub-top">Pick up to 7 most relevant</h4>
        <div className="genres-container">
          {genres.map((item) => {
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

export default FormGenres;
