import React from 'react'
import { View, FlatList, Pressable } from 'react-native';
import * as UI from '../common' 
import { useQuery } from '@apollo/client';
import { GET_ALL_POSITIONS } from '../../graphql/queries/positions';
import AssetItem from './AssetItem';


const MyAssetsList = ({navigation}) => {

  const {data, loading, error} = useQuery(GET_ALL_POSITIONS)

  if (loading) return <UI.Loading/>

  if (error) return <UI.CustomText size='lg' >Error: {error.message}</UI.CustomText>

  if (!data.openPositions || data.openPositions.length == 0) return <UI.CustomText size='lg' >No Open positions</UI.CustomText>


  return (
    <View style={{ width: '100%', marginTop: 20,}}>
    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between",}}>
       <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>My assets</UI.CustomText>
       <Pressable onPress={()=>navigation.navigate("My-Assets")}>
          <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>See all</UI.CustomText>
       </Pressable>
    </View>

    <FlatList
      overScrollMode='never'
      data={data.openPositions}
      keyExtractor={(item, index) => index.toString()}
      style={{width: '100%',}}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={
       ({item}) => (
          <AssetItem item={item} navigation={navigation}/>
       )
      }
    />
</View>
  )
}

export default MyAssetsList
