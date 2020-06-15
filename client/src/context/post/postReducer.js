import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  POST_ERROR,
  GET_POSTS,
  GET_POST
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case GET_POSTS: 
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    case GET_POST: 
      return {
        ...state,
        post: action.payload,
        loading: false
      }
    case ADD_POST: {
      console.log(action.payload);
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
        loading: false
      }
    }
    case UPDATE_POST: 
      return {
        ...state,
        posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post),
        loading: false
      }
    case SET_CURRENT: 
      return {
        ...state,
        currentPost: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        currentPost: null
      }
    case POST_ERROR: 
      return {
        ...state,
        error: action.payload
      }
    default: 
      return state;
  }
}