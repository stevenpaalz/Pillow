import '../Splash/SplashListings.css';
import './ListingIndexItem.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { createFavorite, deleteFavorite } from '../../store/favorites';

function ListingIndexItem({listing, favorites}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [liked, setLiked] = useState(false)

    useEffect(()=>{
        setLiked(false);
        if (!sessionUser) {return}
        if ((listing.favoriteIds).some((element) => {
            return favorites[element] && favorites[element].userId === sessionUser.id
        })) { 
            setLiked(true)
        } else {
            setLiked(false);
        }
    }, [favorites, sessionUser, listing.favoriteIds])

    const toggleLiked = (e) => {
        if (!sessionUser) {
            console.log("nobody logged in")
        }
        e.preventDefault();
        e.stopPropagation();
        if (liked === true) {
            let favorite = Object.values(favorites).filter((favorite) => {
                return (favorite.listingId === listing.id) && (favorite.userId === sessionUser.id)
            })
            dispatch(deleteFavorite(favorite[0].id))
        } else {
            dispatch(createFavorite({listingId: listing.id, userId: sessionUser.id}))
        }
    }

    let modifiedHomeType;

    if (listing.homeType === "Apartment") {
        modifiedHomeType = "Apt";
    } else {
        modifiedHomeType = listing.homeType;
    }

    const routeChange = () => {
        history.push(`/homes/${listing.id}`)
    }

    return(
        <li onClick={routeChange} className='listing-index-item open-sans'>
            {(!sessionUser || listing.lister.id !== sessionUser.id) && 
            <button onClick={toggleLiked} id="index-like-button">
                <i className="fa-solid fa-heart background-heart"></i>
                {!liked && <i className="fa-regular fa-heart foreground-heart"></i>}
                {liked && <i className="fa-solid fa-heart foreground-heart"></i>}
            </button>
            }
            <img src={listing.imageUrls[0]} alt="apartment" id='lead-index-image'/>
            <div className='listing-index-content'>
            <h4 id='listing-index-price'>{listing.price.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0,})}</h4>
            <ul className='listing-index-facts'>
                <li><span>{listing.numBeds}</span> bds</li>
                <li><span>{listing.numBaths}</span> ba</li>
                <li><span>{listing.squareFeet}</span> sqft</li>
                <li>{modifiedHomeType} for {listing.saleType}</li>
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

