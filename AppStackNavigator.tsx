import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

type RootStackParamList = {
    Home: undefined;
    Details: { itemId: number };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home' | 'Details'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
    route: HomeScreenRouteProp;
};

function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title='Go to Details Screen' onPress={() => navigation.navigate('Details')} />
        </View>
    );
}

type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailsScreenProps = {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
};

function DetailsScreen({ navigation }: DetailsScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title='go back to home screen' onPress={() => navigation.goBack()} />
        </View>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;