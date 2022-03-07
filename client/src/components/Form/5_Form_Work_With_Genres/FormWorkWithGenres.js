import React, { useState } from 'react';
import { useContext } from 'react';
import { formContext } from '../Create_Acc_Parent/ParentForm';
import { useEffect } from 'react';
import './FormWorkWithGenres.css';

function FormWorkWith() {
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

  useEffect(() => {
    console.log('tempArr updated');
    console.log(tempArr, '<< tempArr BandRoles');
  }, [tempArr]);

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

  function goPrevPage() {
    context.setPage((page) => page - 1);
  }

  function handleSubmit(event) {
    try {
      event.preventDefault();
      //Go to next page
      context.setPage((page) => page + 1);
    } catch (err) {
      console.log(' : : : error submitting User Desired Genres : : : ', err);
    }
  }

  return (
    <div className="genres-form-container">
      <form className="genres-form" onSubmit={handleSubmit}>
        <h3 className="top-text">And what genres do they make ?</h3>
        <h4 className="sub-top">Pick as many as you like</h4>
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

export default FormWorkWith;
