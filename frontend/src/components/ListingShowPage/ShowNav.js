import "./ShowNav.css";
import zillowLogo from "../../assets/zillow_main_logo.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createFavorite, deleteFavorite, fetchFavorites } from '../../store/favorites';
import { setModal } from "../../store/modal";

function ShowNav({listing}) {
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const favorites = useSelector(state => state.favorites);

    useEffect(()=>{
        dispatch(fetchFavorites());
    }, [dispatch])

    useEffect(()=>{
        setLiked(false);
        if (!sessionUser) {return}
        listing.favoriteIds.forEach((favoriteId) =>{
            if (!favorites[favoriteId]) return;
            if (favorites[favoriteId].listingId === listing.id && favorites[favoriteId].userId === sessionUser.id){
                setLiked(true)
            }
        })
    }, [favorites, sessionUser, listing.favoriteIds])

    const toggleLiked = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!sessionUser) {
            dispatch(setModal(true))
            return;
        }
        if (liked === true) {
            let favorite = Object.values(favorites).filter((favorite) => {
                return (favorite.listingId === listing.id) && (favorite.userId === sessionUser.id)
            })
            dispatch(deleteFavorite(favorite[0].id))
        } else {
            dispatch(createFavorite({listingId: listing.id, userId: sessionUser.id}))
        }
    }

    return(
        <div id='show-nav'>
            <img src={zillowLogo}/>
            <ul>
                {liked && <li onClick={toggleLiked}><i className="fa-solid fa-heart"></i>Saved</li>}
                {!liked && <li onClick={toggleLiked}><i className="fa-regular fa-heart"></i>Save</li>}
                <li><i className="fa-regular fa-share-from-square"></i>Share</li>
                <li><i className="fa-solid fa-ban"></i>Hide</li>
            </ul>
        </div>
    )
}

export default ShowNav;