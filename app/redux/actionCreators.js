import axios from 'axios';
import * as actionTypes from './actionTypes';


export const loadItems = items => {
    return {
        type: actionTypes.LOAD_ITEMS,
        payload: items
    }
}
export const getItems = () => dispatch => {
    axios.get("https://restuarant-cbdb8-default-rtdb.asia-southeast1.firebasedatabase.app/items.json")
        .then(response => dispatch(loadItems(response.data)))
        .catch(err => console.log(err))
}

export const addToFavourites = (dish) => {
    //const item = JSON.stringify(dish);
    //console.log("Item:", item);
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        payload: dish,
    }

}

export const removeFavourite = dish => {
    return {
        type: actionTypes.REMOVE_TO_FAVOURITES,
        payload: dish
    }
}