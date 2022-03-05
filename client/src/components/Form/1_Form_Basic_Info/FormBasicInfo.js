import React from 'react';
import { useContext } from 'react';
import { formContext } from '../Create_Acc_Parent/ParentForm';
import './FormBasicInfo.css';

function FormBasicInfo() {
  //reference the context of parent componnent
  const context = useContext(formContext);

  function handleSubmit(event) {
    try {
      event.preventDefault();
      context.setPage((page) => page + 1);
    } catch (err) {
      console.log(' : : : error submitting basic info : : : ', err);
    }
  }

  return (
    <div className="basic-info-form">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="top-text">To get started, we need some basic info:</h2>
        <p>First Name</p>
        <input
          type={'text'}
          name="firstName"
          className="form-input"
          placeholder="What should we call you?"
        ></input>
        <p>Last Name</p>
        <input
          type={'text'}
          name="lastName"
          className="form-input"
          placeholder="And what's your last name?"
        ></input>
        <p>Birthday</p>
        <input
          type="date"
          placeholder="Enter Date..."
          name="bday"
          className="form-input"
        ></input>
        <p>Email</p>
        <input
          type={'email'}
          name="email"
          className="form-input"
          placeholder="johnsmith@gmail.com"
        ></input>
        <p>Password</p>
        <input
          type={'password'}
          name="password"
          className="form-input"
          placeholder="Make it secure..."
        ></input>

        <button type="submit" className="next-btn">
          Next
        </button>
      </form>
    </div>
  );
}

export default FormBasicInfo;
