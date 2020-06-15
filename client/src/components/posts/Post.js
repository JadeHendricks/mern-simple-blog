import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostContext from '../../context/post/postContext';

const Post = ({ match }) => {

  const postContext = useContext(PostContext);
  const { deletePost, setCurrentPost, clearCurrentPost, posts } = postContext;

  const [post, setPost] = useState([...posts]);

  useEffect(() => {
    const currentPost = post.filter(post => Number(post.id) === Number(match.params.id));
    setPost(currentPost);
  }, [match.params.id])

  const onDelete = () => {
    deletePost(match.params.id);
    clearCurrentPost();
  }
  
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ post[0]?.title }</h5>
                <p className="card-text">
                  { post[0]?.description }
                </p>
                <Link to='/' className="btn btn-secondary mr-3">Back</Link>
                <button onClick={ () => setCurrentPost(post[0]) } className="btn btn-primary mr-3">Edit</button>
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
