import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchListing, fetchListings } from "../../store/listings";
import ShowDetailsIcons from "./ShowDetailsIcons";
import ShowHeader from "./ShowHeader";
import ShowImages from "./ShowImages";
import ShowNav from "./ShowNav";
import ShowRightSubnav from "./ShowRightSubnav";
import ShowDetailsOverview from "./ShowDetailsOverview";
import ShowDetailsFacts from "./ShowDetailsFacts";
import "./ListingsShowPage.css";

function ListingShowPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const listingId = useParams().listingId;
    const favorites = useSelector(state => state.favorites)
    const listing = useSelector(state => state.listings[listingId]);

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [dispatch])

    useEffect(()=>{
        dispatch(fetchListing(listingId));
    },[favorites])

    const closePage = () => {
        history.push('/homes')
    }

    if (!listing) {
        return(
            <h1>Loading...</h1>
        )
    }
    else return(
        <div id='show-page-container'>
            <div onClick={closePage} id="listing-show-page-background">
                <div id="close-page-button-container">
                    <button className="close-page-button" onClick={closePage}><i className="fa-regular fa-x"></i></button>
                </div>
            </div>
            <div id='listing-show-content' className='open-sans'>
                <div id="listing-show-page-left">
                    <ShowImages listing={listing}/>
                </div>
                <div id="listing-show-page-right">
                    <ShowNav listing={listing}/>
                    <ShowHeader listing={listing}/>
                    <div id='show-details-area'>
                        <ShowRightSubnav />
                        <div id="Show-details-content">
                            <ShowDetailsIcons listing={listing}/>
                            <ShowDetailsOverview listing={listing}/>
                            <ShowDetailsFacts listing={listing}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingShowPage;