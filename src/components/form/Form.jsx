import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import MyInput from '../global/MyInput';
import MyButton from '../global/MyButton';

function Form() {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [SignUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLoginChange = (fieldName) => (text) => {
    const value = text.target.value;

    setLoginData((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      };
    });
  };

  const handleSignUpChange = (fieldName) => (text) => {
    const value = text.target.value;
    setSignUpData((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      };
    });
  };

  function handleLogin() {
    console.log(loginData);
    navigate('/');
  }

  function handleSighup() {
    console.log(SignUpData);
  }

  return (
    <>
      {isLogin ? (
        <>
          <Typography variant="h3" color="primary">
            LOGIN
          </Typography>
          <MyInput
            text="Email"
            type="email"
            props={{
              value: loginData.email,
              onChange: handleLoginChange('email'),
            }}
          />

          <MyInput
            text="Password"
            type="password"
            props={{
              value: loginData.password,
              onChange: handleLoginChange('password'),
            }}
          />
          <MyButton text="Login" fullWidth onClick={handleLogin} />
          <Button
            sx={{ textTransform: 'capitalize' }}
            onClick={() => setLogin(false)}
          >
            Don't have an account? Create one
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h3" color="primary">
            Create Account
          </Typography>
          <MyInput
            props={{
              value: SignUpData.name,
              onChange: handleSignUpChange('name'),
            }}
            text="Full Name"
            type="text"
          />
          <MyInput
            props={{
              value: SignUpData.email,
              onChange: handleSignUpChange('email'),
            }}
            text="Email"
            type="email"
          />
          <MyInput
            props={{
              value: SignUpData.password,
              onChange: handleSignUpChange('password'),
            }}
            text="Password"
            type="password"
          />
          <MyInput
            props={{
              value: SignUpData.confirmPassword,
              onChange: handleSignUpChange('confirmPassword'),
            }}
            text="Confirm Password"
            type="password"
          />
          <MyButton text="Create account" fullWidth onClick={handleSighup} />
          <Button
            sx={{ textTransform: 'capitalize' }}
            onClick={() => setLogin(true)}
          >
            Already have an account? Login
          </Button>
        </>
      )}
    </>
  );
}

export default Form;
