import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';


const ItemDetails = (props) => {
    const item = props.route.params.item;
    //console.log(item.description);
    return (
        <View style={styles.view}>
            <Image source={{ uri: item.images[0] }} style={styles.image} />
            <View>
                <Text style={styles.name}>{item.menuname}</Text>
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
        padding: 10
    }
})

export default ItemDetails;