import { createSlice } from '@reduxjs/toolkit';

const user = localStorage.getItem('user');

const initialState = {
  isAuthenticated: user ? true : false,
  token: user ? JSON.parse(user).token : '',
  user: user ? JSON.parse(user) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.data;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = '';
    },
  },
});

export const { loginUser, logout, setError, saveFavorites } = authSlice.actions;
export default authSlice.reducer;
