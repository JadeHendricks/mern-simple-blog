import React from 'react';
import { Link } from 'react-router-dom';

const PostMain = () => {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">Blog Post</h5>
      <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti nihil voluptatem, porro, 
        aliquid veritatis minus ad sed doloremque sapiente enim eos alias libero expedita? Ipsum, 
        corrupti eligendi ea facilis provident consectetur, voluptate ullam aspernatur amet pariatur 
        voluptas modi vel accusamus beatae? Vero eveniet unde commodi nam, dicta vel obcaecati pariatur.
      </p>
      <Link to='/post/2' className="btn btn-primary">Go somewhere</Link>
    </div>
  </div>
  )
}

export default PostMain;
