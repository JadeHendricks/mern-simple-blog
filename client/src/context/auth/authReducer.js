import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT,
  USER_LOADED,
  CLEAR_ERRORS
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS: 
    localStorage.setItem('token', action.payload.token);
    console.log(action.payload);
    return {
      ...state,
      ...action.payload,
      isAuthenticated: true,
      loading: false,
    }
    case USER_LOADED: 
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload[0]
      }
    case AUTH_ERROR: 
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      }
    case CLEAR_ERRORS: 
      return {
        ...state,
        error: null
      };
    default: 
      return state;
  }
}