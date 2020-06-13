import React from 'react';

const Signup = () => {
  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
          <h1 className="mt-5 mb-3 h1">Sign in</h1>
          <form>
              <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" placeholder="you@example.com" className="form-control" id="email" name="email" />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" placeholder="••••••••" id="password" name="password" />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Confirm Password</label>
                  <input type="password" className="form-control" placeholder="••••••••" id="password1" name="password1" />
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
      </div>
    </div>
  )
}

export default Signup;