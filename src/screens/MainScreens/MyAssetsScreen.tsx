import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native'
import * as UI from '../../components/common'
import AssetItem from '../../components/main/AssetItem';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSITIONS } from '../../graphql/queries/positions';
import { primaryColor } from '../../components/common/variables';
const { width, height} = Dimensions.get("screen")


const MyAssetsScreen = ({navigation}) => {
  const {data, loading, error} = useQuery(GET_ALL_POSITIONS)

  return (
    <SafeAreaView style={styles.containner}>
      <UI.BackButton navigation={navigation} screenName='My assets'/>

      {/* assets list */}
      
      <ScrollView contentContainerStyle={{width: "100%", justifyContent: "space-around", flexDirection: "row",  flexWrap: "wrap", gap: 20}} showsVerticalScrollIndicator={false}>
        {data.openPositions.map(item =>(
            <AssetItem item={item} navigation={navigation} key={item.id}/>
        ))
                    
                }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    height: height,
    width: width
   },
})

export default MyAssetsScreen

