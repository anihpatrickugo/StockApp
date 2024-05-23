import React from 'react'
import { View, FlatList, Pressable } from 'react-native';
import * as UI from '../common' 
import { useQuery } from '@apollo/client';
import { GET_ALL_POSITIONS } from '../../graphql/queries/positions';
import AssetItem from './AssetItem';
import AssetsListLoadingSkeleton from '../LoadingSkeletons/AssetsListLoadingSkeleton';
import { darkGrayColor, primaryColor } from '../common/variables';


const MyAssetsList = ({navigation}) => {

  const {data, loading, error} = useQuery(GET_ALL_POSITIONS)
  

  return (
    <View style={{ width: '100%', marginTop: 20, alignItems: "center"}}>
       <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between",}}>
       <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>My assets</UI.CustomText>
       <Pressable onPress={()=>navigation.navigate("My-Assets")}>
          <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>See all</UI.CustomText>
       </Pressable>
       </View>
         {loading && <AssetsListLoadingSkeleton itemsNo={3}/>}

        {(!loading  && (!data?.openPositions || data?.openPositions.length == 0)) && <UI.CustomText size='md' bold color={darkGrayColor} >No Open position</UI.CustomText>}
        {error && <UI.CustomText size='lg' >Error: {error.message}</UI.CustomText> }


       {data?.openPositions.length > 0 && (
         <FlatList
            overScrollMode='never'
            data={data?.openPositions}
            keyExtractor={(item, index) => index.toString()}
            style={{width: '100%', height: 90 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={
           ({item, index}) => (
                 <AssetItem item={item} delay={index*100} navigation={navigation}/>
              )
            }
         />

       )}
</View>
  )
}

export default MyAssetsList
