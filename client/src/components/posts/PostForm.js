import React from 'react';

const PostForm = () => {
  return (
    <section class="mt-5 mb-5">
      <div class="container">
        <div class="col-md-6 offset-md-3">
            <h1 class="mt-5 mb-3 h1">Add Post</h1>
            <form>
                <div class="form-group">
                    <label for="postTitle">Title</label>
                    <input type="text" placeholder="Title goes here" class="form-control" id="postTitle" name="postTitle" required/>
                </div>
                <div class="form-group">
                    <label for="postDesc">Description</label>
                    <textarea class="form-control" id="postDesc" placeholder="Description goes here" rows="3" name="postDesc"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Add Post</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default PostForm;
