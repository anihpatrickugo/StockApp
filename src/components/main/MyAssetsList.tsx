import React from 'react'
import { View, FlatList, Image, Pressable, TouchableOpacity } from 'react-native';
import recentTransactions from '../../constants/recentTransactions';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { grayColor, success } from '../common/variables';
import * as UI from '../common' 

const MyAssetsList = ({navigation}) => {
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
      data={recentTransactions}
      keyExtractor={(item, index) => index.toString()}
      style={{width: '100%',}}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={
       ({item}) => (
           <TouchableOpacity 
           style={{width: 130, borderWidth: 1, borderColor: grayColor, borderRadius: 15, marginRight:8, padding: 8,}}>
               <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                   <Image source={{uri: item.image}} height={30} width={30} style={{borderRadius: 20}}/>
                   <View style={{marginLeft: 6}}>
                      <UI.CustomText size='xs'>{item.title}</UI.CustomText>
                      <UI.CustomText size='xs'>APPL</UI.CustomText>
                   </View>
               </View>

               <UI.CustomText size='xs' bold>#243,000</UI.CustomText>
             

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'baseline'}}>
                <UI.CustomText size='xs' color={success}>^  284%</UI.CustomText>
                <MaterialCommunityIcons name="greater-than" size={14} color={grayColor} />
              </View>
           </TouchableOpacity>
       )
      }
    />
</View>
  )
}

export default MyAssetsList
