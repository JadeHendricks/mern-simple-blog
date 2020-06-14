import React, { Fragment } from 'react';
import Navbar from './components/layouts/Navbar';
import Home from './components/layouts/Home';
import About from './components/user/About';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import AddPost from './components/posts/PostForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
        <div className="container">
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/about' exact component={About} />
          <Route path='/addPost'exact component={AddPost} />
        </div>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
