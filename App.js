import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AppStack';

function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

export default App;
