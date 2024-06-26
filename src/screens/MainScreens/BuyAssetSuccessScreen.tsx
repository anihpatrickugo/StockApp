import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Dimensions} from 'react-native'
import * as UI from '../../components/common/index';
import Success from '../../assets/icons/Success';
import Animated, { BounceIn } from 'react-native-reanimated';


const {height, width} = Dimensions.get("screen")

const BuyAssetSuccesScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.containner}>
      
      <Animated.View entering={BounceIn.duration(1000)} style={styles.message}>
          <Success height={160} width={160} style={styles.icon}/>
          <UI.CustomText size='md' bold style={styles.text}>
             Congratulations! You have successfully invested in Apple Inc. (APPL)
          </UI.CustomText>
      </Animated.View>

      <View style={styles.buttonContainner}>
        <UI.Button text='View Portfolio' variant='coloured' style={{marginBottom: 10}} onPress={()=>navigation.replace("My-Assets")}/>

        <UI.Button text='Return to home' variant='light' style={{marginBottom: 10}} onPress={()=>navigation.replace("Home-Index")}/>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    containner: {
        paddingTop: StatusBar.currentHeight,
        padding: 14,
        alignItems: "center",
        width: width,
        height: height,
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
export default BuyAssetSuccesScreen
