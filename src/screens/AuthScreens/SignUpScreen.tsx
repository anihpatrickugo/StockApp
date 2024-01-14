import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Pressable} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import * as UI from '../../components/common/index';
import {darkGrayColor, primaryColor, secondaryColor} from '../../components/common/variables'
import Logo from '../../assets/icons/Logo';
import GoogleIcon from '../../assets/icons/Google';

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containner}>
      
      <Logo height={100} width={100}/>

      <UI.CustomText size='md' bold>Create account</UI.CustomText>
      <UI.CustomText size='xs'color={darkGrayColor} >Enter your details to continue</UI.CustomText>


      {/* form */}
      <View>
        
        {/* first name */}
        <View style={styles.textInput}>
          <UI.CustomTextInput 
            placeholder="Firstname"
            keyboardType="default"
            editable={true}
            selectTextOnFocus={true} />
        </View>
        
        {/* last name */}
        <View style={styles.textInput}>
          <UI.CustomTextInput 
            placeholder="Lastname"
            keyboardType="default"
            editable={true}
            selectTextOnFocus={true} />
        </View>
        
        {/* email */}
        <View style={styles.textInput}>
          <UI.CustomTextInput 
            placeholder="Enter email-address"
            keyboardType="default"
            editable={true}
            selectTextOnFocus={true} />
        </View>

        {/* password */}
        <View style={styles.textInput}>
          <UI.CustomTextInput 
            placeholder="Enter password"
            keyboardType="default"
            secureTextEntry={true}
            editable={true}
            selectTextOnFocus={true} />
        </View>

        <View style={styles.button}>
            <UI.Button text='Create account' variant='coloured' onPress={()=>navigation.navigate('Verify')}/>
        </View>

        <UI.CustomText size='sm' bold style={{textAlign: 'center', marginVertical: 20}}>Or</UI.CustomText>

        {/* social auths */}
        <View style={styles.socialAuthContainner}>
            <Pressable style={styles.socialAuth}>
            <GoogleIcon height={25} width={25}/>
            </Pressable>
            <Pressable style={styles.socialAuth}>
               <FontAwesome name="apple" size={24} color="black" />
            </Pressable>
        </View>
   
        <View style={styles.bottomText}>
          <UI.CustomText size='xs' color={darkGrayColor} >
              Have an account already? 
          </UI.CustomText>
          <Pressable style={{marginLeft: 10}}  onPress={()=>navigation.navigate('LogIn')}>
                 <UI.CustomText size='xs' color={primaryColor}>Log in</UI.CustomText>
          </Pressable>
        </View>
        
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    containner: {
        paddingTop: StatusBar.currentHeight,
        padding: 14,
    },

    image: {
        width: 60,
        height: 40,
        marginTop: 20,
        marginBottom: 60
    },

    textInput: {
        marginTop: 15
    },

    button: {
        marginTop: 20
    },

    socialAuthContainner: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    socialAuth: {
        width: 50,
        height: 50,
        marginHorizontal: 15,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secondaryColor
    }, 
    bottomText: {
      flexDirection: 'row',
      marginVertical: 20
    }

})
export default SignUpScreen
