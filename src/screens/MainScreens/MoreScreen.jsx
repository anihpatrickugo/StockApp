import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as UI from "../../components/common";
import { grayColor, primaryColor } from "../../components/common/variables";
import AccountIcon from "../../assets/icons/Account";
import CustomerCareIcon from "../../assets/icons/CustomerCare";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../redux/slices/authSlice";

const { width, height } = Dimensions.get("screen");

const MoreScreen = ({ navigation }) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: async () => {
          await AsyncStorage.removeItem("token");
          dispatch(removeToken());
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.containner}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <UI.CustomText size="md" bold>
          More
        </UI.CustomText>
      </View>

      {/* More links list*/}
      <ScrollView
        style={styles.moreScrollList}
        showsVerticalScrollIndicator={false}
      >
        {/* link item */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <AccountIcon width={50} height={50} color="#E3E3E3" />

          <View style={{ flex: 1, paddingHorizontal: 8 }}>
            <UI.CustomText size="sm" bold>
              My Profile
            </UI.CustomText>
            <UI.CustomText size="xs">
              Personalize your account for a tailored investing environment
            </UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />
        </TouchableOpacity>

        {/* link item */}
        <TouchableOpacity style={styles.listItem}>
          <MaterialIcons name="security" size={50} color="black" />

          <View style={{ flex: 1, paddingHorizontal: 8 }}>
            <UI.CustomText size="sm" bold>
              PIN Settings
            </UI.CustomText>
            <UI.CustomText size="xs">
              Ensure a worry-free investing experience with advanced security
              settings
            </UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />
        </TouchableOpacity>

        {/* link item */}
        <TouchableOpacity style={styles.listItem}>
          <CustomerCareIcon width={50} height={50} />

          <View style={{ flex: 1, paddingHorizontal: 8 }}>
            <UI.CustomText size="sm" bold>
              Customer Support
            </UI.CustomText>
            <UI.CustomText size="xs">
              Get prompt assistance and solutions from our dedicated support
              team.
            </UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />
        </TouchableOpacity>

        {/* link item */}
        <TouchableOpacity style={styles.listItem}>
          <FontAwesome5 name="laptop-code" size={40} color="black" />

          <View style={{ flex: 1, paddingHorizontal: 8 }}>
            <UI.CustomText size="sm" bold>
              Developer Info
            </UI.CustomText>
            <UI.CustomText size="xs">
              Learn more about developer and see links to all their social
              platforms.
            </UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />
        </TouchableOpacity>

        {/* link item */}
        <TouchableOpacity style={styles.listItem} onPress={handleLogout}>
          <AntDesign name="logout" size={50} color="black" />

          <View style={{ flex: 1, paddingHorizontal: 8 }}>
            <UI.CustomText size="sm" bold>
              Logout
            </UI.CustomText>
            <UI.CustomText size="xs">Logout now</UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    height: height,
    width: width,
  },

  moreScrollList: {
    width: "100%",
  },

  listItem: {
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: grayColor,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default MoreScreen;
