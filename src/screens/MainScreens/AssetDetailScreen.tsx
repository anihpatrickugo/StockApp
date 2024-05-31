import React, { useCallback } from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, ScrollView, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import { danger, success } from '../../components/common/variables';
import Chart from '../../components/main/Chart';
import Animated, { LightSpeedInLeft, StretchInX}  from 'react-native-reanimated'
import { useMutation } from '@apollo/client';
import { CLOSE_POSITION } from '../../graphql/mutations/TransactionsMutations';
import Toast from 'react-native-root-toast';


const { width, height} = Dimensions.get("screen")

const AssetDetailScreen = ({navigation, route}) => {

    const [duration, setDuration] = React.useState("Day")
    const {item} = route.params
    
    const [closePosition, {loading, error}] = useMutation(CLOSE_POSITION)

    const handleClosePosition = useCallback(()=>{
        closePosition({variables: {id: parseInt(item.id)},
        onCompleted: () => {
          navigation.replace("Invest-Index")
          
        Toast.show(`${item.stock.ticker} position has been closed successfully!`, {
          duration: Toast.durations.LONG,
          visible: true,
          position: 60,
          shadow: true,
          animation: true,
          hideOnPress: true,
          backgroundColor: success,
        });
        }})
    }, [])


    const date = new Date(item.date).toDateString()

  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName={item.ticker}/>

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


      <ScrollView style={{width: "100%", marginBottom: 30,}} showsVerticalScrollIndicator={false}> 
         
           <Animated.View entering={LightSpeedInLeft.duration(1000)} style={{flexDirection: 'row', width: '100%',}}>
                <Image source={{uri: item.stock.image}} height={40} width={40} style={{borderRadius: 20}}/>
                <View style={{marginLeft: 12}}>
                   <UI.CustomText size='sm' bold>{item.stock.name}</UI.CustomText>
                   <UI.CustomText size='xs'>{item.stock.ticker}</UI.CustomText>
                </View>
            </Animated.View>

           <Animated.View entering={LightSpeedInLeft.duration(1000).delay(500)} style={{marginVertical: 10}}>
                 <UI.CustomText size='md' bold>{`$${item.volume * item.stock.price}`}</UI.CustomText>
                 <UI.CustomText size='xs' color={item.currentPercent > 0 ? success: 'red' }>{`${item.currentPercent > 0 ? '▲': '▼' } ${item.currentPercent}%`}</UI.CustomText>
          </Animated.View>

          {/* <View style={{flexDirection: "row", gap: 8}}>
            <UI.SmallButton size='small' text='Day' variant={duration === "Day" ?'coloured' : "light-gray"} onPress={()=>setDuration("Day")}/>
            <UI.SmallButton size="small" text='Week' variant={duration === "Week" ?'coloured' : "light-gray"} onPress={()=>setDuration("Week")}/>
            <UI.SmallButton size="small" text='Month' variant={duration === "Month" ?'coloured' : "light-gray"} onPress={()=>setDuration("Month")}/>
            <UI.SmallButton size="small" text='Year' variant={duration === "Year" ?'coloured' : "light-gray"} onPress={()=>setDuration("Year")}/>
          </View>

          <View>
            <Chart duration={duration}/>
          </View> */}

          <Animated.View entering={StretchInX.delay(500).damping(3000)} style={{width: "100%", padding: 4, marginVertical: 8}}>
           
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Position</UI.CustomText>
                <UI.CustomText size='sm'>{item.direction}</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Open</UI.CustomText>
                <UI.CustomText size='sm'>{`$ ${item.price}`}</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Prev.price</UI.CustomText>
                <UI.CustomText size='sm'>{`$ ${item.stock.prevClose}`}</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Volume</UI.CustomText>
                <UI.CustomText size='sm'>{item.volume}</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Mkt.cap</UI.CustomText>
                <UI.CustomText size='sm'>{`$ ${item.stock.marketCap}`}</UI.CustomText>
            </View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 12}}>
                <UI.CustomText size='sm'>Date</UI.CustomText>
                <UI.CustomText size='sm'>{date}</UI.CustomText>
            </View>

          </Animated.View>

          {/* close Button */}
          <UI.Button 
             text='Close Position' 
             variant='coloured' 
             style={{ marginVertical: 20}}
             onPress={handleClosePosition}/>


        
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

