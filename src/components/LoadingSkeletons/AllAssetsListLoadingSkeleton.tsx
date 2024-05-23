import React from 'react'
import { FlatList, View, StyleSheet, Dimensions } from 'react-native'
import { grayLightColor, primaryColor } from '../common/variables'
import { Skeleton } from  'moti/skeleton'


const AllAssetsListLoadingSkeleton = () => {
   
    const data =new Array(4); 

    const skeletonCommonProps = {
        colorMode: "light",
        colors: [primaryColor, grayLightColor],
    } 
    
  return (

             <FlatList
               overScrollMode='never'
               data={data}
               keyExtractor={(_, index) => index.toString()}
               showsVerticalScrollIndicator={false}
               style={{ width: '100%',}}
               renderItem={
                () => (
                
              <Skeleton.Group show>
                   <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                       <View style={{width: 150, marginBottom: 20,  marginRight: 20, gap: 20}}>
                       <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                            <Skeleton height={30} width={30} radius="round" {...skeletonCommonProps}/>

                        <View style={{marginLeft: 6, gap: 10}}>
                               <Skeleton height={4} width={60} {...skeletonCommonProps}/>
                               <Skeleton height={4} width={30} {...skeletonCommonProps}/>
                        </View>
                    </View>

                    <Skeleton height={8} width={30} {...skeletonCommonProps}/>
      

                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'baseline'}}>
                       <Skeleton height={8} width={30} {...skeletonCommonProps}/>
                       <Skeleton height={10} width={10} {...skeletonCommonProps}/>
                  </View>
                       </View>



                       <View style={{width: 150, marginBottom: 20,  marginRight: 20, gap: 20}}>
                       <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                            <Skeleton height={30} width={30} radius="round" {...skeletonCommonProps}/>

                        <View style={{marginLeft: 6, gap: 10}}>
                               <Skeleton height={4} width={60} {...skeletonCommonProps}/>
                               <Skeleton height={4} width={30} {...skeletonCommonProps}/>
                        </View>
                    </View>

                    <Skeleton height={8} width={30} {...skeletonCommonProps}/>
      

                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'baseline'}}>
                       <Skeleton height={8} width={30} {...skeletonCommonProps}/>
                       <Skeleton height={10} width={10} {...skeletonCommonProps}/>
                  </View>
                       </View>
                 </View>
              </Skeleton.Group>
                )
               }
             />
        
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
        flex: 1,
    
    }
})

export default AllAssetsListLoadingSkeleton
