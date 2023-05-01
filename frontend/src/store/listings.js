import csrfFetch from './csrf';

const SET_LISTINGS = 'listings/setListings';
const ADD_LISTING = 'listings/addListing';
const REMOVE_LISTING = 'listings/removeListing';

const setListings = (listings) => ({
    type: SET_LISTINGS,
    listings
})

const addListing = (listing) => ({
    type: ADD_LISTING,
    listing
})

const removeListing = (listingId) => ({
    type: REMOVE_LISTING,
    listingId
})

export const fetchListings = () => async dispatch => {
    
    const res = await csrfFetch('/api/listings');
    const data = await res.json();
    const listings = {};
    data.forEach((el)=>{
        listings[el.listing.id] = el.listing
    })
    dispatch(setListings(listings));
}

export const searchListings = (query) => async dispatch => {
    const res = await csrfFetch(`/api/search?q=${query}`);
    const data = await res.json();
    const listings = {};
    data.forEach((el)=>{
        listings[el.listing.id] = el.listing
    })
    dispatch(setListings(listings));
}

export const fetchListing = (listingId) => async dispatch => {
    const res = await csrfFetch(`/api/listings/${listingId}`)
    const data = await res.json();
    dispatch(addListing(data.listing));
}

export const createListing = (formData) => async dispatch => {
    const res = await csrfFetch('/api/listings/', {
        method: 'POST',
        body: formData
    })
    const data = await res.json();
    dispatch(addListing(data.listing));
    return data.listing.id;
}

export const updateListing = (listingId, formData) => async dispatch => {
    const res = await csrfFetch(`/api/listings/${listingId}`,{
        method: 'PATCH',
        body: formData
    });
    const data = await res.json();
    dispatch(addListing(data.listing));
    return data.listing.id;
}

export const deleteListing = (listingId) => async dispatch => {
    const res = await csrfFetch(`/api/listings/${listingId}`,{
        method: 'DELETE',
        body: JSON.stringify(listingId)
    })
    dispatch(removeListing(listingId));
}

function listingsReducer(state={}, action) {
    let newState = {...state}
    switch (action.type) {
        case SET_LISTINGS:
            return {...action.listings};
        case ADD_LISTING:
            newState[action.listing.id] = action.listing;
            return newState;
        case REMOVE_LISTING:
            delete newState[action.listingId];
            return newState;
        default:
            return state;
    }
}

export default listingsReducer;