import React, { useReducer } from 'react';
import {v4 as uuidv4} from "uuid";
import PostContext from './postContext';
import contactReducer from './postReducer';
import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const PostState = props => {
  const initialState = {
    posts: [
      {
        id: 1,
        title: 'The Great Gatsby',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ullamcorper urna, eu varius lectus. Phasellus lobortis purus nulla, molestie consectetur lorem laoreet sit amet.'
      },
      {
        id: 2,
        title: 'The Chiproll',
        description: 'laoreet turpis maximus. Duis dictum massa a nulla tristique, ut sodales velit scelerisque. Maecenas et leo non felis rutrum blandit non ut enim. Pellentesque eu lacus sit amet nisi fringilla maximus eget sit amet risus.'
      },
      {
        id: 3,
        title: 'My trip to England',
        description: 'Aenean a mauris at sem eleifend efficitur ac sed elit. In porttitor tempor lorem, vitae consectetur nisl molestie ac. Donec vitae eros sed massa iaculis cursus vitae eu urna. Aliquam vitae dictum erat. Praesent rutrum massa lectus, in tempor lorem scelerisque et.'
      }
    ],
    currentPost: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Post
  const addPost = post => {
    post.id = uuidv4();
    dispatch({ type: ADD_POST, payload: post });
  }
  // Update Post
  const updatePost = post => {
    dispatch({ type: UPDATE_POST, payload: post });
  }
  // Delete Post
  const deletePost = id => {
    dispatch({ type: DELETE_POST, payload: id });
  }
  // Set Current Post
  const setCurrentPost = post => {
    dispatch({ type: SET_CURRENT, payload: post });
  }
  // Clear Current Post
  const clearCurrentPost = post => {
    dispatch({ type: CLEAR_CURRENT });
  }

  return (
    <PostContext.Provider value={{
      posts: state.posts,
      currentPost: state.currentPost,
      addPost,
      deletePost,
      updatePost,
      setCurrentPost,
      clearCurrentPost
    }}>
      { props.children }
    </PostContext.Provider>
  )
};

export default PostState;
