import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthFlow from "./AuthFlow";

const NavigationFlows = () => {
  return (
    <NavigationContainer style={styles.container}>
      <AuthFlow />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default NavigationFlows;
