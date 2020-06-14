import React, { useState } from 'react';

const PostForm = () => {

  const [post, setPost] = useState({
    title: '',
    description: ''
  });

  const { title, description } = post;

  const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      console.log('Please enter a title and a description');
    } else {
      console.log('Post Added');
      console.log('post', post);
    }

  }

  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <div className="col-md-6 offset-md-3">
            <h1 className="mt-5 mb-3 h1">Add Post</h1>
            <form onSubmit={ onSubmit }>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Title goes here" className="form-control" id="title" name="title" onChange={ onChange } required/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" placeholder="Description goes here" name="description" rows="3" onChange={ onChange } required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Post</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default PostForm;
