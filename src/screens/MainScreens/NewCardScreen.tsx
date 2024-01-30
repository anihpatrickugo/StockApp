import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { darkGrayColor } from '../../components/common/variables';


const { width, height} = Dimensions.get("screen")


const NewCardScreen = ({navigation}) => {

  const [saveCard, setSaveCard] = React.useState(false)

  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName='Add Debit Card'/>


       {/* Newcard form */}
       <View style={{width: '100%', }}>
          

            <View  style={{marginBottom: 12}}>
              <UI.FormInput 
              placeholder="Name on card"
              keyboardType="default"
              secureTextEntry={false}
              editable={true}
              selectTextOnFocus={true}
              />
            </View>

            <View  style={{marginBottom: 12}}>
              <UI.FormInput 
              placeholder="Card number"
              keyboardType="numeric"
              secureTextEntry={false}
              editable={true}
              selectTextOnFocus={true}
              />
            </View>

            <View  style={{marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between'}}>
              <UI.FormInput 
              placeholder="Expiry (MM/YY)"
              keyboardType="numeric"
              secureTextEntry={false}
              editable={true}
              selectTextOnFocus={true}
              style={{width: '48%'}}
              />
              <UI.FormInput 
              placeholder="CVV"
              keyboardType="numeric"
              secureTextEntry={false}
              editable={true}
              selectTextOnFocus={true}
              style={{width: '48%'}}
              />
            </View>

            <View  style={{marginBottom: 12}}>
              <UI.FormInput 
              placeholder="Card PIN"
              keyboardType="numeric"
              secureTextEntry
              editable={true}
              selectTextOnFocus={true}
              />
            </View>
            
            <View  style={{marginBottom: 12, flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <UI.Toggle toggled={saveCard} setToggled={setSaveCard}/>
              <UI.CustomText size='xs' color={darkGrayColor}>Save this card</UI.CustomText>
            </View>
      </View>

     
    
      <View style={styles.button}>
         <UI.Button text='Confirm' variant='coloured' onPress={()=>navigation.navigate("Fund-Success")}/>
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

export default NewCardScreen
