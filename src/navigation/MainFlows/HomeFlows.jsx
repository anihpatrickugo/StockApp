import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/MainScreens/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeFlows = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Index" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeFlows;
