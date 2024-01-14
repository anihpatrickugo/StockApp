import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/AuthScreens/OnboardingScreen";
import SignUpScreen from "../screens/AuthScreens/SignUpScreen";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import VerifyScreen from "../screens/AuthScreens/VerifyScreen";
import SuccessScreen from "../screens/AuthScreens/SuccessScreen";

const Stack = createNativeStackNavigator();

const AuthFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
      <Stack.Screen name="AuthSuccess" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default AuthFlow;
