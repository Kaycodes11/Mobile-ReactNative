import React from 'react';
import { Button, View, Text, TextInput, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './AppDrawerNavigator';

function HomeScreen({ navigation, route }: { navigation: any, route: any }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {

    // use `setOptions` to update the button that has been specified previously on HomeScreen's route config
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update Count" />
      )
    })

    if (route.params?.post) {
      // post updated , do something with `route.params.post` e.g. send the post to server
    }
  }, [navigation, route.params?.post])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* if used a route which is not defined; then it'll show error during developement build and do nothing during production builds */}
      {/* <Button title="Go to Details Screen" onPress={() => navigation.navigate('Garden')} /> */}
      {/* <Button title="Go to Details Screen" onPress={() => navigation.navigate('Details', {
        itemId: 86,
        otherParam: 'anything you want here'
      })} /> */}

      <Button title='Create Post' onPress={() => navigation.navigate('CreatePost')} />
      <Text style={{ margin: 30 }}>Post: {route.params?.post}</Text>
    </View>
  )
}

function CreatePostScreen({ navigation, route }: { navigation: any, route: any }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}

function DetailsScreen({ route, navigation }: { route: any, navigation: any }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      {/* in this React Naviation is already on the "DetailsScreen" so when pressed again to go same route, it does nothing which makes sense */}
      {/* <Button title="Go to Details Screen .... Again" onPress={() => navigation.navigate('Details')} /> */}

      {/* but "if for some need to load the same/current route again" then use the "navigation.push" method as below */}
      <Button title="Go to Details Screen .... Again" onPress={() => navigation.push('Details', {
        itemId: Math.floor(Math.random() * 100)
      })} />

      {/* .navigate will first look for the asked route during onPress within stack, if exists do nothing else add */}
      {/* .push will add a new route on stack for the asked route during onPress within stack, even if exists on stack */}

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* To Go back to first screen from Stack */}
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />

      {/* updating the header or title i.e. set on route i.e. <Stack.Screeen> */}
      {/* <Button title="Update title" onPress={() => navigation.setOptions({title: 'Update'})} /> */}
    </View>
  )
}

function ProfileScreen({ route, navigation }: { route: any, navigation: any }) {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  )
}

// This will help to replace header's text , let's see how it does
// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('@expo/snack-static/react-native-logo.png')}
//     />
//   );
// }

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <SomeContextProvider> */}
      {/* now these style will be common and apply to all screen within this Stack.Navigator */}
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }

      }}>
        {/* don't pass an inline function e.g. component = {() => <HomeScreen/>} */}
        {/* every time this parent component re-render, if passed inline those re-initialized each time as well */}

        <Stack.Screen name="Home" component={HomeScreen} />

        {/* So headerTitle will allow to render  a component instead of plain text  */}
        {/* <Stack.Screen name="Home" component={HomeScreen} options={({ navigation, route }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
          // Add a placeholder button without the `onPress` to avoid flicker
          headerRight: () => (
            <Button title="Update count" />
          ),
        })} /> */}

        {/* # ADDING THE HEADER STYLE */}
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        /> */}
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Detailz" }} initialParams={{ itemId: 42 }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={({ route }: { route: any }) => ({ title: route.params.name })} />
      </Stack.Navigator>
      {/* </SomeContextProvider> */}
    </NavigationContainer>
  );
}



export default App;
