import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';

import Navbar from './components/layout/Navbar';

import ContactState from './context/contact/ContactState';

const App = () =>  {
  return (
    <ContactState>
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </div>
    </BrowserRouter>
    </ContactState>
  );
}

export default App;
