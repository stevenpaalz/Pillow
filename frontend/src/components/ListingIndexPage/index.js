import Map from "../Map";
import SearchBar from "../SearchBar";
import "./ListingIndexPage.css";

function ListingIndexPage() {

    return(
        <>
            <SearchBar />
            <div id='index-page-container'>
                
                <div id="map">
                    <Map />
                </div>
                <div id="listings-page-index">
                    <div id='listings-page-index-headers'>
                        <h3>Real Estate & Homes For Sale</h3>
                        <h4>XX results</h4>
                        <label htmlFor='listings-page-sort-by'>Sort By</label>
                        <select id='listings-page-sort-by'>
                            <option>Newest</option>
                            <option>Price (High to Low)</option>
                            <option>Price (Low to High)</option>
                            <option>Bedrooms</option>
                            <option>Bathrooms</option>
                            <option>Square Feet</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingIndexPage;