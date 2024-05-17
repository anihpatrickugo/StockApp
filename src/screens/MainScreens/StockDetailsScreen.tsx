import React, { useCallback } from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, ScrollView, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { success } from '../../components/common/variables';
import Chart from '../../components/main/Chart';

const { width, height} = Dimensions.get("screen")

const StockDetailScreen = ({navigation, route}) => {
    const [duration, setDuration] = React.useState("Day")
    const {item} = route.params


    const handlePosition = useCallback((direction: string)=>{
      navigation.navigate("New-Asset", {item, direction})
    }, [])

  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName={item.ticker}/>

      <ScrollView style={{width: "100%", marginBottom: 30,}} showsVerticalScrollIndicator={false}> 
         
           <View style={{flexDirection: 'row', width: '100%',}}>
                <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                <View style={{marginLeft: 12}}>
                   <UI.CustomText size='sm' bold>{item.name}</UI.CustomText>
                   <UI.CustomText size='xs'>{item.ticker}</UI.CustomText>
                </View>
            </View>

           <View style={{marginVertical: 10}}>
                 <UI.CustomText size='md' bold>{`$ ${item.price}`}</UI.CustomText>

          </View>

          <Image source={{uri: item.image}} style={{width: "100%", height: width *0.9}}/>

          <View style={{width: "100%", padding: 4, marginVertical: 8}}>
           
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Open</UI.CustomText>
                <UI.CustomText size='sm'>{`$ ${item.open}`}</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Prev.close</UI.CustomText>
                <UI.CustomText size='sm'>{`$ ${item.prevClose}`}</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Mkt.cap</UI.CustomText>
                <UI.CustomText size='sm'>{`$ ${item.marketCap}`}</UI.CustomText>
            </View>

          </View>


          {/* buttons */}
          <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.SmallButton size="large" text='Sell' variant='light' onPress={()=>handlePosition("Short")}/>
                <UI.SmallButton size="large" text='Buy' variant='coloured' onPress={()=>handlePosition("Long")}/>
                
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

export default StockDetailScreen

