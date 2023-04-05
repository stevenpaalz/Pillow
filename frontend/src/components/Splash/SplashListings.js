import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from "../../store/listings";
import ListingIndexItem from "../ListingIndexPage/ListingIndexItem";
import './SplashListings';

function SplashListings() {
    const dispatch = useDispatch();
    const listings = useSelector(state => state.listings)

    useEffect(()=>{
        dispatch(fetchListings())
    }, [dispatch])

    const nextScroll = (e) => {
        e.preventDefault();
        const splashCarousel = document.getElementById('splash-carousel');
        const lastListingItem = document.querySelector('#splash-carousel li.listing-index-item:last-child');
        let rect = lastListingItem.getBoundingClientRect();
        const extra = ((rect.left - 82) % 359);
        splashCarousel.scrollBy({left: 359 + extra});
    }

    const prevScroll = (e) => {
        e.preventDefault();
        const splashCarousel = document.getElementById('splash-carousel');
        const lastListingItem = document.querySelector('#splash-carousel li.listing-index-item:last-child');
        let rect = lastListingItem.getBoundingClientRect();
        const extra = (359 - ((rect.left - 82) % 359));
        splashCarousel.scrollBy({left: -359 - extra});
    }

    const scrollHandler = () => {
        const splashCarousel = document.getElementById('splash-carousel')
        const nextButton = document.getElementById('next-button');
        const previousButton = document.getElementById('previous-button');
        if (splashCarousel.scrollLeft === 0) {
            previousButton.setAttribute('disabled', true);
        } else { previousButton.removeAttribute('disabled');}

        const lastCarouselItem = document.querySelector('#splash-carousel li.listing-index-item:last-child')
        const rect = lastCarouselItem.getBoundingClientRect();
        if ((rect.right) <= window.innerWidth - (window.innerWidth*.09)) {
            nextButton.setAttribute('disabled', true);
        } else {nextButton.removeAttribute('disabled');}
    }
    
    useEffect(()=> {
        const previousButton = document.getElementById('previous-button');
        previousButton.setAttribute('disabled', true);
    }, [])

    return(
        <>
            <div className='open-sans' id='splash-listings-nav'>
                <div id='splash-listings-headers'>
                    <h3>Homes For You</h3>
                    <h4>Based on your view history</h4>
                </div>
                <div id='splash-listings-scroller'>
                    <button id='previous-button' onClick={prevScroll}><i className="fa-solid fa-chevron-left"></i></button>
                    <button id='next-button' onClick={nextScroll}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <ul id='splash-carousel' onScroll={scrollHandler}>
                {Object.values(listings).map((listing)=>{
                    return <ListingIndexItem key={listing.id} listing={listing} />
                })}
            </ul>
        </>
    )
}

export default SplashListings;