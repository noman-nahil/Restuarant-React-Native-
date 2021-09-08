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
            headerStyle: {
                backgroundColor: '#F53B50',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="Item List" component={MenuScreen} />
            <Stack.Screen name="Item Details" component={ItemDetails} options={({ route }) => ({ title: route.params.item.menuname })} />
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