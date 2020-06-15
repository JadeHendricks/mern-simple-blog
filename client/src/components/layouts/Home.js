import React, { Fragment, useContext, useEffect } from 'react';
import PostCard from '../posts/PostCard';
import PostMain from '../posts/PostMain';
import PostContext from '../../context/post/postContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {

  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  const { posts, getPosts, clearCurrentPost } = postContext;
  const { loadUser } = authContext;

  useEffect(() => {
    clearCurrentPost();
    loadUser();
    getPosts();
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
          { posts && posts.map(post => <PostCard key={post.id} post={post}/>).slice(Math.max(posts.length - 2, 0)) }
        </div>
      </div>
    </section>
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            { posts ? posts.map(post => <PostMain key={post.id} post={post}/>) : (<h4>Please add a posts</h4>) }
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default Home;
