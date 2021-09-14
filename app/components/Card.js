import React from 'react'
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native'
import { connect } from 'react-redux'
import { removeFavourite } from '../redux/actionCreators'


const mapDispatchToProps = dispatch => {
    return {
        removeFavourite: dish => dispatch(removeFavourite(dish))
    }
}
const Card = props => {
    const removeFav = () => {
        Alert.alert(
            'Delete Favourite',
            'Are you sure wish to delete the favourite item' + props.selectItem.name + '?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log("Cancelled"),
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => props.removeFavourite(props.selectItem)
                }
            ],
            {
                cancelable: false
            }
        )
    }
    return (
        <Pressable onLongPress={() => removeFav()} >
            <View style={styles.card} >
                <Image source={{ uri: props.selectItem.image }} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.title}>{props.selectItem.name}</Text>
                </View>
            </View>
        </Pressable >

    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "white",
        overflow: "hidden",
        margin: 10,
        elevation: 5
    },
    details: {
        padding: 25
    },
    image: {
        width: "100%",
        height: 150,
    },
    title: {
        marginBottom: 7,
        fontSize: 20
    }
})

export default connect(null, mapDispatchToProps)(Card);