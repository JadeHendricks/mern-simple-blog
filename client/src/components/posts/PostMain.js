import React from 'react';
import { Link } from 'react-router-dom';

const PostMain = ({ post }) => {
  return (
    <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{ post.title }</h5>
      <p className="card-text">
        { post.description }
      </p>
      <Link to={`/post/${post._id}`} className="btn btn-primary">See more</Link>
    </div>
  </div>
  )
}

export default PostMain;
