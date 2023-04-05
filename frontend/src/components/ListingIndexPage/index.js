import Map from "../Map";
import SearchBar from "../SearchBar";
import ListingIndexItem from "./ListingIndexItem";
import "./ListingIndexPage.css";
import ListingIndexItems from "./ListingIndexItems";

function ListingIndexPage() {

    return(
        <>
            <SearchBar />
            <div id='index-page-container'>
                
                <div id="map">
                    <Map />
                </div>
            <ListingIndexItems />
            </div>
        </>
    )
}

export default ListingIndexPage;