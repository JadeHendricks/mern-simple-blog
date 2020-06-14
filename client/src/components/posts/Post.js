import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Blog Post</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti nihil voluptatem, porro, 
                  aliquid veritatis minus ad sed doloremque sapiente enim eos alias libero expedita? Ipsum, 
                  corrupti eligendi ea facilis provident consectetur, voluptate ullam aspernatur amet pariatur 
                  voluptas modi vel accusamus beatae? Vero eveniet unde commodi nam, dicta vel obcaecati pariatur.
                </p>
                <Link to='/' class="btn btn-primary">Back</Link>
                <Link to='/' class="btn btn-secondary">Edit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post;