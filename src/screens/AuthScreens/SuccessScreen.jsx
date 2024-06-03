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
import Animated, { BounceIn } from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

const SuccesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containner}>
      <Animated.View entering={BounceIn.duration(1000)} style={styles.message}>
        <Success height={160} width={160} style={styles.icon} />
        <UI.CustomText size="sm" bold style={styles.text}>
          Your StockPay account has been created successfully
        </UI.CustomText>
      </Animated.View>

      <View style={styles.buttonContainner}>
        <UI.Button
          text="Continue"
          variant="coloured"
          onPress={() => navigation.replace("LogIn")}
        />
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
    flex: 1
  },

  message: {
    alignItems: "center",
    flex: 1
  
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
    bottom: 50,
  },
});
export default SuccesScreen;
