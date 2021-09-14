import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Icon from '../components/Icon';
import { addToFavourites } from '../redux/actionCreators';

const mapStateToProps = state => {
    console.log(state);
    return {
        fav: state.fav
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavourites: dish => dispatch(addToFavourites(dish))
    }
}
const ItemDetails = (props) => {
    const dish = props.route.params.item;
    console.log(dish);
    console.log(props.fav.length);

    const isFav = props.fav.some(item => item.id === dish.id)
    const markFav = dish => {
        if (isFav) {
            alert("Already added to Favourites")
        }
        else {
            props.addToFavourites(dish);
            console.log("Item Details", dish);
            //console.log(props.favourites);
        }
        // console.log("Item Details", dish);
        // props.addToFavourites(dish);
    }
    let iconName = "heart-outline";
    if (isFav) {
        iconName = "heart-sharp";
    }
    return (
        <View style={styles.view}>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View>
                {/* <TouchableHighlight onPress={() =>
                    markFav(dish)}> */}
                <Icon
                    name={iconName}
                    color="#F53B50"
                    size={40}
                    iconStyle={{
                        paddingRight: 10
                    }}
                    action={() => markFav(dish)}
                />
                {/* </TouchableHighlight> */}
                <Text style={styles.description}>{dish.description}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        padding: 10
    },
    image: {
        width: "100%",
        height: 300
    },
    name: {
        fontSize: 20,
        fontWeight: "500"
    },
    description: {
        padding: 10,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);