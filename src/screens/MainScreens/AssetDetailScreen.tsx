import React, { useCallback } from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, ScrollView, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { success } from '../../components/common/variables';
import Chart from '../../components/main/Chart';

const { width, height} = Dimensions.get("screen")

const AssetDetailScreen = ({navigation, route}) => {
    const [duration, setDuration] = React.useState("Day")
    const {item} = route.params


    const handlePosition = useCallback((direction: string)=>{
      navigation.navigate("New-Asset", {item, direction})
    }, [])


    const date = new Date(item.date).toDateString()

  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName={item.ticker}/>

      <ScrollView style={{width: "100%", marginBottom: 30,}} showsVerticalScrollIndicator={false}> 
         
           <View style={{flexDirection: 'row', width: '100%',}}>
                <Image source={{uri: item.stock.image}} height={40} width={40} style={{borderRadius: 20}}/>
                <View style={{marginLeft: 12}}>
                   <UI.CustomText size='sm' bold>{item.stock.name}</UI.CustomText>
                   <UI.CustomText size='xs'>{item.stock.ticker}</UI.CustomText>
                </View>
            </View>

           <View style={{marginVertical: 10}}>
                 <UI.CustomText size='md' bold>{`$${item.volume * item.stock.price}`}</UI.CustomText>
                 <UI.CustomText size='xs' color={item.currentPercent > 0 ? success: 'red' }>{`${item.currentPercent > 0 ? '▲': '▼' } ${item.currentPercent}%`}</UI.CustomText>
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
                <UI.CustomText size='sm'>Open</UI.CustomText>
                <UI.CustomText size='sm'>{`$ ${item.price}`}</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Prev.price</UI.CustomText>
                <UI.CustomText size='sm'>{`$ ${item.stock.prevClose}`}</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Mkt.cap</UI.CustomText>
                <UI.CustomText size='sm'>{`$ ${item.stock.marketCap}`}</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Date</UI.CustomText>
                <UI.CustomText size='sm'>{date}</UI.CustomText>
            </View>

          </View>


        
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    backgroundColor: "#FFFFFF",
    width: width,
    height: height,
    
   },
})

export default AssetDetailScreen

