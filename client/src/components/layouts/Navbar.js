import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;
  
  const onLogout = () => {
    logout();
  }

  const loggedInLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to='/addPost'>Add Post</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={ onLogout }  href="#!">Logout</a>
      </li>
    </Fragment>
  )

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to='/'>Simple Blog</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          { isAuthenticated ? <li className="nav-item">
            <a className="nav-link" href="#!">Hello { user && user.name }</a>
          </li> : '' }
          <li className="nav-item">
            <Link className="nav-link" to='/'>Blog</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to='/about'>About</Link>
          </li>
          { isAuthenticated ? loggedInLinks : '' }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
