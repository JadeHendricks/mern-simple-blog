import React, { Fragment } from 'react';
import Navbar from './components/layouts/Navbar';
import Home from './components/layouts/Home';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
