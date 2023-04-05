import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing } from "../../store/listings";
import ShowDetails from "./ShowDetails";
import ShowHeader from "./ShowHeader";
import ShowImages from "./ShowImages";
import ShowNav from "./ShowNav";
import ShowRightSubnav from "./ShowRightSubnav";


function ListingShowPage() {
    const dispatch = useDispatch();
    const listingId = useParams().listingId;
    const listing = useSelector(state => state.listings[listingId]);

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [dispatch])


    if (!listing) {
        return null
    }
    else return(
        <div id='listing-show-page'>
            <div id="listing-show-page-left">
                <ShowImages listing={listing}/>
            </div>
            <div id="listing-show-page-right">
                <ShowNav />
                <ShowHeader listing={listing}/>
                <div id='show-details-area'>
                    <ShowRightSubnav />
                    <ShowDetails listing={listing}/>
                </div>
            </div>
            <h1>{listing.id}</h1>
            <h2>Working</h2>
        </div>
        
    )
}

export default ListingShowPage;