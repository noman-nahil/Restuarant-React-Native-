import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from '../components/Icon';
import { addToFavourites } from '../redux/actionCreators';

const mapState = state => {
    return {
        favourites: state.favourites
    }
}

const mapDispatch = dispatch => {
    return {
        addToFavourites: item => dispatch(addToFavourites(item))
    }
}
const ItemDetails = (props) => {
    const item = props.route.params.item;
    const isFav = props.favourites.some(x => x.id == item.id)
    //console.log(item.description);

    const markFav = item => {
        if (isFav) {
            alert("Already added to Favourites")
        }
        else {
            props.addToFavourites(item);
        }
    }
    let icon = 'ios-heart-outline';
    if (isFav) {
        icon = "ios-heart-sharp";
    }
    return (
        <View style={styles.view}>
            <Image source={{ uri: item.images[0] }} style={styles.image} />
            <View>
                {/* <Text style={styles.name}>{item.menuname}</Text> */}
                <Icon
                    name={icon}
                    color="#F53B50"
                    size={40}
                    iconStyle={{
                        paddingRight: 10
                    }}
                    action={() => markFav(item)}
                />
                <Text style={styles.description}>{item.description}</Text>
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

export default connect(mapState, mapDispatch)(ItemDetails);