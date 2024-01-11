import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen From Bottom Tab</Text>
      <Button title='Go to Settings Screen' onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}


function SettingsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen Bottom Tab</Text>
      <Button title='Go to Home Screen' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

// https://reactnavigation.org/docs/bottom-tab-navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;