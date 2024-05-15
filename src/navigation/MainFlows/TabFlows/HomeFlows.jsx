import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/MainScreens/HomeScreen";
import NotificationScreen from "../../../screens/MainScreens/NotificationScreen";
import FundTransferWalletAddressScreen from "../../../screens/MainScreens/FundTransferWalletAddressScreen";
import FundSuccesScreen from "../../../screens/MainScreens/FundSuccessScreen";
import DepositDetailsScreen from "../../../screens/MainScreens/DepositDetailsScreen";
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

      <Stack.Screen
        name="USDT-Transfer-Fund"
        component={FundTransferWalletAddressScreen}
      />

      <Stack.Screen name="Fund-Success" component={FundSuccesScreen} />

      <Stack.Screen name="Deposit-Details" component={DepositDetailsScreen} />

      <Stack.Screen name="New-Card" component={NewCardScreen} />
    </Stack.Navigator>
  );
};

export default HomeFlows;
