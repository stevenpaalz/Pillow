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
            <div className='listing-index-content'>
            <h4 id='listing-index-price'>{listing.price.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0,})}</h4>
            <ul className='listing-index-facts'>
                <li><span>{listing.numBeds}</span> bds</li>
                <li><span>{listing.numBaths}</span> ba</li>
                <li><span>{listing.squareFeet}</span> sqft</li>
                <li>{listing.homeType} for {listing.saleType}</li>
            </ul>
            <p className='listing-index-address'>
                <span>{listing.streetNumber}</span>
                <span> {listing.streetAddress}</span>
                {listing.unitNumber && <span> {listing.unitNumber}</span>}
                <span>, {listing.city}</span>,
                <span> {listing.state}</span>,
                <span> {listing.zipcode}</span>
            </p>
            <p className='listing-index-lister'>LISTING BY: {listing.lister.email}</p>
            </div>
        </li>
    )
}

export default ListingIndexItem;

