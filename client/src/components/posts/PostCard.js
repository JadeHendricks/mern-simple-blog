import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ post.title }</h5>
          <p className="card-text">{ post.description }</p>
          <Link to={`/post/${post.id}`} className="btn btn-primary">See more</Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard;