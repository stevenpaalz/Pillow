import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchListings } from "../../store/listings";
import ListingIndexItem from "./ListingIndexItem";
import './ListingIndexItems.css';

function ListingIndexItems() {
    const dispatch = useDispatch();
    const listings = useSelector(state => state.listings)


    useEffect(()=>{
        dispatch(fetchListings())
    }, [dispatch])

    useEffect(()=>{

    },[])

    return(
        <div id='index-page-right-side' className="open-sans">
            <div id='listings-page-index-headers'>
                <h3>Real Estate & Homes For Sale</h3>
                <h4>XX results</h4>
                <label htmlFor='listings-page-sort-by'>Sort By</label>
                <select name="sort=by" id='listings-page-sort-by'>
                    <option value="newest">Newest</option>
                    <option>Price (High to Low)</option>
                    <option>Price (Low to High)</option>
                    <option>Bedrooms</option>
                    <option>Bathrooms</option>
                    <option>Square Feet</option>
                </select>
            </div>

            <div id="listings-page-index">
                <ul id='index-listings-ul'>
                    {Object.values(listings).map((listing)=>{
                        return <ListingIndexItem key={listing.id} listing={listing} />
                    })}
                </ul>               
            </div>
        </div>
    )

}

export default ListingIndexItems;