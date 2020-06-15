import React, { useReducer } from 'react';
import {v4 as uuidv4} from "uuid";
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT,
  USER_LOADED,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/v1/users/me');
      dispatch({
        type: USER_LOADED,
        payload: res.data.user
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  }
  // Login User
  const login = async formData => {
    const config = {
      headers: {'Content-Type': 'application/json'}
    }

    try {
      const res = await axios.post('/api/v1/auth/login', formData, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      })
    }

  }
  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT })
  }
  // Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS })
  }

  return (
    <AuthContext.Provider value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error,
      loadUser,
      login,
      clearErrors,
      logout
    }}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthState;
