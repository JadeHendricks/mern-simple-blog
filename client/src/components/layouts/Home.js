import React, { Fragment } from 'react';
import PostCard from '../posts/PostCard';
import PostMain from '../posts/PostMain';

const Home = () => {
  return (
    <Fragment>
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-3">Latest Posts</h1>
          </div>
          <PostCard />
          <PostCard />
        </div>
      </div>
    </section>
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <PostMain />
            <PostMain />
            <PostMain />
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default Home;
