import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


const Card = props => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: props.selectItem.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{props.selectItem.name}</Text>
            </View>
        </View>
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

export default Card;