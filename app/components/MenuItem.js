import React from 'react'
import { View, StyleSheet, TouchableHighlight, Image, Text } from 'react-native';

const MenuItem = props => {
    return (
        <TouchableHighlight>
            <View style={styles.container}>
                <Image source={{ uri: props.item.images[0] }} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.name}>{props.item.menuname}</Text>
                    <Text style={styles.description} numberOfLines={2}>{props.item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "row",
        padding: 15
    },
    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 80,
        height: 80
    },
    name: {
        fontWeight: "500"
    },
    description: {
        color: "#6e6969"
    }
})

export default MenuItem;