import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { danger, darkGrayColor, grayColor, success} from '../../components/common/variables';
const { width, height} = Dimensions.get("screen")
import { useSelector } from 'react-redux';
import { useMutation} from '@apollo/client';
import { CHANGE_PIN, REQUEST_NEW_PIN } from '../../graphql/mutations/AuthMutations';
import Toast from 'react-native-root-toast';


const PinSettingScreen = ({navigation}) => {

  const [oldPin, setOldPin] = React.useState<string | null>(null);
  const [newPin, setNewPin] = React.useState<string | null>(null);
  const [newPinAgain, setNewPinAgain] = React.useState<string | null>(null);


  const user = useSelector((state) => state.auth.user)


  const [changePin, {loading, error}] = useMutation(CHANGE_PIN);
  const [requestNewPin, {loading: newPinLoading, error: newPinError}] = useMutation(REQUEST_NEW_PIN);
  

  // this changes the pin from input form
  const handlePinChange = async() => {
     
    if (newPin !== newPinAgain) {
        Toast.show("New in don't match!", {
            duration: Toast.durations.LONG,
            position: 60,
            shadow: true,
            animation: true,
            hideOnPress: true,
            backgroundColor: danger,
        }
        )
    } else {
        
      changePin({variables: {oldPin: parseInt(oldPin), newPin: parseInt(newPin)},
        onCompleted: (data) => {
          if (data) {
            navigation.navigate("More")
            
            let toast = Toast.show('Successfully Changed Transaction Pin.', {
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
        //   console.log(error.networkError.result.errors[0].message)
        // }

         })
      }
    }

  // this sends a newly generated pin to user email.
  const handleRequestPin = async() => {
        
      requestNewPin({
        onCompleted: (data) => {
          if (data) {
            navigation.navigate("More")
            
            let toast = Toast.show(`A New Transaction Pin Has been sent to ${user.email}.`, {
                duration: Toast.durations.LONG,
                visible: true,
                position: 60,
                shadow: true,
                animation: true,
                hideOnPress: true,
                backgroundColor: success,
              });
          }
        }
      })
    }
    
  

  return (
    <SafeAreaView style={styles.containner}>
      {loading || newPinLoading && <UI.Loading />}

      {(error || newPinError) && (
           <Toast
               visible={true}
               position={60}
               shadow={true}
               animation={true}
               hideOnPress={true}
               backgroundColor={danger}
            >
        {error?.message} || {newPinError?.message}
     </Toast>
       )}

      <UI.BackButton navigation={navigation} screenName='Set New Pin'/>
      
     

      {/* Newcard form */}
      <View 
           style={{width: '100%', marginTop: 12}}>
            

            <View  style={{marginBottom: 20}}>
              <UI.CustomText size='xs' bold style={{marginBottom: 8}}>Old PIN</UI.CustomText>
              <UI.FormInput 
              placeholder="Enter Old Four Digit PIN"
              keyboardType="numeric"
              secureTextEntry={false}
              editable={true}
              selectTextOnFocus={true}
              value={oldPin}
              onChangeText={(value)=>{
                if (value.length <= 4){
                    setOldPin(value)
                }
              }}
              />
            </View>


            <View  style={{marginBottom: 20}}>
              <UI.CustomText size='xs' bold style={{marginBottom: 8}}>New PIN</UI.CustomText>
              <UI.FormInput 
              placeholder="Enter New Four Digit PIN"
              keyboardType="numeric"
              secureTextEntry={true}
              editable={true}
              selectTextOnFocus={true}
              value={newPin}
              onChangeText={(value)=>{
                if (value.length <= 4){
                    setNewPin(value)
                }
              }}
              />
            </View>

            <View  style={{marginBottom: 24}}>
              <UI.CustomText size='xs' bold style={{marginBottom: 8}}>New PIN Again</UI.CustomText>
              <UI.FormInput 
              placeholder="Enter New Again"
              keyboardType="numeric"
              secureTextEntry={true}
              editable={true}
              selectTextOnFocus={true}
              value={newPinAgain}
              onChangeText={(value)=>{
                if (value.length <= 4){
                    setNewPinAgain(value)
                }
              }}
              />
            </View>
        

      </View>

      <View style={styles.button}>
         <UI.Button text='Submit' variant='coloured' onPress={handlePinChange}/>
      </View>
      <UI.CustomText size='md' color={darkGrayColor}>OR</UI.CustomText>
      <View style={styles.button}>
         <UI.Button text='Request New Pin' variant='light' onPress={handleRequestPin}/>
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    width: width,
    height: height
   },

   transferDetailsContainer : {
    width: '100%',
    marginVertical: 16
   },

   button: {
    width: '100%',
     marginBottom: 8
  },
})

export default  PinSettingScreen
