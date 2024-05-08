import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthFlow from "./AuthFlow";
import MainFlow from "./MainFlows";
import { setToken } from "../redux/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NavigationFlows = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(setToken(token));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    checkToken();
  }, []);

  return (
    <NavigationContainer style={styles.container}>
      {token ? <MainFlow /> : <AuthFlow />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default NavigationFlows;
