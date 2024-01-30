import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/MainScreens/HomeScreen";
import NotificationScreen from "../../../screens/MainScreens/NotificationScreen";
import BankTransferScreen from "../../../screens/MainScreens/BankTransferScreen";
import DebitCardScreen from "../../../screens/MainScreens/DebitCardScreen";
import NewCardScreen from "../../../screens/MainScreens/NewCardScreen";
const Stack = createNativeStackNavigator();

const HomeFlows = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home-Index" component={HomeScreen} />

      <Stack.Screen name="Notifications" component={NotificationScreen} />

      <Stack.Screen name="Bank-Transfer-Fund" component={BankTransferScreen} />

      <Stack.Screen name="Debit-Card-Fund" component={DebitCardScreen} />

      <Stack.Screen name="New-Card" component={NewCardScreen} />
    </Stack.Navigator>
  );
};

export default HomeFlows;
