import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabFlows from "./TabFlows";
import FundSuccesScreen from "../../screens/MainScreens/FundSuccessScreen";
import BuyAssetScreen from "../../screens/MainScreens/BuyAssetScreen";
import ConfirmStockScreen from "../../screens/MainScreens/ConfirmStockScreen";
import BuyAssetSuccesScreen from "../../screens/MainScreens/BuyAssetSuccessScreen";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/queries/user";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";
import ProfileScreen from "../../screens/MainScreens/ProfileScreen";
import EditProfileScreen from "../../screens/MainScreens/EditProfileScreen";
import DeveloperScreen from "../../screens/MainScreens/DeveloperInfoScreen";

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

      <Stack.Screen name="Buy-Asset" component={BuyAssetScreen} />

      <Stack.Screen name="Confirm-Buy" component={ConfirmStockScreen} />

      <Stack.Screen name="Buy-Success" component={BuyAssetSuccesScreen} />

      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen name="Edit-Profile" component={EditProfileScreen} />

      <Stack.Screen name="Developer" component={DeveloperScreen} />
    </Stack.Navigator>
  );
};

export default MainFlow;
