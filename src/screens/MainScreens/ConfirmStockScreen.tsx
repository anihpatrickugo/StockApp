import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { grayLightColor, primaryColor, darkGrayColor} from '../../components/common/variables';
import ConfirmStockModal from '../../components/main/ConfirmStockModal';


const {width, height} = Dimensions.get("screen")

const ConfirmStockScreen = ({navigation, route}) => {

  const [modalVisible, setModalVisible] = React.useState(false);
  const {item} = route.params

  return (
    <SafeAreaView style={[styles.containner, { backgroundColor: modalVisible ? "gray" : "#FFFFFF"}]}>

          {modalVisible && (<ConfirmStockModal modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation}/>)}

           <UI.BackButton navigation={navigation} screenName='Buy stocks'/>


          <View style={{flexDirection: 'row'}}>
                <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                <View style={{marginLeft: 12}}>
                   <UI.CustomText size='sm' bold>{item.title}</UI.CustomText>
                   <UI.CustomText size='xs'>APPL</UI.CustomText>
                </View>
         </View>

         {/* item details */}
         <View style={{marginVertical: 12, padding: 14, width: "100%", backgroundColor: modalVisible ? "gray" :  "#F8F8FA", gap: 16}}>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <UI.CustomText size='sm'>Amount:</UI.CustomText>
                <UI.CustomText size='sm'>₦8,500</UI.CustomText>
            </View>
            
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <UI.CustomText size='sm'>Market Price:</UI.CustomText>
                <UI.CustomText size='sm'>₦188,500</UI.CustomText>
            </View>

            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <UI.CustomText size='sm'>No of stocks:</UI.CustomText>
                <UI.CustomText size='sm'>3.48</UI.CustomText>
            </View>

            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <UI.CustomText size='sm'>Trading fee:</UI.CustomText>
                <UI.CustomText size='sm'>₦500</UI.CustomText>
            </View>

            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <UI.CustomText size='md' bold>Total:</UI.CustomText>
                <UI.CustomText size='md' bold>₦196,500</UI.CustomText>
            </View>

         </View>

          {/* button */}
          <View style={{marginVertical: 12}}>
               <UI.Button text='Confirm' variant='coloured' onPress={()=>setModalVisible(true)}/>
          </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    width: width,
    height: height
   },
   underlineStyleBase: {
    width: 45,
    height: 45,
    borderRadius: 20,
    borderBottomWidth: 1,
    backgroundColor: grayLightColor,
    color: "black"
  },

  underlineStyleHighLighted: {
    borderWidth: 1,
    borderColor: primaryColor,
    backgroundColor: "white",
    color: darkGrayColor
  },

})

export default ConfirmStockScreen

