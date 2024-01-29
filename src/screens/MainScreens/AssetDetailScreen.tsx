import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity} from 'react-native'
import * as UI from '../../components/common'
import {grayColor, grayLightColor, primaryColor, success } from '../../components/common/variables';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import recentTransactions from '../../constants/recentTransactions';
import Chart from '../../components/main/Chart';



const AssetDetailScreen = ({navigation, route}) => {
    const [duration, setDuration] = React.useState("Day")
    const {item} = route.params

  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName='My assets'/>

      <ScrollView style={{width: "100%", height: 500}} showsVerticalScrollIndicator={false}> 
         
           <View style={{flexDirection: 'row', width: '100%',}}>
                <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                <View style={{marginLeft: 12}}>
                   <UI.CustomText size='sm' bold>{item.title}</UI.CustomText>
                   <UI.CustomText size='xs'>APPL</UI.CustomText>
                </View>
            </View>

           <View style={{marginVertical: 10}}>
                 <UI.CustomText size='md' bold>#243,000</UI.CustomText>
                 <UI.CustomText size='xs' color={success}>^  284%</UI.CustomText>
          </View>

          <View style={{flexDirection: "row", gap: 8}}>
            <UI.SmallButton size='small' text='Day' variant={duration === "Day" ?'coloured' : "light-gray"} onPress={()=>setDuration("Day")}/>
            <UI.SmallButton size="small" text='Week' variant={duration === "Week" ?'coloured' : "light-gray"} onPress={()=>setDuration("Week")}/>
            <UI.SmallButton size="small" text='Month' variant={duration === "Month" ?'coloured' : "light-gray"} onPress={()=>setDuration("Month")}/>
            <UI.SmallButton size="small" text='Year' variant={duration === "Year" ?'coloured' : "light-gray"} onPress={()=>setDuration("Year")}/>
          </View>

          <View>
            <Chart duration={duration}/>
          </View>

          <View style={{width: "100%", padding: 4, marginVertical: 8}}>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Position</UI.CustomText>
                <UI.CustomText size='sm'>35</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Open</UI.CustomText>
                <UI.CustomText size='sm'>60.6B</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Prev.close</UI.CustomText>
                <UI.CustomText size='sm'>56.90</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Mkt.cap</UI.CustomText>
                <UI.CustomText size='sm'>N25.606B</UI.CustomText>
            </View>

          </View>


          {/* buttons */}
          <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.SmallButton size="large" text='Sell' variant='light'/>
                <UI.SmallButton size="large" text='Buy' variant='coloured' onPress={()=>navigation.navigate("Buy-Asset", {item})}/>
                
            </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    backgroundColor: "#FFFFFF"
   },
})

export default AssetDetailScreen

