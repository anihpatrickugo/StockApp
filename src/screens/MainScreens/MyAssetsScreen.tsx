import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import {grayColor, success } from '../../components/common/variables';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import recentTransactions from '../../constants/recentTransactions';

const { width, height} = Dimensions.get("screen")

const MyAssetsScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName='My assets'/>

      {/* assets list */}
      
      <ScrollView contentContainerStyle={{width: "100%", justifyContent: "space-between", flexDirection: "row",  flexWrap: "wrap"}} showsVerticalScrollIndicator={false}>
        {recentTransactions.map(item=>(
            <TouchableOpacity 
            key={item.id} 
            style={{width: 150, borderWidth: 1, borderColor: grayColor, borderRadius: 15, marginBottom:16, padding: 8,}}
            onPress={()=>navigation.navigate("Asset-Detail", {item})}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 28}}>
                <Image source={{uri: item.image}} height={30} width={30} style={{borderRadius: 20}}/>
                <View style={{marginLeft: 6}}>
                   <UI.CustomText size='xs'>{item.title}</UI.CustomText>
                   <UI.CustomText size='xs'>APPL</UI.CustomText>
                </View>
            </View>

            <UI.CustomText size='xs' bold>#243,000</UI.CustomText>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'baseline'}}>
                <UI.CustomText size='xs' color={success}>^  284%</UI.CustomText>
                <MaterialCommunityIcons name="greater-than" size={14} color={grayColor} />
            </View>
        </TouchableOpacity>
        ))
                    
                }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    height: height,
    width: width
   },
})

export default MyAssetsScreen

