import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Dimensions} from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import * as UI from '../../components/common/index';
import {darkGrayColor, grayLightColor, primaryColor} from '../../components/common/variables'
import Logo from '../../assets/icons/Logo';


const { width, height} = Dimensions.get("screen")

const VerifyScreen = ({navigation}) => {

    const [code, setCode] = React.useState("")

  return (
    <SafeAreaView style={styles.containner}>
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
          onCodeFilled = {()=> navigation.replace("AuthSuccess")}

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
