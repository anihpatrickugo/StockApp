import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Pressable, Dimensions, KeyboardAvoidingView} from 'react-native'
import { useMutation } from '@apollo/client';
import * as UI from '../../components/common/index';
import {danger, darkGrayColor, primaryColor, secondaryColor} from '../../components/common/variables'
import Logo from '../../assets/icons/Logo';
import { SIGN_USER_UP } from '../../graphql/mutations/AuthMutations';
import Toast from 'react-native-root-toast';


const { width, height} = Dimensions.get("screen")


const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const [signUpUser, {data, loading, error}] = useMutation(SIGN_USER_UP)


  const handleCreate = () => {
    signUpUser({variables: {firstname, lastname, email, password},
    onCompleted: (data) => {
      if (data) {
        navigation.replace('Verify')
      }
    },
    // onError: (error) => {
    //   ToastAndroid.showWithGravity(
    //     error.message,
    //     ToastAndroid.SHORT,
    //     ToastAndroid.CENTER
    //   );
    // },
  })
    
  }
 

  return (
    <SafeAreaView style={styles.containner}>

      {loading && <UI.Loading />}

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
      
      <Logo height={100} width={100}/>

      <UI.CustomText size='md' bold>Create account</UI.CustomText>
      <UI.CustomText size='xs'color={darkGrayColor} >Enter your details to continue</UI.CustomText>


      {/* form */}
      <KeyboardAvoidingView >
        
        {/* first name */}
        <View style={styles.textInput}>
          <UI.CustomTextInput 
            placeholder="Firstname"
            keyboardType="default"
            editable={true}
            value={firstname}
            onChangeText={(text)=>setFirstname(text)}
            selectTextOnFocus={true} />
        </View>
        
        {/* last name */}
        <View style={styles.textInput}>
          <UI.CustomTextInput 
            placeholder="Lastname"
            keyboardType="default"
            editable={true}
            value={lastname}
            onChangeText={(text)=>setLastname(text)}
            selectTextOnFocus={true} />
        </View>
        
        {/* email */}
        <View style={styles.textInput}>
          <UI.CustomTextInput 
            placeholder="Enter email-address"
            keyboardType="default"
            editable={true}
            value={email}
            onChangeText={(text)=>setEmail(text)}
            selectTextOnFocus={true} />
        </View>

        {/* password */}
        <View style={styles.textInput}>
          <UI.CustomTextInput 
            placeholder="Enter password"
            keyboardType="default"
            secureTextEntry={true}
            editable={true}
            value={password}
            onChangeText={(text)=>setPassword(text)}
            selectTextOnFocus={true} />
        </View>

        <View style={styles.button}>
            <UI.Button text='Create account' variant='coloured' onPress={handleCreate}/>
        </View>

        {/* <UI.CustomText size='sm' bold style={{textAlign: 'center', marginVertical: 20}}>Or</UI.CustomText> */}

        {/* social auths */}
        {/* <View style={styles.socialAuthContainner}>
            <Pressable style={styles.socialAuth}>
            <GoogleIcon height={25} width={25}/>
            </Pressable>
            <Pressable style={styles.socialAuth}>
               <FontAwesome name="apple" size={24} color="black" />
            </Pressable>
        </View> */}
   
        <View style={styles.bottomText}>
          <UI.CustomText size='xs' color={darkGrayColor} >
              Have an account already? 
          </UI.CustomText>
          <Pressable style={{marginLeft: 10}}  onPress={()=>navigation.navigate('LogIn')}>
                 <UI.CustomText size='xs' color={primaryColor}>Log in</UI.CustomText>
          </Pressable>
        </View>
        
      </KeyboardAvoidingView>
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
