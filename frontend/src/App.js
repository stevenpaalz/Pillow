import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Splash from './components/Splash';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/"><Splash /></Route>
      </Switch>
    </> 
  );
}

export default App;
