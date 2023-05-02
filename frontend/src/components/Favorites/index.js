import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../store/listings";
import ListingIndexItem from "../ListingIndexPage/ListingIndexItem";
import { fetchFavorites } from "../../store/favorites";
import { fetchUsers } from "../../store/users";
import "./Favorites.css";

function Favorites() {
    const [myListings, setMyListings] = useState([]);
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    if (!sessionUser) {
        history.push("/");
    }

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const listings = useSelector(state => state.listings.listings);
    const listingsIds = useSelector(state => state.listings.listingsIds);
    const users = useSelector(state => state.users);
    
    useEffect(()=>{
        dispatch(fetchFavorites())
    }, [dispatch])

    useEffect(()=>{
        dispatch(fetchUsers())
        dispatch(fetchListings())
    }, [favorites])

    useEffect(()=>{
        setMyListings([]);
        if (!listings) return;
        if (!sessionUser) return;
        if (users[sessionUser.id]) {
            let favoritedListingIds = users[sessionUser.id].favoritedIds;
            let updatedListings = favoritedListingIds.map((favoritedListingId) => {
                return listings[favoritedListingId]
            })
            setMyListings(updatedListings);
        }
    }, [favorites, listings, users])

    const nextScroll = (e) => {
        e.preventDefault();
        const yourHomeCarousel = document.getElementById('favorites-carousel');
        const lastListingItem = document.querySelector('#favorites-carousel li.house-package:last-child');
        let rect = lastListingItem.getBoundingClientRect();
        const extra = ((rect.left - 82) % 359);
        yourHomeCarousel.scrollBy({left: 359 + extra});
    }

    const prevScroll = (e) => {
        e.preventDefault();
        const yourHomeCarousel = document.getElementById('favorites-carousel');
        const lastListingItem = document.querySelector('#favorites-carousel li.house-package:last-child');
        let rect = lastListingItem.getBoundingClientRect();
        const extra = (359 - ((rect.left - 82) % 359));
        yourHomeCarousel.scrollBy({left: -359 - extra});
    }

    const scrollHandler = () => {
        const yourHomeCarousel = document.getElementById('favorites-carousel')
        const nextButton = document.getElementById('next-button');
        const previousButton = document.getElementById('previous-button');
        if (yourHomeCarousel.scrollLeft === 0) {
            previousButton.setAttribute('disabled', true);
        } else { previousButton.removeAttribute('disabled');}

        const lastCarouselItem = document.querySelector('#favorites-carousel li.house-package:last-child')
        const rect = lastCarouselItem.getBoundingClientRect();
        if ((rect.right) <= window.innerWidth - (window.innerWidth*.08)) {
            nextButton.setAttribute('disabled', true);
        } else {nextButton.removeAttribute('disabled');}
    }
    
    useEffect(()=> {
        if (!myListings || myListings.length === 0) return; 
        const previousButton = document.getElementById('previous-button');
        previousButton.setAttribute('disabled', true);
    }, [])

    if (!myListings) {return(
        <h1>Loading...</h1>
    )}

    return(
        <div id="favorites-container">
            <div className='open-sans' id='favorites-listings-nav'>
                <div id='favorites-listings-headers'>
                    <h3>Saved homes</h3>
                </div>
                {myListings.length > 0 && <div id='favorites-listings-scroller'>
                    <button id='previous-button' onClick={prevScroll}><i className="fa-solid fa-chevron-left"></i></button>
                    <button id='next-button' onClick={nextScroll}><i className="fa-solid fa-chevron-right"></i></button>
                </div>}
            </div>
            <div id="favorites-body">

                <ul id='favorites-carousel' onScroll={scrollHandler}>

                    {myListings.length === 0 && <li className="no-homes-message" id="saved-homes-message">No saved homes yet</li>}
                    {myListings.length > 0 && myListings.map((listing)=>{
                        
                        return(
                            <li key={listing.id} className="house-package">
                                <ul>
                                    <ListingIndexItem listing={listing} favorites={favorites} />
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Favorites;