import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MyInput from '../global/MyInput';
import MyButton from '../global/MyButton';
import { createUser } from '../../store/api';

function AddUserForm() {
  const [state, setState] = useState('');
  const { token } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: '',
  });

  const handleChange = async (event) => {
    const value = event.target.value;
    setState(value);
    if (value === 10) {
      setUserData((prev) => {
        return {
          ...prev,
          role: 'user',
        };
      });
    } else if (value === 20) {
      setUserData((prev) => {
        return {
          ...prev,
          role: 'admin',
        };
      });
    }
  };

  const handleAddUserUpChange = (fieldName) => (text) => {
    const value = text.target.value;
    setUserData((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      };
    });
  };

  const handleAddUser = async () => {
    const response = await createUser({ data: userData, token });
    console.log(response);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Typography color="primary.main" variant="h3">
        Add user
      </Typography>
      <MyInput
        text="Name"
        props={{
          value: userData.name,
          onChange: handleAddUserUpChange('name'),
        }}
      />
      <MyInput
        text="Email"
        props={{
          value: userData.email,
          onChange: handleAddUserUpChange('email'),
        }}
      />
      <MyInput
        text="Username"
        props={{
          value: userData.username,
          onChange: handleAddUserUpChange('username'),
        }}
      />
      <MyInput
        text="Password"
        props={{
          value: userData.password,
          onChange: handleAddUserUpChange('password'),
        }}
      />
      <MyInput
        text="passwordConfirm"
        props={{
          value: userData.passwordConfirm,
          onChange: handleAddUserUpChange('passwordConfirm'),
        }}
      />
      <FormControl fullWidth sx={{ mb: 2, mt: 2 }} variant="standard">
        <InputLabel id="demo-simple-select-label">User Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={10}>User</MenuItem>
          <MenuItem value={20}>Admin</MenuItem>
        </Select>
      </FormControl>
      <MyButton text="Add User" fullWidth onClick={handleAddUser} />
    </Box>
  );
}

export default AddUserForm;
