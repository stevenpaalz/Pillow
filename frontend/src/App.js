import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Splash from './components/Splash';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        {/* <Route path="/login"><LoginFormPage/></Route> */}
        <Route exact path="/signup"><SignupFormPage /></Route>
        <Route exact path="/"><Splash /></Route>
      </Switch>
    </> 
  );
}

export default App;
