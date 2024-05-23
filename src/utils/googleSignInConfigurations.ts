import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const configureGoogleSignIn = async () => {
    await GoogleSignin.configure({
      webClientId:
        "77067681655-nc8tjnj5aei33sn5l9afq325us337jhr.apps.googleusercontent.com",
      androidClientId:
        "77067681655-csl52bm5p708miii5umn5jsvssg7a7f2.apps.googleusercontent.com",
      iosClientId:
        "77067681655-ct1u80q6b9siphg7t2o4vt18dbun5qlp.apps.googleusercontent.com",
    });
  };