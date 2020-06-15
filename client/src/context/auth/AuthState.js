import React, { useReducer } from 'react';
import {v4 as uuidv4} from "uuid";
import AuthContext from './authContext';
import authReducer from './authReducer';
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
  // Login User
  // Logout
  // Clear Errors


  return (
    <AuthContext.Provider value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      error: state.error,
      user: state.user
    }}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthState;
