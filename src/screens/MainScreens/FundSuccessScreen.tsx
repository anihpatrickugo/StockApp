import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Dimensions} from 'react-native'
import * as UI from '../../components/common/index';
import Success from '../../assets/icons/Success';

const { width, height} = Dimensions.get("screen")


const FundSuccesScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.containner}>
      
      <View style={styles.message}>
          <Success height={160} width={160} style={styles.icon}/>
          <UI.CustomText size='sm' bold style={styles.text}>
           Deposit request was successfull. Please Wait for confirmation.
          </UI.CustomText>
      </View>

      <View style={styles.buttonContainner}>
        <UI.Button text='Invest now' variant='coloured' style={{marginBottom: 10}} onPress={()=>navigation.navigate("Invest")}/>

        <UI.Button text='Return to home' variant='light' style={{marginBottom: 10}} onPress={()=>navigation.navigate("Home-Index")}/>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    containner: {
        paddingTop: StatusBar.currentHeight,
        padding: 14,
        alignItems: "center",
        height: height,
        width: width,
        flex: 1,
    },

    message: {
        alignItems: 'center',
        flex: 1,
     },

    icon: {
        marginTop: 100,
    },

    text: { 
        textAlign: "center", 
        marginVertical: 10
    },

    buttonContainner: {
        width: '100%', 
        position: 'absolute', 
        bottom: 20
    }
})
export default FundSuccesScreen
