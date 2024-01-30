import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
} from "react-native";
import * as UI from "../../components/common/index";
import Success from "../../assets/icons/Success";

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../redux/slices/authSlice";

const { width, height } = Dimensions.get("screen");

const SuccesScreen = ({ navigation }) => {
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const handleSignup = () => {
    dispatch(login());
  };

  return (
    <SafeAreaView style={styles.containner}>
      <View style={styles.message}>
        <Success height={160} width={160} style={styles.icon} />
        <UI.CustomText size="sm" bold style={styles.text}>
          Your StockPay account has been created successfully
        </UI.CustomText>
      </View>

      <View style={styles.buttonContainner}>
        <UI.Button text="continue" variant="coloured" onPress={handleSignup} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    alignItems: "center",
    height: height,
    width: width,
  },

  message: {
    alignItems: "center",
  },

  icon: {
    marginTop: 100,
  },

  text: {
    textAlign: "center",
    marginVertical: 10,
  },

  buttonContainner: {
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
});
export default SuccesScreen;
