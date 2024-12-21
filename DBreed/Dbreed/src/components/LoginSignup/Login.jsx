import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gmail from '../../assets/gmail.png';
import password1 from '../../assets/password1.png';
import user from '../../assets/user.png';

const Login = () => {
  const [action, setAction] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to handle Sign Up and switch back to Login
  const handleSignUp = () => {
    setAction('Login'); // Switch back to Login after Sign Up
  };

  // Function to handle Login and navigate to home page
  const handleLogin = () => {
    if (!email || !password) {
      setError('Fill the email and password');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    // Reset error and navigate if validation passes
    setError('');
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className='login-container'>
      <style>
        {`
          * {
            margin: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .login-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(#0303f1, #0e006c);
            padding-bottom: 30px;
          }
            .container{
    display:flex;
    flex-direction: column;
    margin: auto;
    margin-top: 200px;
    width: 600px;
    background: #fff;
    padding-bottom: 30px;
    border-radius : 20px;
}
          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 9px;
            width: 100%;
            margin-top: 30px;
            background: none;
          }
          .text {
            color: #3C009d;
            font-size: 48px;
            font-weight: 700;
          }
          .underline {
            width: 61px;
            height: 6px;
            background: #3c009d;
          }
          .inputs {
            margin-top: 55px;
            display: flex;
            flex-direction: column;
            gap: 25px;
          }
          .input {
            display: flex;
            align-items: center;
            margin: auto;
            width: 480px;
            height: 80px;
            background: #eaeaea;
            border-radius: 6px;
          }
          .input img {
            margin: 0px 30px;
            height: 25px;
            width: 25px;
          }
          .input input {
            height: 50px;
            width: 400px;
            background: transparent;
            border: none;
            outline: none;
            color: #797979;
            font-size: 19px;
          }
          .forgot-password {
            padding-left: 62px;
            margin-top: 27px;
            color: #797979;
            font-size: 18px;
          }
          .forgot-password span {
            color: #4c00b4;
            cursor: pointer;
          }
          .submit-container {
            display: flex;
            gap: 30px;
            margin: 60px auto;
          }
          .submit {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 220px;
            height: 59px;
            color: #fff;
            background: #4c00b4;
            border-radius: 50px;
            font-size: 19px;
            font-weight: 700;
            cursor: pointer;
          }
          .gray {
            background: #EAEAEA;
            color: #676767;
          }
        `}
      </style>
      <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className='input'>
            <img src={user} alt='' />
            <input type='text' placeholder='Name' />
          </div>
        )}
        <div className='input'>
          <img src={gmail} alt='' />
          <input
            type='email'
            placeholder='Gmail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input'>
          <img src={password1} alt='' />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {error && <div className='error-message'>{error}</div>}
      {action === 'Sign Up' ? (
        <div></div>
      ) : (
        <div className='forgot-password'>
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className='submit-container'>
        {action === 'Sign Up' ? (
          <div className='submit' onClick={handleSignUp}>
            Sign Up
          </div>
        ) : (
          <div
            className={action === 'Login' ? 'submit gray' : 'submit'}
            onClick={() => setAction('Sign Up')}
          >
            Sign Up
          </div>
        )}
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={action === 'Login' ? handleLogin : () => setAction('Login')}
        >
          Login
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
