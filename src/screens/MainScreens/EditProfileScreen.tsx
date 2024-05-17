import React, {useState, useEffect, useRef} from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Text, Button, View, Image, Dimensions,KeyboardAvoidingView, Pressable} from 'react-native'
import { useMutation } from '@apollo/client';
import { FontAwesome5 } from '@expo/vector-icons';
import * as UI from '../../components/common/index';
import {danger, darkGrayColor, primaryColor, secondaryColor, success} from '../../components/common/variables'
import Logo from '../../assets/icons/Logo';
import { EDIT_USER } from '../../graphql/mutations/AuthMutations';
import Toast from 'react-native-root-toast';
import { useSelector, useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera';
import CameraModalView from '../../components/main/CameraModalView';
import { setUser } from '../../redux/slices/authSlice';
import { uploadToCloudinary } from '../../utils/uploadToCludinary';
import { serializePhoto } from '../../utils/serializePhoto';
import EditPhotoOptionsModalView from '../../components/main/EditPhotoOptionsModalView';


const { width, height} = Dimensions.get("screen")



const EditProfileScreen = ({navigation}) => {
    
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  // camere permissions
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  const [photo, setPhoto] = useState(user.photo);
  const [firstname, setFirstname] = useState(user.firstName)
  const [lastname, setLastname] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [walletAddress, setWalletAddress] = useState(user.walletAddress)


  const [modalVisible, setModalVisible] = useState(false)




  const [editUser, {loading, error}] = useMutation(EDIT_USER)



  const handleEdit = async() => {

    let newFile = serializePhoto(photo)
    let imageFile = await uploadToCloudinary(newFile)
   
  
    editUser({variables: {firstname, lastname, email, walletAddress, photo: imageFile},
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
            backgroundColor: success,
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
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
  
    }
  };


  const toggleCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setPhoto(data.uri);
        setCamera(false)
    }else{
      setCamera(true)
    }
  }
 if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }


  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
      })();
  }, []);

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

      {/* modal for selecting the means of changing photo options */}
      {modalVisible && (<EditPhotoOptionsModalView setModalVisible={setModalVisible} pickImage={pickImage} setCamera={setCamera}/>)}
      
     {/* camera view */}
     {camera && (
         <CameraModalView
            photo={photo} 
            type={type} 
            setCamera={setCamera} 
            takePicture={takePicture} 
            toggleCamera={toggleCamera}/>
     )}
    
   

      <UI.CustomText size='md' bold>Edit Profile</UI.CustomText>
      <UI.CustomText size='xs'color={darkGrayColor} >Enter your details to continue</UI.CustomText>

      
      {/* form */}
      <KeyboardAvoidingView style={styles.form}>
        
         {/* row */}
         <Pressable style={{alignSelf: 'center', marginVertical: 20}} onPress={()=>setModalVisible(true)}>
            {photo || user.photo ? (

              <Image height={60} width={60} style={{borderRadius: 100}} source={{uri: photo || user.photo}}/>
            ) : (
              
              <FontAwesome5 name="user-plus" size={50} color={primaryColor} />
            )}

            
            <View style={{position: 'absolute', bottom: -5, right: -5}}>
                   <FontAwesome5 name="plus" size={20} color="black" />
            </View> 
            
        
         </Pressable>


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
            <UI.Button text='Save Profile' variant='coloured' onPress={handleEdit}/>
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
    },
  

})
export default EditProfileScreen
