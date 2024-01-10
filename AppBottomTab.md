import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type TabParamList = {
  Home: undefined;
  Details: { itemId: number };
};

type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Home'>;

type HomeScreenProps = {
  navigation: TabScreenNavigationProp;
};

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    // Your Home Screen JSX
  );
}

const Tab = createBottomTabNavigator<TabParamList>();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* Other screens */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
