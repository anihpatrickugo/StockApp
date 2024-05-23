import React from 'react'
import { FlatList, View, StyleSheet, Dimensions } from 'react-native'
import { grayLightColor, primaryColor } from '../common/variables'
import { Skeleton } from  'moti/skeleton'


const VerticalListLoadingSkeleton = ({itemsNo}) => {
   
    const data =new Array(itemsNo); 

    const skeletonCommonProps = {
        colorMode: "light",
        colors: [primaryColor, grayLightColor],
    } 
    
  return (
    
    <FlatList
    overScrollMode='never'
    data={data}
    keyExtractor={(_, index) => index.toString()}
    style={{height: 400, width: '100%'}}
    renderItem={
     () => (
     
   <Skeleton.Group show>
      <View style={styles.transactionItem} >
       <View style={{flexDirection: 'row', alignItems: 'center'}}>

           <Skeleton height={40} width={40} radius='round' {...skeletonCommonProps}/>
           
           <View style={{marginLeft: 6, gap: 16}}>
              <Skeleton height={8} width={200} radius='round' {...skeletonCommonProps} />
              
              <Skeleton height={8} width={100} radius='round' {...skeletonCommonProps} />
     
           </View>
       </View>

       <Skeleton height={12} width={40} radius='round' {...skeletonCommonProps} />

    </View>
   </Skeleton.Group>
     )
    }
    showsVerticalScrollIndicator={false}
  />
  )
}


const styles = StyleSheet.create({
    transactionItem: {
        width: "100%",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: primaryColor
    }
})

export default VerticalListLoadingSkeleton
