import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;

//<Route path='/hats' component={HatsPage} />
