import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    items: [],
    fav: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case actionTypes.ADD_TO_FAVOURITES:
            return {
                ...state,
                fav: state.fav.concat(action.payload),
            }
        case actionTypes.REMOVE_TO_FAVOURITES:
            return {
                ...state,
                fav: state.fav.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}