import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Pressable,
  Dimensions,
} from "react-native";

import * as UI from "../../components/common/index";
import {
  danger,
  darkGrayColor,
  primaryColor,
  secondaryColor,
} from "../../components/common/variables";
import Logo from "../../assets/icons/Logo";

import { useMutation, gql } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/authSlice";
import {
  SIGN_USER_IN,
  GOOGLE_SIGN_IN,
} from "../../graphql/mutations/AuthMutations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { configureGoogleSignIn } from "../../utils/googleSignInConfigurations";

const { width, height } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
  // Google Sign In configurations

  const [googleSignIn, { loading: googleLoading }] =
    useMutation(GOOGLE_SIGN_IN);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();

      const accessToken = (await GoogleSignin.getTokens()).accessToken;

      googleSignIn({
        variables: { accessToken: accessToken, provider: "google-oauth2" },
        onCompleted: (data) => {
          if (data.socialAuth.token) {
            dispatch(setToken(data.socialAuth.token));
            AsyncStorage.setItem("token", data.socialAuth.token);
          }
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  // login credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // apollo mutation
  const [signIn, { data, loading, error }] = useMutation(SIGN_USER_IN);

  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    signIn({
      variables: { email: email, password: password },
      onCompleted: (data) => {
        // console.log(data);
        if (data.tokenAuth.token) {
          // setAuthToken();
          dispatch(setToken(data.tokenAuth.token));
          AsyncStorage.setItem("token", data.tokenAuth.token);
        }
      },
    });
  };

  return (
    <SafeAreaView style={styles.containner}>
      {(loading || googleLoading) && <UI.Loading />}

      {error && (
        <Toast
          visible={true}
          position={60}
          shadow={true}
          animation={true}
          hideOnPress={true}
          backgroundColor={danger}
        >
          {error.message}
        </Toast>
      )}

      <Logo height={100} width={100} />
      <UI.CustomText size="md" bold>
        Welcome back!
      </UI.CustomText>
      <UI.CustomText size="xs" color={darkGrayColor}>
        Enter your details to continue
      </UI.CustomText>
      {/* form */}
      <View>
        {/* email */}
        <View style={styles.textInput}>
          <UI.CustomTextInput
            placeholder="Enter email-address"
            keyboardType="default"
            editable={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
            selectTextOnFocus={true}
          />
        </View>

        {/* password */}
        <View style={styles.textInput}>
          <UI.CustomTextInput
            placeholder="Enter password"
            keyboardType="default"
            secureTextEntry={true}
            editable={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            selectTextOnFocus={true}
          />
        </View>

        <View style={styles.button}>
          <UI.Button text="Log In" variant="coloured" onPress={handleLogin} />
        </View>

        <UI.CustomText
          size="sm"
          bold
          style={{ textAlign: "center", marginVertical: 20 }}
        >
          Or Continue With Google
        </UI.CustomText>

        {/* social auths */}
        <View style={styles.socialAuthContainner}>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
            onPress={signInWithGoogle}
            text
          />
        </View>

        <View style={styles.bottomText}>
          <UI.CustomText size="xs" color={darkGrayColor}>
            Not yet a member?
          </UI.CustomText>
          <Pressable
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("SignUp")}
          >
            <UI.CustomText size="xs" color={primaryColor}>
              Sign up
            </UI.CustomText>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    width: width,
    height: height,
  },

  image: {
    width: 60,
    height: 40,
    marginTop: 20,
    marginBottom: 60,
  },

  textInput: {
    marginTop: 15,
  },

  button: {
    marginTop: 20,
  },

  socialAuthContainner: {
    flexDirection: "row",
    justifyContent: "center",
  },

  socialAuth: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: secondaryColor,
  },
  bottomText: {
    flexDirection: "row",
    marginVertical: 20,
  },
});
export default LoginScreen;
