import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Benefit of of using Stack.Navigator: Drawer(hidden), Top and Bottom Tabs will create space for navigations
// But Stack.Navigator won't make any extra space for its Navigation "so it could be used to make view + routing"
const HomeStack = () => {
    // now both HomeScreen and GameDetails can use "navigation from its parent however needed" while having access to its own routes i.e. "GameDetails"
    // so when needs to access parent routes and local routes ("GameDetails") then use a function component that return a Navigator like below the use it where needed (e.g. TabNavigator)
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GameDetails"
                component={GameDetailsScreen}
                options={({ route }) => ({
                    title: route.params?.title,
                })}
            />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#AD40AF' },
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: 'yellow',
            }}>
            {/* Screen's component prop could be 1) a component that return view or 2) a component that returns navigator as HomeStack */}
            {/* The first Screen will be always rendered within a <__.Navigator> but since here the first Screen's component returns a "Navigator: then its first screen's component will be rendered i.e. HomeScreen" */}

            {/* And Since it's HomeStack is Stack Navigator it won't occupy any space like Bottom or Top tabs for navigation */}
            {/* Here used StackNavigator so that all screens within StackNavigator gets access to "navigation prop from here" */}
            <Tab.Screen
                name="Home2"
                component={HomeStack}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getTabBarVisibility(route),
                        backgroundColor: '#AD40AF',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                })}
            />
            {/* If above screen commented out, then below becomes First screen so it will load First when TabNavigator gets rendered */}
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarBadge: 4,
                    tabBarBadgeStyle: { backgroundColor: 'yellow' },
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="shopping-bag" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

// this function will help {display: none} that is to hide Tab Navigator on "GameDetails" but show on HomeScreen
const getTabBarVisibility = route => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName);

    if (routeName == 'GameDetails') {
        return 'none';
    }
    return 'flex';
};

export default TabNavigator;
