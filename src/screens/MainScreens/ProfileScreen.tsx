import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Pressable, Dimensions, KeyboardAvoidingView} from 'react-native'
import { useMutation } from '@apollo/client';
import * as UI from '../../components/common/index';
import {darkGrayColor, primaryColor, secondaryColor} from '../../components/common/variables'



const { width, height} = Dimensions.get("screen")


const ProfileScreen = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const handleEdit = () => {
    // signUpUser({variables: {firstname, lastname, email, password},
    onCompleted: (data) => {
      if (data) {
        navigation.replace('Verify')
      }
    }}
    
  
//   if (loading) return <UI.Loading/>

//   if (error) console.log(error)

  return (
    <SafeAreaView style={styles.containner}>
      
    

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
            <UI.Button text='Create account' variant='coloured' onPress={handleEdit}/>
        </View>

       
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
export default ProfileScreen
