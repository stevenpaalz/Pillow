import "./ShowHeader.css";

function ShowHeader({listing}) {

    return(
        <div id='show-header'>
            <div id='show-header-facts'>
                <h4 id='show-price'>{listing.price.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0,})}</h4>
                <ul>
                    <li><span>{listing.numBeds}</span> bds</li>
                    <li><span>{listing.numBaths}</span> ba</li>
                    <li><span>{listing.squareFeet}</span> sqft</li>
                </ul>
            </div>
            <p id='show-header-address'>
                <span>{listing.streetNumber}</span>
                <span> {listing.streetAddress}</span>
                {listing.unitNumber && <span> {listing.unitNumber}</span>}
                <span>, {listing.city}</span>,
                <span> {listing.state}</span>,
                <span> {listing.zipcode}</span>
            </p>
            <p id='show-header-sale-type'>For {listing.saleType}</p>
            <div id='header-buttons'>
                <button>Request a tour</button>
                <button>Contact an agent</button>
            </div>
        </div>
    )
}

export default ShowHeader;