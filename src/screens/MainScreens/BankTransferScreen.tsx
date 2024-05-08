import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Pressable, Platform, ToastAndroid, Dimensions} from 'react-native'
import * as Clipboard from 'expo-clipboard';
import * as UI from '../../components/common'
import TetherIcon from '../../assets/icons/Tether'
import NumIcon from '../../assets/icons/123'
import UserIcon from '../../assets/icons/PurpleAvatar'
import CopyIcon from '../../assets/icons/Copy'
import { grayLightColor } from '../../components/common/variables';

const { width, height} = Dimensions.get("screen")


const BankTransferScreen = ({navigation}) => {

  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('8004175407');
    // Display a success message 
    if (Platform.OS === 'android') { 
      ToastAndroid.show('Account Number copied to clipboard!', 
          ToastAndroid.SHORT); 
  } else if (Platform.OS === 'ios') { 
      // console.log("ios")
  } 

  setCopied(true);
  };


  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName='Home'/>
      
      {/* Transfer Details */}
      <View style={[styles.transferDetailsContainer, {backgroundColor: copied && grayLightColor}]}>
        
        {/* row */}
        <View style={{flexDirection: 'row', alignItems: "center", marginBottom: 10, gap: 10}}>
          <View>
            <UI.CustomText size='xs'>Token Name</UI.CustomText>
            <UI.CustomText size='md'>Tether USDT</UI.CustomText>
          </View>
          <TetherIcon width={40} height={40}/>
        </View>

        {/* row */}
        <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between"}}>
          <View style={{flexDirection: 'row', alignItems: "center", marginBottom: 10}}>
              {/* <NumIcon width={45} height={45}/> */}
              <View>
                 <UI.CustomText size='xs'>Wallet Address</UI.CustomText>
                 <UI.CustomText size='md'>8004175407</UI.CustomText>
              </View>
          </View>
          <Pressable onPress={copyToClipboard}>
               <CopyIcon width={25} height={25}/>
          </Pressable>
        </View>

        {/* row */}
        {/* <View style={{flexDirection: 'row', alignItems: "center", marginBottom: 10}}>
          <UserIcon width={45} height={45}/>
          <View>
            <UI.CustomText size='xs'>Account name</UI.CustomText>
            <UI.CustomText size='md'>Stock Payment</UI.CustomText>
          </View>
        </View> */}

      </View>

      <UI.Button text='I’ve made the transfer' variant='coloured'/>
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
})

export default BankTransferScreen
