import csrfFetch from './csrf';
import { fetchUsers } from './users';

const SET_FAVORITES = "favorites/setFavorites"
const ADD_FAVORITE = "favorites/addFavorite"
const REMOVE_FAVORITE = "favorites/removeFavorite"

const setFavorites = (favorites) => ({
    type: SET_FAVORITES,
    favorites
})

const addFavorite = (favorite) => ({
    type: ADD_FAVORITE,
    favorite
})

const removeFavorite = (favoriteId) => ({
    type: REMOVE_FAVORITE,
    favoriteId
})

export const fetchFavorites = () => async dispatch => {
    const res = await csrfFetch('/api/favorites')
    const data = await res.json();
    const favorites = {};
    data.forEach((el)=>{
        favorites[el.favorite.id] = el.favorite
    })
    dispatch(setFavorites(favorites));
}

export const createFavorite = (favorite) => async dispatch => {
    const res = await csrfFetch('/api/favorites', {
        method: 'POST',
        body: JSON.stringify(favorite)
    })
    const data = await res.json();
    dispatch(fetchUsers);
    return data.favorite.id;
}

export const deleteFavorite = (userId, listingId) => async (dispatch) => {
    const responseOne = await csrfFetch('/api/favorites')
    const data = await responseOne.json();
    const favorites = {};
    data.forEach((el)=>{
        favorites[el.favorite.id] = el.favorite
    })
    const favorite = Object.values(favorites).find((el)=> el.userId === userId && el.listingId === listingId);
    const res = await csrfFetch(`/api/favorites/${favorite.id}`, {
        method: 'DELETE',
        body: JSON.stringify(favorite.id)
    })
    dispatch(fetchUsers);
}


function favoritesReducer(state={}, action) {
    let newState = {...state}
    switch (action.type) {
        case SET_FAVORITES:
            return {...action.favorites};
        case ADD_FAVORITE:
            newState[action.favorite.id] = action.favorite;
            return newState;
        case REMOVE_FAVORITE:
            delete newState[action.favoriteId];
            return newState;
        default:
            return state;
    }
}

export default favoritesReducer;