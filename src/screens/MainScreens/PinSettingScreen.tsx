import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, KeyboardAvoidingView, Dimensions, Platform} from 'react-native'
import * as UI from '../../components/common'
import { danger} from '../../components/common/variables';
const { width, height} = Dimensions.get("screen")
import { useMutation } from '@apollo/client';
import { NEW_DEPOSIT } from '../../graphql/mutations/TransactionsMutations';
import Toast from 'react-native-root-toast';


const PinSettingScreen = ({navigation}) => {

  const [oldPin, setOldPin] = React.useState<string | null>(null);
  const [newPin, setNewPin] = React.useState<string | null>(null);
  const [newPinAgain, setNewPinAgain] = React.useState<string | null>(null);



  const [deposit, {loading, error}] = useMutation(NEW_DEPOSIT)


  const handlePinChange = async() => {
     
    if (newPin !== newPinAgain) {
        let toast = Toast.show("New in don't match!", {
            duration: Toast.durations.LONG,
            position: 60,
            shadow: true,
            animation: true,
            hideOnPress: true,
            backgroundColor: danger,
        }
        )
    }

   
    
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


       {/* Trademark*/}
       <View style={{alignItems: "center"}}>
        {/* row */}
         <Image source={require('../../assets/icon.png')} style={{width: 60, height: 60}} />
         <UI.CustomText bold  size="md" style={{marginTop: -20}}>StockPay</UI.CustomText>

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
