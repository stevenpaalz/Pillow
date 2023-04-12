import csrfFetch from './csrf';

const SET_USERS = 'users/setUsers';
const ADD_USER = 'users/addUsers';

const setUsers = (users) => ({
    type: SET_USERS,
    users
})

const addUser = (user) => ({
    type: ADD_USER,
    user
})

export const fetchUsers = () => async dispatch => {
    const res = await csrfFetch('/api/users')
    const data = await res.json();
    const users = {};
    data.forEach((el) => {
        users[el.user.id] = el.user
    })
    dispatch(setUsers(users))
}

export const fetchUser = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/users/${userId}`)
    const data = await res.json();
    dispatch(addUser(data.user));
}

function usersReducer(state={}, action) {
    let newState = {...state}
    switch (action.type) {
        case SET_USERS:
            return {...action.users};
        case ADD_USER:
            newState[action.user.id] = action.user;
            return newState;
        default:
            return state;
    }
}

export default usersReducer;