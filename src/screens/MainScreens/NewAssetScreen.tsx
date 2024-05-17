import React from 'react'
import {  View, StyleSheet, StatusBar, Image, ScrollView, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { primaryColor } from '../../components/common/variables';



const { width, height} = Dimensions.get("screen")


const NewAssetScreen = ({navigation, route}) => {
    const {item, direction} = route.params
    const [amount, setAmount] = React.useState("")

  return (
    <ScrollView  style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName={`${direction} ${item.ticker}`}/>

      <ScrollView style={{width: "100%", height: 500}} showsVerticalScrollIndicator={false}> 
          
        <View style={{flexDirection: "row", justifyContent: "space-between",alignItems:"flex-start", width: "100%"}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                <View style={{marginLeft: 12}}>
                   <UI.CustomText size='sm' bold>{item.name}</UI.CustomText>
                   <UI.CustomText size='xs'>{item.ticker}</UI.CustomText>
                </View>
            </View>

           <View>
                 <UI.CustomText size='md' bold>{`$ ${item.price}`}</UI.CustomText>
                 <UI.CustomText size='sm' >Market price</UI.CustomText>
          </View>

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
               <UI.Button text='Continue' variant='coloured' onPress={()=>navigation.navigate("Confirm-Stock", {item, direction, amount})}/>
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

