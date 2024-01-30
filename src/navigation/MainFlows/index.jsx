import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabFlows from "./TabFlows";
import FundSuccesScreen from "../../screens/MainScreens/FundSuccessScreen";
import BuyAssetScreen from "../../screens/MainScreens/BuyAssetScreen";
import ConfirmStockScreen from "../../screens/MainScreens/ConfirmStockScreen";
import BuyAssetSuccesScreen from "../../screens/MainScreens/BuyAssetSuccessScreen";

const Stack = createNativeStackNavigator();

const MainFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home-Index" component={TabFlows} />

      <Stack.Screen name="Fund-Success" component={FundSuccesScreen} />

      <Stack.Screen name="Buy-Asset" component={BuyAssetScreen} />

      <Stack.Screen name="Confirm-Buy" component={ConfirmStockScreen} />

      <Stack.Screen name="Buy-Success" component={BuyAssetSuccesScreen} />
    </Stack.Navigator>
  );
};

export default MainFlow;
