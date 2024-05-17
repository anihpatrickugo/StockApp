import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabFlows from "./TabFlows";
import NewAssetScreen from "../../screens/MainScreens/NewAssetScreen";
import ConfirmStockScreen from "../../screens/MainScreens/ConfirmStockScreen";
import BuyAssetSuccesScreen from "../../screens/MainScreens/BuyAssetSuccessScreen";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/queries/user";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";
import ProfileScreen from "../../screens/MainScreens/ProfileScreen";
import EditProfileScreen from "../../screens/MainScreens/EditProfileScreen";
import DeveloperScreen from "../../screens/MainScreens/DeveloperInfoScreen";
import WithdrawalSuccessScreen from "../../screens/MainScreens/WithdrawalSuccessScreen";
import PinSettingScreen from "../../screens/MainScreens/PinSettingScreen";

const Stack = createNativeStackNavigator();

const MainFlow = () => {
  const { error, loading, data } = useQuery(GET_USER);
  const dispatch = useDispatch();

  if (data) {
    dispatch(setUser(data.user));
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home-Index" component={TabFlows} />

      <Stack.Screen name="New-Asset" component={NewAssetScreen} />

      <Stack.Screen name="Confirm-Stock" component={ConfirmStockScreen} />

      <Stack.Screen name="Buy-Success" component={BuyAssetSuccesScreen} />

      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen name="Edit-Profile" component={EditProfileScreen} />

      <Stack.Screen name="Developer" component={DeveloperScreen} />

      <Stack.Screen name="Set-Pin" component={PinSettingScreen} />

      <Stack.Screen
        name="Withdrawal-Success"
        component={WithdrawalSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default MainFlow;
