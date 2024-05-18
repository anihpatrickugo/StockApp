import React from 'react'
import { View, FlatList, Pressable } from 'react-native'
import * as UI from '../common/index';
import VerticalListLoadingSkeleton from '../LoadingSkeletons/VerticalListLoadingSkeleton';
import { useQuery } from '@apollo/client';
import { GET_ALL_STOCKS } from '../../graphql/queries/allstocks';
import StockItem from './StockItem';



const StockMarketList = ({navigation}) => {
    const {data, loading, error} = useQuery(GET_ALL_STOCKS)
    // console.log(data)

  if (loading) return <VerticalListLoadingSkeleton itemsNo={4} height={290}/>

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
                    <StockItem item={item} navigation={navigation}/>
                )
               }
               showsVerticalScrollIndicator={false}
             />
        </View>
  )
}

export default StockMarketList
