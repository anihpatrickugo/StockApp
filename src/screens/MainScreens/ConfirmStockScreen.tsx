import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { grayLightColor, primaryColor, darkGrayColor, danger} from '../../components/common/variables';
import ConfirmStockModal from '../../components/main/ConfirmStockModal';
import { useMutation } from '@apollo/client';
import { NEW_POSITION } from '../../graphql/mutations/TransactionsMutations';
import Toast from 'react-native-root-toast';
import Animated, { LightSpeedInLeft, StretchInX } from 'react-native-reanimated';


const {width, height} = Dimensions.get("screen")

const ConfirmStockScreen = ({navigation, route}) => {

 
  const [modalVisible, setModalVisible] = React.useState(false);
  const {item, amount, direction} = route.params
  
  const [newPosition, {loading, error}] = useMutation(NEW_POSITION)

  const handlePosition = async(pin: string)=>{
   

    newPosition({variables: {direction, ticker: item.ticker, volume: parseInt(amount), pin: parseInt(pin)},
      onCompleted: (data) => {
        if (data) {
          navigation.replace('Buy-Success')
        }
      },
    })

  }


  return (
    <SafeAreaView style={[styles.containner, { backgroundColor: modalVisible ? "gray" : "#FFFFFF"}]}>
         
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


         
          {/* modal for the user pin  */}
          {modalVisible && (<ConfirmStockModal
           modalVisible={modalVisible} 
           setModalVisible={setModalVisible} 
           handlePosition={handlePosition}
           />)}

           <UI.BackButton navigation={navigation} screenName={`Confirm ${direction} ${item.ticker}`}/>


          <Animated.View entering={LightSpeedInLeft.duration(1000)} style={{flexDirection: 'row'}}>
                <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                <View style={{marginLeft: 12}}>
                   <UI.CustomText size='sm' bold>{item.name}</UI.CustomText>
                   <UI.CustomText size='xs'>APPL</UI.CustomText>
                </View>
         </Animated.View>

         {/* item details */}
         <Animated.View entering={StretchInX.delay(500).damping(3000)}  style={{marginVertical: 12, padding: 14, width: "100%", backgroundColor: modalVisible ? "gray" :  "#F8F8FA", gap: 16}}>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <UI.CustomText size='sm'>Position:</UI.CustomText>
                <UI.CustomText size='sm'>{direction}</UI.CustomText>
            </View>

            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <UI.CustomText size='sm'>Price:</UI.CustomText>
                <UI.CustomText size='sm'>{`$${item.price}`}</UI.CustomText>
            </View>
            

            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <UI.CustomText size='sm'>No of stocks:</UI.CustomText>
                <UI.CustomText size='sm'>{amount ? amount : 0}</UI.CustomText>
            </View>

            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <UI.CustomText size='sm'>Trading fee:</UI.CustomText>
                <UI.CustomText size='sm'>$0</UI.CustomText>
            </View>

            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <UI.CustomText size='md' bold>Total:</UI.CustomText>
                <UI.CustomText size='md' bold>{`$${item.price * amount}`}</UI.CustomText>
            </View>

         </Animated.View>

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

