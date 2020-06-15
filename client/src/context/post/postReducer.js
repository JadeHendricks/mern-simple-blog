import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      }
    }
    case UPDATE_POST: 
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
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
    default: 
      return state;
  }
}