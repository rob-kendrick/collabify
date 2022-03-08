import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp_Login.css';
import { loginUser } from '../../services/backEndService';
import { useNavigate } from 'react-router-dom';

function SignUp_Login() {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log('Logging in...');
    loginUser(body);
  }

  return (
    <div className="login-container">
      <h1 className="logo-text">FMB</h1>
      <h2>Welcome to Find My Band</h2>

      <form className="login-form" onSubmit={handleLogin}>
        <h3>Email</h3>
        <input className="email" name="email" type="email"></input>
        <h3>Password</h3>
        <input className="password" name="password" type="password"></input>
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>

      <div className="register-container">
        <h3>Not a member ? Register below</h3>
        <Link to="/signup">
          <button>Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp_Login;
