import React from 'react';
import { Button, View, Text, Linking } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useFlipper } from '@react-navigation/devtools';
// import Animated from 'react-native-reanimated';


function HomeScreen({ navigation }: { navigation: any }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }: { navigation: any }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

// https://reactnavigation.org/docs/drawer-navigator/
const Drawer = createDrawerNavigator();

// By default, the given "component" in the route config i.e. Drawer.Screen is scrollable and only contains the route
// but it can be overridden (as below) to add header, footer or other component and additional UI using below
function CustomDrawerContent(props: any) {
    // const progress = useDrawerProgress();
    // const translateX = Animated.interpolateNode(progress, {
    //     inputRange: [0, 1],
    //     outputRange: [-100, 0],
    // });
    return (
        // <Animated.View style={{transform: [{translateX}]}}>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItemList {...props} />
            {/* TO ADD ADDITIONAL ITEMS IN THE DRAWER, CAN USE <DrawerItem /> */}
            {/* <DrawerItem label="Help" onPress={Linking.openURL('https://mywebsite.com/help')} /> */}
        </DrawerContentScrollView>
        // </Animated.View>
    )
}

const DrawerNavigator = () => {
    const navigationRef = useNavigationContainerRef();
    // For now, only applied NavigationRef on this Drawer Navigator so only when navigating on Drawer , Flipper will show correct React-Navigation for others it throws error since those are not enabled yet
    useFlipper(navigationRef);
    return (
        // NavigationContainer's children should be a navigator so whether it's inline or from a component that return Navigator (either way it's fine)
        <NavigationContainer ref={navigationRef}>
            {/* Below is how to use custom drawer and screens should sit as it is i.e. <Drawer.Screen> */}
            {/* <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>Screens</Drawer.Navigator> */}
            <Drawer.Navigator initialRouteName="Home">
                {/* By default, Drawer will be hidden , besides it will render below screens */}
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;
