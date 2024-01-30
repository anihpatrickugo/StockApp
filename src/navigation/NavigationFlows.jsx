import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthFlow from "./AuthFlow";
import MainFlow from "./MainFlows";

import { useSelector, useDispatch } from "react-redux";

const NavigationFlows = () => {
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  return (
    <NavigationContainer style={styles.container}>
      {auth ? <MainFlow /> : <AuthFlow />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default NavigationFlows;
