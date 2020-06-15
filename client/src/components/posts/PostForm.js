import React, { useState, useContext, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import PostContext from '../../context/post/postContext';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const PostForm = (props) => {

  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { addPost, updatePost, currentPost, clearCurrentPost } = postContext;  
  const { user } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (currentPost) {
      setPost(currentPost)
    } else {
      setPost({
        title: '',
        description: ''
      });
    }
  }, [postContext, currentPost])

  const [post, setPost] = useState({
    title: '',
    description: ''
  });
  

  const { title, description } = post;

  const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (currentPost === null) {
      addPost({...post, user: user._id});
      setAlert('Post has been added!', 'success');
    } else {
      updatePost(post);
      setAlert('Post has been updated!', 'success');
    }

    onClear();
    setTimeout(() => props.history.push('/'), 5000);

  }

  const onClear = () => {
    clearCurrentPost();
  }

  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <div className="col-md-6 offset-md-3">
            <h1 className="mt-5 mb-3 h1">{ currentPost ? 'Update Post' : 'Add Post' }</h1>
            <form onSubmit={ onSubmit }>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Title goes here" value={ title } className="form-control" id="title" name="title" onChange={ onChange } required/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" value={ description } placeholder="Description goes here" name="description" rows="3" onChange={ onChange } required></textarea>
                </div>
                <Link to='/' className="btn btn-secondary mr-3">Back</Link>
                <button type="submit" className="btn btn-primary mr-3">{ currentPost ? 'Update Post' : 'Add Post' }</button>
                <button onClick={ onClear } className="btn btn-danger">Clear</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default PostForm;
