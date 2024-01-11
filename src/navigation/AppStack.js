import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        // DrawerContent = props : provides all the route configs and such so <CustomeDrawer {...props} /> can take and customize it as needed
        // CustomerDrawer will render all the routs that's listed with more customization plus some other UI could be added (Tell a Friend - Signout option within CustomDrawer)

        // N.B: Here, Drawer.Navigator is hidden initialy and it's using <CustomDrawer /> to render extra UI and full customizations
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
            }}>

            {/* Only when using <Drawer.Navigator> like here it will render its screen so then below
                will render "HomeDrawr" within Drawer Navigator, also it will render TabNavigator (which will render navs at bottom) */}

            {/* N.B: name="Home" if TabNavigator also has a screen that has same name which is why used "Home2" within TabNavigator */}

            <Drawer.Screen
                name="Home"
                component={TabNavigator}
                options={{
                    title: "HomeDrawer",
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />

            {/* This will show when drawer opened */}
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={22} color={color} />
                    ),
                }}
            />
            {/* This will show when drawer opened */}
            <Drawer.Screen
                name="Messages"
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                    ),
                }}
            />
            {/* This will show when drawer opened */}
            <Drawer.Screen
                name="Moments"
                component={MomentsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="timer-outline" size={22} color={color} />
                    ),
                }}
            />
            {/* This will show when drawer opened */}
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default AppStack;
