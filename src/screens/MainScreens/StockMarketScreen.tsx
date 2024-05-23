import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, FlatList, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import {danger, grayLightColor } from '../../components/common/variables';
import { useQuery } from '@apollo/client';
import { GET_ALL_STOCKS } from '../../graphql/queries/allstocks';
import Toast from 'react-native-root-toast';
import StockItem from '../../components/main/StockItem';
import VerticalListLoadingSkeleton from '../../components/LoadingSkeletons/VerticalListLoadingSkeleton';

const { width, height} = Dimensions.get("screen")

const StockMarketScreen = ({navigation}) => {
    const {data, loading, error} = useQuery(GET_ALL_STOCKS)
    

  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName='Stock market'/>

          {loading && <VerticalListLoadingSkeleton itemsNo={8}/>}

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


         {data.allStocks.length == 0 && <UI.CustomText size='lg' >No stocks available</UI.CustomText>}

      {/* stock list */}
      <FlatList
               overScrollMode='never'
               data={data.allStocks}
               keyExtractor={(item, index) => index.toString()}
               style={{width: '100%', height: 290}}
               renderItem={
                ({item, index}) => (
                    <StockItem item={item} delay={index*100} navigation={navigation}/>
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

