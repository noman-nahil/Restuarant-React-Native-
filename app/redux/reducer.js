import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    items: [],
    favourites: []
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
                favourites: state.favourites.concat(action.payload)
            }
        default:
            return state;
    }
}