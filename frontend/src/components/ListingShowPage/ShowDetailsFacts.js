import "./ShowDetailsFacts.css";

function ShowDetailsFacts({listing}) {

    return(
        <div id="show-details-facts">
            <h3>Facts and features</h3>
            <div id='interior-details'>
                <h4>Interior Details</h4>
                <h5>Bedrooms and bathrooms</h5>
                <ul>
                    <li>Bedrooms: {listing.numBeds}</li>
                    <li>Bathrooms: {listing.numBaths}</li>
                    <li>Full bathrooms: {Math.floor(listing.numBaths)}</li>
                </ul>
                <h5>Cooling</h5>
                <ul>
                    <li>Cooling featutes: {listing.airCon}</li>
                </ul>
            </div>
            <div id='construction-details'>
                <h4>Construction Details</h4>
                <h5>Type and style</h5>
                <ul>
                    <li>Home type: {listing.homeType}</li>
                </ul>
                <h5>Condition</h5>
                <ul>
                    <li>New Construction: {listing.yearBuilt >= 2022 ? "Yes" : "No"}</li>
                    <li>Year built: {listing.yearBuilt}</li>
                </ul>
            </div>
            <div id='community'>
                <h4>Community and Neighborhood Details</h4>
                <h5>Location</h5>
                <ul>
                    <li>Region: {listing.city}</li>
                </ul>
            </div>
        </div>
    )
}

export default ShowDetailsFacts;