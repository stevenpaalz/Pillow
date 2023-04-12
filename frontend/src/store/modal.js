
const SET_MODAL = 'modal/setModal';

export const setModal = (modal) => ({
    type: SET_MODAL,
    modal
})

function modalReducer(state = {}, action) {
    let newState = {...state}
    switch (action.type) {
        case SET_MODAL:
            newState["modalState"] = action.modal
            return newState;
        default:
            return state;
    }
}

export default modalReducer;