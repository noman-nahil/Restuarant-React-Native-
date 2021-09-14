import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Card from '../components/Card';

const mapStateToProps = state => {
    //console.log(state);
    return {
        fav: state.fav
    }
}
const Favourites = props => {
    return (
        <View>
            <FlatList
                data={props.fav}
                renderItem={({ item }) => (<Card selectItem={item} />)}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}
export default connect(mapStateToProps)(Favourites);