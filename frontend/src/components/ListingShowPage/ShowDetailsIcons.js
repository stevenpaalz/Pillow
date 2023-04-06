import './ShowDetailsIcons.css';

function ShowDetails({listing}) {

    let aircon;
    listing.airCon ? (aircon = listing.airCon) : (aircon = "No data");

    return(
        <ul id="show-details-icons">
            <li><i className="fa-regular fa-building"></i>{listing.homeType}</li>
            <li><i className="fa-regular fa-calendar-days"></i>Built in {listing.yearBuilt}</li>
            <li><i className="fa-regular fa-snowflake"></i>{aircon}</li>
            {listing.saleType === "Sale" && <li>
                <i className="fa-solid fa-ruler-combined"></i>
                {(listing.price / listing.squareFeet).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0,})} price/sqft
            </li>}
            {listing.saleType === "Rent" && <li>
                <i className="fa-solid fa-sack-dollar"></i>
                {(listing.price / 30).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0,})} per month
            </li>}
        </ul>
    )

}

export default ShowDetails;