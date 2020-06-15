import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import AlertContext from '../alert/alertContext';
import PostContext from './postContext';
import contactReducer from './postReducer';
import {
  ADD_POST,
  UPDATE_POST,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  POST_ERROR
} from '../types';

const PostState = props => {
  const initialState = {
    posts: null,
    post: null,
    currentPost: null,
    error: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  // Get posts
  const getPosts = async () => {
    try {
      const res = await axios.get('/api/v1/posts');
      dispatch({ 
        type: GET_POSTS, 
        payload: res.data.posts
      });
    } catch (err) {
      dispatch({ 
        type: POST_ERROR, 
        payload: err.response.data.msg 
      });
    }
  }
    // Get posts
    const getPost = async id => {
      try {
        const res = await axios.get(`/api/v1/posts/${id}`);
        dispatch({ 
          type: GET_POST, 
          payload: res.data.data.post
        });
      } catch (err) {
        dispatch({ 
          type: POST_ERROR, 
          payload: err.response.data.msg 
        });
      }
    }
  // Add Post
  const addPost = async post => {
    const config = {
      headers: {'Content-Type': 'application/json'}
    };

    try {
      const res = await axios.post('/api/v1/posts', post, config);
      dispatch({ 
        type: ADD_POST, 
        payload: res.data 
      });
    } catch (err) {
      dispatch({ 
        type: POST_ERROR, 
        payload: err.response.data.msg 
      });
      setAlert(err.response.data.msg, 'danger');
    }
  }
  // Update Post
  const updatePost = async post => {
    const config = {
      headers: {'Content-Type': 'application/json'}
    };

    try {
      const res = await axios.put(`/api/v1/posts/${post._id}`, post, config);
      dispatch({ 
        type: UPDATE_POST, 
        payload: res.data.post 
      });
    } catch (err) {
      dispatch({ 
        type: POST_ERROR, 
        payload: err.response.data.msg 
      });
    }
  }
  // Delete Post
  const deletePost = async id => {

    try {
      await axios.delete(`/api/v1/posts/${id}`);
      dispatch({ 
        type: DELETE_POST, 
        payload: id 
      });
    } catch (err) {
      dispatch({ 
        type: POST_ERROR, 
        payload: err.response.data.msg 
      });
    }

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
      post: state.post,
      posts: state.posts,
      currentPost: state.currentPost,
      error: state.error,
      addPost,
      deletePost,
      updatePost,
      setCurrentPost,
      clearCurrentPost,
      getPosts,
      getPost
    }}>
      { props.children }
    </PostContext.Provider>
  )
};

export default PostState;
