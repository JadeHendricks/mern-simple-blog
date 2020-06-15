import React, { Fragment, useContext, useEffect } from 'react';
import PostCard from '../posts/PostCard';
import PostMain from '../posts/PostMain';
import PostContext from '../../context/post/postContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {

  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  const { posts } = postContext;
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, [])

  return (
    <Fragment>
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-3">Latest Posts</h1>
          </div>         
          { posts.map(post => <PostCard key={post.id} post={post}/>).slice(1, 3) }
        </div>
      </div>
    </section>
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            { posts.map(post => <PostMain key={post.id} post={post}/>) }
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default Home;
