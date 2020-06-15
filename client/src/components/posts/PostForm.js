import React, { useState, useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';

const PostForm = () => {

  const postContext = useContext(PostContext);
  const { posts, addPost, updatePost, setCurrentPost, currentPost, clearCurrentPost } = postContext;

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

    if (!currentPost) {
      addPost(post);
      clearCurrentPost();
    } else {
      updatePost(post)
    }

    onClear();
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
                <button type="submit" className="btn btn-primary mr-3">{ currentPost ? 'Update Post' : 'Add Post' }</button>
                <button onClick={ onClear } className="btn btn-danger">Clear</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default PostForm;
