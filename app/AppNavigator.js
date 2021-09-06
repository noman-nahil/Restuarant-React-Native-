import React from 'react';
import Home from './screens/Home';
import MenuScreen from './screens/Menu';
import ItemDetails from './screens/ItemDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            //headerShown: false
        }}>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Item Details" component={ItemDetails} />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Menu" component={MenuStack} options={{
                headerShown: false
            }} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;