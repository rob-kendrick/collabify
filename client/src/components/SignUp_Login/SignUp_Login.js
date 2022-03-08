import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp_Login.css';
import { loginUser } from '../../services/backEndService';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { mainContext } from '../../App';
import { useState } from 'react';

function SignUp_Login() {
  const navigate = useNavigate();
  const context = useContext(mainContext);
  //Function for logging in
  function handleLogin(event) {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log('Logging in...');
    //set auth to be true if we get a response
    loginUser(body).then((res) => {
      context.setIsAuthenticated(true);
      context.setCurrentUser(res);
    });
    event.target.email.value = '';
    event.target.password.value = '';
    //navigate to home
    navigate('/');
  }

  return (
    <div className="login-container">
      <h1 className="logo-text">FMB</h1>
      <h2>Welcome to Find My Band</h2>

      <form className="login-form" onSubmit={handleLogin}>
        <h3>Email</h3>
        <input className="form-input" name="email" type="email"></input>
        <h3>Password</h3>
        <input className="form-input" name="password" type="password"></input>
        <div className="submit-container">
          <button type="submit" className="submit-btn">
            Login
          </button>
        </div>
      </form>

      <div className="register-container">
        <h3>Not a member ? Register below</h3>
        <Link to="/signup">
          <button className="create-btn">Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp_Login;
