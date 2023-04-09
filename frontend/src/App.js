import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import ListingIndexPage from './components/ListingIndexPage';
import ListingShowPage from './components/ListingShowPage';
import CreateListing from './components/CreateListing';
import YourHomes from './components/YourHomes';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/"><Splash /></Route>
        <Route exact path="/homes"><ListingIndexPage /></Route>
        <Route exact path="/homes/:listingId"><ListingShowPage /></Route>
        <Route exact path='/sell'><CreateListing /></Route>
        <Route exact path='/:userId/homes'><YourHomes /></Route>
      </Switch>
    </> 
  );
}

export default App;
