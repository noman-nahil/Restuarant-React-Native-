import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    items: []
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}