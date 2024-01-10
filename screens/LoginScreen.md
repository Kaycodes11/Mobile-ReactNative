// LoginScreen.tsx
import React from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '../AuthContext';

const LoginScreen: React.FC = () => {
  const { setIsAuthenticated } = useAuth();

  const handleLogin = () => {
    setIsAuthenticated(true);
    // Perform any other necessary login actions
  };

  return (
    <View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
