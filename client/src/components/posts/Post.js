import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostContext from '../../context/post/postContext';
import AlertContext from '../../context/alert/alertContext';

const Post = ({ match, history }) => {

  const postContext = useContext(PostContext);
  const alertContext = useContext(AlertContext);
  const { deletePost, getPost, setCurrentPost, clearCurrentPost, post } = postContext;
  const { setAlert } = alertContext;


  useEffect(() => {
    getPost(match.params.id);
    //eslint-disable-next-line
  }, [match.params.id])

  const onDelete = () => {
    deletePost(match.params.id);
    clearCurrentPost();
    setAlert('Post has been deleted!', 'success');

    setTimeout(() => history.push('/'), 5000);
  }

  const onEdit = () => {
    setCurrentPost(post);
    history.push('/addPost');
  }
  
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ post && post.title }</h5>
                <p className="card-text">
                  { post && post.description }
                </p>
                <Link to='/' className="btn btn-secondary mr-3">Back</Link>
                <button onClick={ onEdit } className="btn btn-primary mr-3">Edit</button>
                <button onClick={ onDelete } className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post;
