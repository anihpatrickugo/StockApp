import React, { useState, useLayoutEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthFlow from "./AuthFlow";
import MainFlow from "./MainFlows";
import { setToken } from "../redux/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { primaryColor } from "../components/common/variables";

const NavigationFlows = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [loading, setLodaing] = useState(false);

  const checkToken = async () => {
    setLodaing(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(setToken(token));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLodaing(false);
    }
  };

  useLayoutEffect(() => {
    checkToken();
  }, []);

  return loading ? (
    <ActivityIndicator
      size="large"
      color={primaryColor}
      style={StyleSheet.absoluteFillObject}
    />
  ) : (
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
