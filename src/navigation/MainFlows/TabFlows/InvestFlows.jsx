import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InvestScreen from "../../../screens/MainScreens/InvestScreen";
import MyAssetsScreen from "../../../screens/MainScreens/MyAssetsScreen";
import StockMarketScreen from "../../../screens/MainScreens/StockMarketScreen";
import AssetDetailScreen from "../../../screens/MainScreens/AssetDetailScreen";

const Stack = createNativeStackNavigator();

const InvestFlows = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Invest-Index" component={InvestScreen} />
      <Stack.Screen name="My-Assets" component={MyAssetsScreen} />
      <Stack.Screen name="Stock-Market" component={StockMarketScreen} />
      <Stack.Screen name="Asset-Detail" component={AssetDetailScreen} />
    </Stack.Navigator>
  );
};

export default InvestFlows;
