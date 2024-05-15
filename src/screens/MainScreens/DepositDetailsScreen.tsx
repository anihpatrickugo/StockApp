import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { danger, success } from '../../components/common/variables';
const { width, height} = Dimensions.get("screen")
import { useMutation } from '@apollo/client';
import { NEW_DEPOSIT } from '../../graphql/mutations/TransactionsMutations';
import Toast from 'react-native-root-toast';


const DepositDetailsScreen = ({navigation}) => {

  const [amount, setAmount] = React.useState<string | null>(null);
  const [trnxHash, setTrnxHash] = React.useState<string|null>(null);


  const [deposit, {loading, error}] = useMutation(NEW_DEPOSIT)


  const handleDeposit = async() => {
    if (amount === (null || "" || " ") || trnxHash === (null || "" || " ")) {
      return Toast.show("Please fill all fields", {
        visible: true,
        position: 60,
        shadow: true,
        animation:true,
        hideOnPress:true,
        backgroundColor: danger
      })
    }

    else {
      deposit({variables: {amount: parseInt(amount),  trnxHash},
      onCompleted: (data) => {
        if (data) {
          navigation.navigate('Fund-Success')
        }
      },
    })
    }

    // onError: (error) => {
    //   ToastAndroid.showWithGravity(
    //     error.message,
    //     ToastAndroid.SHORT,
    //     ToastAndroid.CENTER
    //   );
    // },
    
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

      <UI.BackButton navigation={navigation} screenName='Deposit Details'/>
      
      {/* Transfer Details */}
      <View style={styles.transferDetailsContainer}>
        
        {/* row */}
        <UI.CustomText color={success} bold  size='xs' style={{textAlign: "center", marginBottom: 12}}>Please Enter Depposit details of your USDT transanctions for Confirmation.</UI.CustomText>

      </View>

      {/* Newcard form */}
      <View style={{width: '100%'}}>
            

            <View  style={{marginBottom: 24}}>
              <UI.CustomText size='xs' bold style={{marginBottom: 8}}>Enter amount</UI.CustomText>
              <UI.FormInput 
              placeholder="$100-Unlimited"
              keyboardType="numeric"
              secureTextEntry={false}
              editable={true}
              selectTextOnFocus={true}
              value={amount}
              onChangeText={(value)=>setAmount(value)}
              />
            </View>


            <View  style={{marginBottom: 24}}>
              <UI.CustomText size='xs' bold style={{marginBottom: 8}}>Enter Transaction Hash</UI.CustomText>
              <UI.FormInput 
              placeholder="USDT Transanction Hash"
              keyboardType="default"
              secureTextEntry={false}
              editable={true}
              selectTextOnFocus={true}
              value={trnxHash}
              onChangeText={(value)=>setTrnxHash(value)}
              />
            </View>
        

      </View>

      <View style={styles.button}>
         <UI.Button text='Continue' variant='coloured' onPress={handleDeposit}/>
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

export default DepositDetailsScreen
