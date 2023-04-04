import '../Splash/SplashListings.css';

function ListingIndexItem({listing}) {

    return(
        <li className='listing-index-item'>
            <p>image placeholder</p>
            <h4>{listing.price}</h4>
            <ul>
                <li>{listing.numBeds} bds</li>
                <li>{listing.numBaths} ba</li>
                <li>{listing.squareFeet} sqft</li>
                <li>{listing.homeType} for {listing.saleType}</li>
            </ul>
            <p>
                <span>{listing.streetNumber}</span>
                <span> {listing.streetAddress}</span>
                {listing.unitNumber && <span> {listing.unitNumber}</span>}
                <span>, {listing.city}</span>,
                <span> {listing.state}</span>,
                <span> {listing.zipcode}</span>
            </p>
            <p>LISTING BY: {listing.lister.email}</p>
        </li>
    )
}

export default ListingIndexItem;

