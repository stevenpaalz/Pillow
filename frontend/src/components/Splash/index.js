import './Splash.css';
import SplashListings from './SplashListings';
import SplashCTA from "./SplashCTA";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchListings } from '../../store/listings';
import { useState } from 'react';

function Splash() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchField, setSearchField] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        history.replace("/homes");
        dispatch(searchListings(searchField));
    }

    return(
        <div id='splash-container'>
            <div id='splash-header'>
                <h1>Find it. Tour it. Own it.</h1>
                <form onSubmit={handleSubmit} className="open-sans" id='splash-search'>
                    <input value={searchField} onChange={(e) => {setSearchField(e.target.value)}} placeholder='Enter an address, city, state, or ZIP code'></input>
                    <span><button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button></span>
                </form>
            </div>
           <div id='splash-index'>
                <SplashListings />
           </div>
           <SplashCTA />

        </div>
    )
}

export default Splash;