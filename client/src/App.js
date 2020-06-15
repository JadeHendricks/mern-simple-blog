import React from 'react';
import Navbar from './components/layouts/Navbar';
import Home from './components/layouts/Home';
import Alert from './components/layouts/Alert';
import About from './components/user/About';
import Login from './components/auth/Login';
import Post from './components/posts/Post';
import AddPost from './components/posts/PostForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PostState from './context/post/PostState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import './App.css';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = (props) => {
  return (
    <AuthState>
      <AlertState>
        <PostState>
          <Router>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/admin' exact component={ Login } />
                <Route path='/about' exact component={ About } />
                <Route path='/post/:id'exact history={props.history} component={ Post } />
                <PrivateRoute path='/addPost'exact component={ AddPost } />
              </Switch>
            </div>
          </Router>
        </PostState>
      </AlertState>
    </AuthState>
  );
}

export default App;
