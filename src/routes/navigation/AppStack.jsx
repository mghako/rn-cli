import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from '../../screens/Home';
import ItemScreen from '../../screens/Item';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const AppStack = () => {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
                }}
            /> 
            <Tab.Screen 
                name='Item' 
                component={ItemScreen} 
                options={{
                    tabBarLabel: 'Search Item',
                    tabBarIcon: ({color}) => (
                        <EvilIcons name="search" color={color} size={26} />
                    )
                }}
            /> 
        </Tab.Navigator>
    )
}

export default AppStack