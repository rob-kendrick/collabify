import React from 'react';
import { useContext } from 'react';
import { formContext } from '../Create_Acc_Parent/ParentForm';
import './FormBasicInfo.css';
import { Link } from 'react-router-dom';

function FormBasicInfo() {
  //reference the context of parent componnent
  const context = useContext(formContext);

  //TODO:
  //  Make the handleSubnit function update context state x
  function handleSubmit(event) {
    try {
      event.preventDefault();
      //Grabbing inputs
      const firstNameInput = event.target.firstName.value;
      const lastNameInput = event.target.lastName.value;
      const bdayInput = new Date(event.target.bday.value);
      let bdayISO = bdayInput.toISOString();
      const emailInput = event.target.email.value;
      const passwordInput = event.target.password.value;

      //Updating State
      context.setUserObj({
        ...context.userObj,
        firstName: firstNameInput,
        lastName: lastNameInput,
        bday: bdayISO,
        email: emailInput,
        password: passwordInput,
      });

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
        <input type={'text'} name="firstName" className="form-input"></input>
        <p>Last Name</p>
        <input type={'text'} name="lastName" className="form-input"></input>
        <p>Birthday</p>
        <input type="date" name="bday" className="form-input"></input>
        <p>Email</p>
        <input type={'email'} name="email" className="form-input"></input>
        <p>Password</p>
        <input type={'password'} name="password" className="form-input"></input>

        <button type="submit" className="next-btn">
          Next
        </button>
        <Link to="/login">
          <button className="back-login-btn">Back to Login</button>
        </Link>
      </form>
    </div>
  );
}

export default FormBasicInfo;
