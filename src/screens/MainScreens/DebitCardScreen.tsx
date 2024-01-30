import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Dimensions} from 'react-native'
import { RadioButton } from 'react-native-paper'; 
import * as UI from '../../components/common'
import AccessIcon from '../../assets/icons/AccessBank'

import { primaryColor } from '../../components/common/variables';


const { width, height} = Dimensions.get("screen")


const DebitCardScreen = ({navigation}) => {

  const [useCard, setUseCard] = React.useState(true);

  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName='Fund with Debit Card'/>
      
      {/* Transfer Details */}
      <View style={styles.transferDetailsContainer}>
        
        {/* row */}
        <View style={{flexDirection: 'row', alignItems: "center", marginBottom: 10}}>

          {/* radio button */}
          <RadioButton.Android 
                        value="option1"
                        status={useCard ?  
                                'checked' : 'unchecked'} 
                        onPress={() => setUseCard(!useCard)} 
                        color={primaryColor}
                    />  

          <AccessIcon width={45} height={45} style={{marginHorizontal: 6}}/>

          <View>
            <UI.CustomText size='sm'>Access bank Plc</UI.CustomText>
            <UI.CustomText size='xs'>54365*****2468</UI.CustomText>
          </View>
        </View>

      </View>

      {/* Newcard form */}
      <View style={{width: '100%'}}>
            <UI.CustomText size='xs' bold style={{marginBottom: 8}}>Enter amount</UI.CustomText>

            <View  style={{marginBottom: 12}}>
              <UI.FormInput 
              placeholder="₦ 1,000-999,999"
              keyboardType="numeric"
              secureTextEntry={false}
              editable={true}
              selectTextOnFocus={true}
              />
            </View>
        

      </View>

      <View style={styles.button}>
         <UI.Button text='Fund account' variant='coloured' onPress={()=>navigation.navigate("Fund-Success")}/>
      </View>
     
      <View style={styles.button}>
        <UI.Button text='Add new card +' variant='light' noBorder onPress={()=>navigation.navigate("New-Card")}/>
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

export default DebitCardScreen
