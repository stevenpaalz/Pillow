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
// working here
    // const nextScroll = 

    return(
        <>
            <div id='splash-listings-nav'>
                <div id='splash-listings-headers'>
                    <h3>Homes For you</h3>
                    <h4>Based on your view history</h4>
                </div>
                <div id='splash-listings-scroller'>
                    <button>Previous</button>
                    <button onClick={nextScroll}>Next</button>
                </div>
            </div>
            <ul id='splash-carousel'>
                {Object.values(listings).map((listing)=>{
                    return <ListingIndexItem key={listing.id} listing={listing} />
                })}
            </ul>
            <div id='splash-mask'>
            </div>
        </>
    )
}

export default SplashListings;