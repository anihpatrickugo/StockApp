import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Dimensions,KeyboardAvoidingView} from 'react-native'
import { useMutation } from '@apollo/client';
import { FontAwesome5 } from '@expo/vector-icons';
import * as UI from '../../components/common/index';
import {darkGrayColor, primaryColor, secondaryColor} from '../../components/common/variables'
import Logo from '../../assets/icons/Logo';
import { EDIT_USER } from '../../graphql/mutations/AuthMutations';
import Toast from 'react-native-root-toast';
import { useSelector } from 'react-redux';

const { width, height} = Dimensions.get("screen")



const EditProfileScreen = ({navigation}) => {
    
  const user = useSelector((state) => state.auth.user)
    
  const [firstname, setFirstname] = useState(user.firstName)
  const [lastname, setLastname] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [walletAddress, setWalletAddress] = useState(user.walletAddress)

  const [editUser, {loading, error}] = useMutation(EDIT_USER)


  const handleCreate = () => {
    editUser({variables: {firstname, lastname, email, walletAddress},
    onCompleted: (data) => {
      if (data) {
        navigation.navigate('Profile')
        let toast = Toast.show('Successfully Edited Profile.', {
            duration: Toast.durations.LONG,
            visible: true,
            position: 60,
            shadow: true,
            animation: true,
            hideOnPress: true,
            backgroundColor: 'green',
          });
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
          backgroundColor="red"
        >
          {error.message}
        </Toast>
      )}
      
   

      <UI.CustomText size='md' bold>Edit Profile</UI.CustomText>
      <UI.CustomText size='xs'color={darkGrayColor} >Enter your details to continue</UI.CustomText>

      
      {/* form */}
      <KeyboardAvoidingView style={styles.form}>
        
         {/* row */}
         <View style={{alignSelf: 'center', marginVertical: 20,}}>
            {user.profilePhoto ? (

              <Image height={60} width={60} style={{borderRadius: 100}} source={{uri: user.profilePhoto}}/>
            ) : (
              
              <FontAwesome5 name="user-plus" size={50} color={primaryColor} />
            )}

            
               {user.profilePhoto && <View style={{position: 'absolute', bottom: -5, right: -5}}>
                   <FontAwesome5 name="plus" size={20} color="black" />
               </View> } 
            
        
         </View>


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
            placeholder="Enter USDT wallet address"
            keyboardType="default"
            editable={true}
            value={walletAddress}
            onChangeText={(text)=>setWalletAddress(text)}
            selectTextOnFocus={true} />
        </View>

        <View style={styles.button}>
            <UI.Button text='Save Profile' variant='coloured' onPress={handleCreate}/>
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

    form: {
        width: "100%",
        flex: 1
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
export default EditProfileScreen
