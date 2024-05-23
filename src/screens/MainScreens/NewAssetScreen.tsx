import React from 'react'
import {  View, StyleSheet, StatusBar, Image, ScrollView, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { danger, primaryColor } from '../../components/common/variables';
import Animated, { LightSpeedInLeft, LightSpeedInRight } from 'react-native-reanimated';
import Toast from 'react-native-root-toast';



const { width, height} = Dimensions.get("screen")


const NewAssetScreen = ({navigation, route}) => {
    const {item, direction} = route.params
    const [amount, setAmount] = React.useState("")
    const total = parseInt(amount) * item.price

    const handleConfirm = ()=>{
      if (total <= 0 || isNaN(total)){
        Toast.show("Please enter a valid amount", {
          position: 60,
          shadow: true,
          animation: true,
          hideOnPress: true,
          backgroundColor: danger
        })
      }
      else{
        navigation.navigate("Confirm-Stock", {item, direction, amount})
      }
    }

  return (
    <ScrollView  style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName={`${direction} ${item.ticker}`}/>

      <ScrollView style={{width: "100%", height: 500}} showsVerticalScrollIndicator={false}> 
          
        <View style={{flexDirection: "row", justifyContent: "space-between",alignItems:"flex-start", width: "100%"}}>
            <Animated.View entering={LightSpeedInLeft.duration(1000)} style={{flexDirection: 'row'}}>
                <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                <View style={{marginLeft: 12}}>
                   <UI.CustomText size='sm' bold>{item.name}</UI.CustomText>
                   <UI.CustomText size='xs'>{item.ticker}</UI.CustomText>
                </View>
            </Animated.View>

           <Animated.View entering={LightSpeedInRight.duration(1000)}>
                 <UI.CustomText size='md' bold>{`$ ${item.price}`}</UI.CustomText>
                 <UI.CustomText size='sm' >Market price</UI.CustomText>
          </Animated.View>

        </View>

        {/* form */}
        <View style={{marginTop: 40, }}>

            <View>
                 <UI.CustomText size='sm' style={{marginBottom: 8}}>Number of stocks</UI.CustomText>
                 <UI.FormInput 
                 keyboardType='numeric' 
                 style={styles.formInput}
                 value={amount}
                 onChangeText={(value)=>setAmount(value)}
                 />
            </View>

            <View style={{marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <UI.CustomText size='md' bold style={{marginBottom: 8}}>Total: </UI.CustomText>
              <UI.CustomText size='md' bold>{`$ ${Number(amount) * item.price}`}</UI.CustomText>
            </View>
            
            <View style={{marginVertical: 16}}>
               <UI.Button text='Continue' variant='coloured' onPress={handleConfirm}/>
            </View>
        </View>

      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    backgroundColor: "#FFFFFF",
    width: width,
    height: height
   },

   formInput: { 
     fontSize:24, 
     marginBottom: 40,
     minHeight:70, 
     borderColor: primaryColor, 
     borderWidth: 1.5, 
     borderRadius: 20
     }
})

export default  NewAssetScreen

