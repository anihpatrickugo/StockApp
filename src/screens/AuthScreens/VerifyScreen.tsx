import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Dimensions, ToastAndroid} from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import * as UI from '../../components/common/index';
import {darkGrayColor, grayLightColor, primaryColor} from '../../components/common/variables'
import Logo from '../../assets/icons/Logo';
import { useMutation } from '@apollo/client';
import { VERIFY_USER } from '../../graphql/mutations/AuthMutations';


const { width, height} = Dimensions.get("screen")

const VerifyScreen = ({navigation}) => {

    const [code, setCode] = React.useState("")

      // apollo mutation
     const [verifyUser, { data, loading, error }] = useMutation(VERIFY_USER);

    const handleSendCode = () => {
      verifyUser({
        variables: { token: code },
        onCompleted: (data) => {
          // console.log(data);
          if (data.verifyUser.success) {
            navigation.replace('AuthSuccess')
          }

        },
        onError: (error) => {
          ToastAndroid.showWithGravity(
            error.message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );}
      });
    }

  return (
    <SafeAreaView style={styles.containner}>

      {loading && <UI.Loading />}

      <Logo height={100} width={100}/>

      <UI.CustomText size='md' bold>Verify your account</UI.CustomText>
      <UI.CustomText size='xs'color={darkGrayColor} >Enter code sent to your email address</UI.CustomText>


      {/* form */}
      <View>
      <OTPInputView
          style={{width: '100%', height: 100}}
          pinCount={6}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged = {code => {setCode(code)}}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled = {handleSendCode}

/>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    containner: {
        paddingTop: StatusBar.currentHeight,
        padding: 14,
        width: width,
        height: height
    },
    
      underlineStyleBase: {
        width: 45,
        height: 45,
        borderRadius: 20,
        borderBottomWidth: 1,
        backgroundColor: grayLightColor,
        color: "black"
      },
    
      underlineStyleHighLighted: {
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor: "white",
        color: darkGrayColor
      },

})
export default VerifyScreen
