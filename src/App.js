import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css'
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
    <Switch>
    <Route path='/' component={HomePage}/>

    </Switch>
    </div>
  );
}

export default App;
