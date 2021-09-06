import React from 'react'
import { View, Text, Button } from 'react-native';


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

export default Menu;