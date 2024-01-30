import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import {grayLightColor, success } from '../../components/common/variables';
import recentTransactions from '../../constants/recentTransactions';

const { width, height} = Dimensions.get("screen")

const StockMarketScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName='Stock market'/>

      {/* stock list */}
      <FlatList
               overScrollMode='never'
               data={recentTransactions}
               keyExtractor={(item, index) => index.toString()}
               contentContainerStyle={{width: "100%", minHeight: 500}}
               renderItem={
                ({item}) => (
                    <TouchableOpacity style={styles.stockItem}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                            <View style={{marginLeft: 6}}>
                               <UI.CustomText size='sm'>{item.title}</UI.CustomText>
                               <UI.CustomText size='xs'>APPL</UI.CustomText>
                            </View>
                        </View>

                        <UI.CustomText size='sm' color={success}>^  284%</UI.CustomText>
                    </TouchableOpacity>
                )
               }
               showsVerticalScrollIndicator={false}
             />
      
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    width: width,
    height: height
   },

   stockItem: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: grayLightColor,

}
})

export default StockMarketScreen

