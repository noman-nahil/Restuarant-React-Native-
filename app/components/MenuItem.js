import React from 'react'
import { View, StyleSheet, TouchableHighlight, Image, Text } from 'react-native';

const MenuItem = props => {
    return (
        <TouchableHighlight>
            <View>
                <Text>{props.item.menuname}</Text>
                <Text>{props.item.description}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default MenuItem;