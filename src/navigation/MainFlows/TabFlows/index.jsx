import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeFlows from "./HomeFlows";
import InvestFlows from "./InvestFlows";
import TransanctionsScreen from "../../../screens/MainScreens/TransanctionsScreen";
import MoreScreen from "../../../screens/MainScreens/MoreScreen";
import HomeIcon from "../../../assets/icons/Home";
import ChartIcon from "../../../assets/icons/Chart";
import TransactionIcon from "../../../assets/icons/Coin";
import MoreIcon from "../../../assets/icons/More";

import {
  primaryColor,
  darkGrayColor,
} from "../../../components/common/variables";

const Tab = createBottomTabNavigator();

const TabFlows = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { fontSize: 16, backgroundColor: "#FFFFFF" },
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: darkGrayColor,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeFlows}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <HomeIcon width={size} height={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Invest"
        component={InvestFlows}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <ChartIcon width={size} height={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Transanctions"
        component={TransanctionsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TransactionIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MoreIcon width={size} height={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabFlows;
