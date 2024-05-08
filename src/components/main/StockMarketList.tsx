import React from 'react'
import { View, FlatList, Image, TouchableOpacity, Pressable, StyleSheet } from 'react-native'
import * as UI from '../common/index';
import { grayLightColor, success } from '../common/variables';
import recentTransactions from '../../constants/recentTransactions';
import { useQuery } from '@apollo/client';
import { GET_ALL_STOCKS } from '../../graphql/queries/allstocks';



const StockMarketList = ({navigation}) => {
    const {data, loading, error} = useQuery(GET_ALL_STOCKS)
    // console.log(data)

  if (loading) return <UI.Loading/>

  if (error) return <UI.CustomText size='lg' >Error: {error.message}</UI.CustomText>
  return (
    <View style={{ width: '100%', marginTop: 25,}}>
             <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between",}}>
                <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>Stock markets</UI.CustomText>
                <Pressable>
                   <UI.CustomText size='sm' bold style={{paddingBottom: 6}} onPress={()=>navigation.navigate("Stock-Market")}>
                    See all</UI.CustomText>
                </Pressable>
             </View>

             <FlatList
               overScrollMode='never'
               data={data.allStocks}
               keyExtractor={(item, index) => index.toString()}
               style={{width: '100%', height: 290}}
               renderItem={
                ({item}) => (
                    <TouchableOpacity style={styles.transactionItem}  onPress={()=>navigation.navigate("Asset-Detail", {item})}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                            <View style={{marginLeft: 6}}>
                               <UI.CustomText size='sm'>{item.name}</UI.CustomText>
                               <UI.CustomText size='xs'>APPL</UI.CustomText>
                            </View>
                        </View>

                        <UI.CustomText size='sm' color={success}>^  284%</UI.CustomText>
                    </TouchableOpacity>
                )
               }
               showsVerticalScrollIndicator={false}
             />
        </View>
  )
}

const styles = StyleSheet.create({
    transactionItem: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: grayLightColor,
    
    }
})

export default StockMarketList
