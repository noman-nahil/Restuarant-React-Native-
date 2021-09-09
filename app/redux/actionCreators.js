import axios from 'axios';
import * as actionTypes from './actionTypes';


export const loadItems = items => {
    return {
        type: actionTypes.LOAD_ITEMS,
        payload: items
    }
}
export const getItems = () => dispatch => {
    axios.get("https://restuarant-cbdb8-default-rtdb.asia-southeast1.firebasedatabase.app/Items.json")
        .then(response => dispatch(loadItems(response.data)))
        .catch(err => console.log(err))
}

export const addToFavourites = item => {
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        payload: item
    }
}