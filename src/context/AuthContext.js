import React from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../config";

export const AuthContext = React.createContext();

// mock a network request
// const fetchUserToken = async () => new Promise(resolve => setTimeout(() => resolve("ioiojlkd"), 1000));


export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [userToken, setUserToken] = React.useState(null);
    const [userInfo, setUserInfo] = React.useState(null);

    const login = (username = "demo@gmail.com", password = "121212") => {
        setIsLoading(true);

        // if not running or having auth error just comment out axios request below
        axios.post(`${BASE_URL}/auth/token`, {
            username, password
        }).then(res => {
            const userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.token);

            // here it won't have any issue since using userInfo from here (not the state: userInfo) to set onto AsnycStorage
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', JSON.stringify(userInfo.token));

        }).catch(e => console.error(e));

        // simply use this hard code one below

        // setUserToken('ioiojlkad'); // setUserToken is asnychrnous so as it waits to resolved thus code goes to next line (i.e. below) and during that "userToken has initial value which is null"; so use the setter's callback
        /*
        setUserToken(newUserTokenThatIsNewValue, async () => {
            // This callback will be executed after setUserToken has updated the state
            await AsyncStorage.setItem('userToken', newUserToken);
            setIsLoading(false);
        });
    };
    */
        AsyncStorage.setItem('userToken', 'ioiojlkad'); // for now hard-coded
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
            let userToken = JSON.parse(await AsyncStorage.getItem('userToken'));

            // if has userInfo (then assumably userToken will be there too)
            if (userInfo) {
                setUserInfo(userInfo);
                setUserToken(userToken);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("IsLoggedIn Error: ", error)
        }
    }

    // This hook will run just once during the initial render for each component "that's wrapped by AuthProvider directly or indirectly : which is exactly what I want to check for Authentication
    React.useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoading, userToken, login, logout, userInfo }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    const auth = React.useAuth(AuthContext);
    if (!auth) throw new Error(`Either AuthContext is not defined yet or you are trying to access wihtin a component which itself or its parent not wrapped by <AuthProvider>`)
    return auth
}