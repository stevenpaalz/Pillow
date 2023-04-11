import MapWrapper from "../Map";
import SearchBar from "../SearchBar";
import ListingIndexItem from "./ListingIndexItem";
import "./ListingIndexPage.css";
import ListingIndexItems from "./ListingIndexItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchListings } from "../../store/listings";
import { fetchFavorites } from "../../store/favorites";

function ListingIndexPage() {
    const dispatch = useDispatch();
    const listings = useSelector(state => state.listings)
    const favorites = useSelector(state => state.favorites)

    useEffect(()=>{
        dispatch(fetchListings());
        dispatch(fetchFavorites());
    }, [dispatch])

    useEffect(()=>{
        dispatch(fetchListings());
    },[favorites])

    if (!listings || !favorites) {
        return(
            <h1>Loading...</h1>
        )
    }

    return(
        <>
            <SearchBar />
            <div id='index-page-container'>
                
                <MapWrapper listings={listings}/>
                <ListingIndexItems listings={listings} favorites={favorites}/>
            </div>
        </>
    )
}

export default ListingIndexPage;