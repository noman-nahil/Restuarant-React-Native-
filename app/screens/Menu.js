import React from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const Menu = (props) => {
    console.log(props);
    return (
        <View>
            <Text>Menu Screen</Text>
            <Button onPress={() => {
                props.navigation.navigate('Item Details')
            }}
                title="press" />
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    }
})

export default Menu;