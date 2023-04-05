import '../Splash/SplashListings.css';
import placeholderImage from '../../assets/placeholder.jpeg';
import './ListingIndexItem.css';
import { useState } from 'react';

function ListingIndexItem({listing}) {
    const [liked, setLiked] = useState(false)

    const toggleLiked = (e) => {
        e.preventDefault();
        setLiked(!liked);
    }

    return(
        <li className='listing-index-item open-sans'>
            <button onClick={toggleLiked} id="index-like-button">
                <i className="fa-solid fa-heart background-heart"></i>
                {!liked && <i className="fa-regular fa-heart foreground-heart"></i>}
                {liked && <i className="fa-solid fa-heart foreground-heart"></i>}
            </button>
            <img src={placeholderImage} alt="apartment" id='lead-index-image'/>
            <h4 id='listing-index-price'>{listing.price.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0,})}</h4>
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

