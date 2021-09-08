import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import { getItems } from '../redux/actionCreators';
import { FlatList } from 'react-native-gesture-handler';
import MenuItem from '../components/MenuItem';


const mapState = state => {
    return {
        items: state.items
    }
}

const mapDispatch = dispatch => {
    return {
        getItems: () => dispatch(getItems())
    }
}
const Menu = (props) => {

    useEffect(() => {
        props.getItems();
    }, [])
    //console.log(props);
    return (
        <View>
            <FlatList
                data={props.items}
                renderItem={
                    ({ item }) => (<MenuItem item={item} selectItem={() => props.navigation.navigate("Item Details", { item: item })} />)
                }
                keyExtractor={item => item._id}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    }
})

export default connect(mapState, mapDispatch)(Menu);