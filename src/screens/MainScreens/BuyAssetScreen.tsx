import React from 'react'
import { KeyboardAvoidingView, View, StyleSheet, StatusBar, Image, ScrollView} from 'react-native'
import * as UI from '../../components/common'
import { primaryColor } from '../../components/common/variables';



const BuyAssetScreen = ({navigation, route}) => {
    const {item} = route.params

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName='Buy stocks'/>

      <ScrollView style={{width: "100%", height: 500}} showsVerticalScrollIndicator={false}> 
          
        <View style={{flexDirection: "row", justifyContent: "space-between",alignItems:"flex-start", width: "100%"}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                <View style={{marginLeft: 12}}>
                   <UI.CustomText size='sm' bold>{item.title}</UI.CustomText>
                   <UI.CustomText size='xs'>APPL</UI.CustomText>
                </View>
            </View>

           <View>
                 <UI.CustomText size='md' bold>$54</UI.CustomText>
                 <UI.CustomText size='sm' >Market price</UI.CustomText>
          </View>
        </View>

        {/* form */}
        <View style={{marginTop: 40, }}>
            <View>
                 <UI.CustomText size='sm' style={{marginBottom: 8}}>Enter amount</UI.CustomText>
                 <UI.FormInput keyboardType='numeric' style={{ fontSize:24, marginBottom: 40, minHeight:70, borderColor: primaryColor, borderWidth: 1.5, borderRadius: 20}}/>
            </View>

            <View>
                 <UI.CustomText size='sm' style={{marginBottom: 8}}>Number of stocks</UI.CustomText>
                 <UI.FormInput keyboardType='numeric' style={{ fontSize:24, marginBottom: 40, minHeight:70, borderColor: primaryColor, borderWidth: 1.5, borderRadius: 20}}/>
            </View>
            
            <View style={{marginVertical: 16}}>
               <UI.Button text='Continue' variant='coloured' onPress={()=>navigation.navigate("Confirm-Buy", {item})}/>
            </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    backgroundColor: "#FFFFFF"
   },
})

export default  BuyAssetScreen

