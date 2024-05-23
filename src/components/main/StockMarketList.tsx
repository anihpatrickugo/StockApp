import React from 'react'
import { View, FlatList, Pressable } from 'react-native'
import * as UI from '../common/index';
import VerticalListLoadingSkeleton from '../LoadingSkeletons/VerticalListLoadingSkeleton';
import { useQuery } from '@apollo/client';
import { GET_ALL_STOCKS } from '../../graphql/queries/allstocks';
import StockItem from './StockItem';
import { darkGrayColor, primaryColor } from '../common/variables';



const StockMarketList = ({navigation}) => {
    const {data, loading, error} = useQuery(GET_ALL_STOCKS)
   

    
    
  return (
        <View style={{ width: '100%', flex: 1, alignItems: "center", marginTop: 16}}>
             <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between",}}>
                <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>Stock markets</UI.CustomText>
                <Pressable>
                   <UI.CustomText size='sm' bold style={{paddingBottom: 6}} onPress={()=>navigation.navigate("Stock-Market")}>
                    See all</UI.CustomText>
                </Pressable>
             </View>

             { loading && <VerticalListLoadingSkeleton itemsNo={4}/> }
             {(!loading && (!data?.allStocks || data?.allStocks.length == 0)) && <UI.CustomText size='md' bold color={darkGrayColor} >No available Stock</UI.CustomText>}
             { error && <UI.CustomText size='lg' >Error: {error.message}</UI.CustomText> }
             <FlatList
               overScrollMode='never'
               data={data?.allStocks}
               keyExtractor={(item, index) => index.toString()}
               style={{width: '100%', flex: 1}}
               renderItem={
                ({item, index}) => (
                    <StockItem item={item} delay={index*100} navigation={navigation}/>
                )
               }
               showsVerticalScrollIndicator={false}
             />
        </View>
  )
}

export default StockMarketList
