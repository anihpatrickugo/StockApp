import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Pressable, Platform, ToastAndroid, Dimensions} from 'react-native'
import * as Clipboard from 'expo-clipboard';
import * as UI from '../../components/common'
import TetherIcon from '../../assets/icons/Tether'
import NumIcon from '../../assets/icons/123'
import UserIcon from '../../assets/icons/PurpleAvatar'
import CopyIcon from '../../assets/icons/Copy'
import { grayLightColor, success } from '../../components/common/variables';
import QRCode from 'react-native-qrcode-svg';

const { width, height} = Dimensions.get("screen")

const WALLET_ADDRESS = "TSAfYQqKuqSVqqnS7NEjamAauAZUGdaUrr"


const FundTransferWalletAddressScreen = ({navigation}) => {

  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(WALLET_ADDRESS);
    // Display a success message 
    if (Platform.OS === 'android') { 
      ToastAndroid.show('Wallet Address copied to clipboard!', 
          ToastAndroid.SHORT); 
  } else if (Platform.OS === 'ios') { 
      // console.log("ios")
  } 

  setCopied(true);
  };


  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName='Home'/>

        <UI.CustomText size='xs' bold color={success} style={{textAlign: "center"}}>Send the the desired amout (must be above $100) to this wallet address below.</UI.CustomText>
      
      {/* Transfer Details */}
      <View style={[styles.transferDetailsContainer, {backgroundColor: copied && grayLightColor, marginTop: 32}]}>
        
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
                 <UI.CustomText size='md'>{WALLET_ADDRESS}</UI.CustomText>
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


        <View style={{alignSelf: 'center', alignItems:"center", marginVertical: 20}}>
        <QRCode
               value={WALLET_ADDRESS}
               logo={require('../../assets/icons/Tether.png')}
               logoSize={20}
               logoBackgroundColor='transparent'
               
            />
            <UI.CustomText size='xs'>Or Scan This Qrcode</UI.CustomText>
        </View>

      </View>

      <UI.Button text='I’ve made the transfer' variant='coloured' onPress={()=>navigation.navigate("Deposit-Details")}/>
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

export default FundTransferWalletAddressScreen
