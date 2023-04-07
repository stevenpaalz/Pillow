import MapWrapper from "../Map";
import SearchBar from "../SearchBar";
import ListingIndexItem from "./ListingIndexItem";
import "./ListingIndexPage.css";
import ListingIndexItems from "./ListingIndexItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchListings } from "../../store/listings";

function ListingIndexPage() {
    const dispatch = useDispatch();
    const listings = useSelector(state => state.listings)

    useEffect(()=>{
        dispatch(fetchListings())
    }, [dispatch])

    return(
        <>
            <SearchBar />
            <div id='index-page-container'>
                
                <MapWrapper listings={listings}/>
                <ListingIndexItems listings={listings}/>
            </div>
        </>
    )
}

export default ListingIndexPage;