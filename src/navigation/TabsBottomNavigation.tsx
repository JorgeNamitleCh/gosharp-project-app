
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screen/HomeScreen';
import { ProfileScreen } from '../screen/ProfileScreen';
import { ArticleScren } from '../screen/ArticleScren';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const TabsBottomNavigation = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "";

                    if (route.name === 'ArticleScren') 
                        iconName =  'add-circle'
                    
                    else if (route.name === 'ProfileScreen') 
                        iconName = "accessibility";

                    // You can return any component that you like here!
                    return <Ionicons name={iconName!} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#8ed08f",
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="ArticleScren" component={ArticleScren} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
