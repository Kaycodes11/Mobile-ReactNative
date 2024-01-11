import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { useAuth } from "../context/AuthContext";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { ActivityIndicator } from "react-native";
// import AppStack from "./AppStack";

const AppNav = () => {
    const { isLoading, userToken } = useAuth();
    if (isLoading) {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        );
    }
    
    return (
        <NavigationContainer>
            {userToken !== null ?
                <AppStack /> :
                <AuthStack />
            }
        </NavigationContainer>
    )
}
export default AppNav;