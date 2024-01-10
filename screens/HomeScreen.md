import { Button, Text, View } from "react-native";
import { useAuth } from "../AuthContext"

const HomeScreen: React.FC = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
  
    const handleLogout = () => {
      setIsAuthenticated(false);
      // Perform any other necessary logout actions
    };
  
    return (
      <View>
        <Text>Welcome to the Home Screen!</Text>
        <Text>{isAuthenticated ? 'Logged In' : 'Logged Out'}</Text>
        {isAuthenticated && <Button title="Logout" onPress={handleLogout} />}
      </View>
    );
  };
  
  export default HomeScreen;