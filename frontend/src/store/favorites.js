import csrfFetch from './csrf';

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
    dispatch(addFavorite(data));
    return data.id;
}

export const deleteFavorite = (favoriteId) => async dispatch => {
    const res = await csrfFetch(`/api/favorites/${favoriteId}`, {
        method: 'DELETE',
        body: JSON.stringify(favoriteId)
    })
    dispatch(removeFavorite(favoriteId))
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