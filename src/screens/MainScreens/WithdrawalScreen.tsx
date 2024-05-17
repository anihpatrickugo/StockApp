import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { danger, success } from '../../components/common/variables';
const { width, height} = Dimensions.get("screen")
import { useMutation } from '@apollo/client';
import { NEW_WITHDRAWAL } from '../../graphql/mutations/TransactionsMutations';
import Toast from 'react-native-root-toast';


const WithdrawalScreen = ({navigation}) => {

  const [amount, setAmount] = React.useState<string | null>(null);

  const [deposit, {loading, error}] = useMutation(NEW_WITHDRAWAL)


  const handleDeposit = async() => {

    deposit({variables: {amount: parseInt(amount)},
    onCompleted: (data) => {
      if (data) {
        navigation.replace('Withdrawal-Success')
         }
        },
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

      <UI.BackButton navigation={navigation} screenName='Withdrawal Details'/>
      
      {/* Transfer Details */}
      <View style={styles.transferDetailsContainer}>
        
        {/* row */}
        <UI.CustomText color={success} bold  size='xs' style={{textAlign: "center", marginBottom: 12}}>Please Enter the amount you wish to Withdraw.</UI.CustomText>

      </View>

      {/* Newcard form */}
      <View style={{width: '100%'}}>
            

            <View  style={{marginBottom: 24}}>
              <UI.CustomText size='xs' bold style={{marginBottom: 8}}>Enter Amount</UI.CustomText>
              <UI.FormInput 
              placeholder="Enter Amount"
              keyboardType="numeric"
              secureTextEntry={false}
              editable={true}
              selectTextOnFocus={true}
              value={amount}
              onChangeText={(value)=>setAmount(value)}
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

export default WithdrawalScreen
