import "./ShowNav.css";
import zillowLogo from "../../assets/zillow_main_logo.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createFavorite, deleteFavorite, fetchFavorites } from '../../store/favorites';
import { setModal } from "../../store/modal";
import { useHistory } from "react-router-dom";

function ShowNav({listing}) {
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const favorites = useSelector(state => state.favorites);
    const history = useHistory();

    useEffect(()=>{
        dispatch(fetchFavorites());
    }, [dispatch])

    useEffect(()=>{
        if (!sessionUser) {return}
        let checkedForLike = false;
        listing.favoriteIds.forEach((favoriteId) =>{
            if (!favorites[favoriteId]) return;
            if (favorites[favoriteId].listingId === listing.id && favorites[favoriteId].userId === sessionUser.id){
                setLiked(true);
                checkedForLike = true;
            }
        })
        if (checkedForLike === false) setLiked(false);
    }, [listing.favoriteIds])

    const toggleLiked = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!sessionUser) {
            dispatch(setModal(true))
            return;
        }
        if (liked === true) {
            setLiked(false);
            let favorite = Object.values(favorites).filter((favorite) => {
                return (favorite.listingId === listing.id) && (favorite.userId === sessionUser.id)
            })
            dispatch(deleteFavorite(favorite[0].id))
        } else {
            setLiked(true);
            dispatch(createFavorite({listingId: listing.id, userId: sessionUser.id}))
        }
    }

    return(
        <div id='show-nav'>
            <img src={zillowLogo}/>
            <ul>
                { (!sessionUser || (listing.lister.id !== sessionUser.id)) && liked && <li onClick={toggleLiked}><i className="fa-solid fa-heart"></i>Saved</li> }
                { (!sessionUser || (listing.lister.id !== sessionUser.id)) && !liked && <li onClick={toggleLiked}><i className="fa-regular fa-heart"></i>Save</li> }
                <li onClick={()=>{history.replace("/in-process")}}><i className="fa-regular fa-share-from-square"></i>Share</li>
                <li onClick={()=>{history.replace("/in-process")}}><i className="fa-solid fa-ban"></i>Hide</li>
            </ul>
        </div>
    )
}

export default ShowNav;