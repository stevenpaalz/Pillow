import React, {useEffect} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import ListingIndexPage from './components/ListingIndexPage';
import ListingShowPage from './components/ListingShowPage';
import CreateListing from './components/CreateListing';
import YourHomes from './components/YourHomes';
import UpdateFormPage from './components/UpdateListing';
import Favorites from './components/Favorites';
import InProcessPage from './components/InProcessPage';

function App() {
  // const location = useLocation();
  // useEffect(()=> {

  // }, [location])
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/homes"><ListingIndexPage /></Route>
        <Route exact path="/homes/:listingId"><ListingShowPage /></Route>
        <Route exact path='/sell'><CreateListing /></Route>
        <Route exact path='/:userId/homes'><YourHomes /></Route>
        <Route exact path='/homes/:listingId/edit'><UpdateFormPage /></Route>
        <Route exact path='/:userId/favorites'><Favorites /></Route>
        <Route exact path='/in-process'><InProcessPage /></Route>
        <Route path="/"><Splash /></Route>
      </Switch>
    </> 
  );
}

export default App;
