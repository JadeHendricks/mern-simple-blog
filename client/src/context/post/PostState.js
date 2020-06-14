import React, { useReducer } from 'react';
import uuid from 'uuid';
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
    ]
  }

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Post
  // Update Post
  // Delete Post

  // Set Current Post
  // Clear Current Post

  return (
    <PostContext.Provider value={{
      posts: state.posts
    }}>
      { props.children }
    </PostContext.Provider>
  )
};

export default PostState;
