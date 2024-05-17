import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet  } from 'react-native'
import * as UI from '../common/index';
import { grayLightColor } from '../common/variables';

const StockItem = ({item, navigation}) => {
  return (
    <TouchableOpacity style={styles.transactionItem}  onPress={()=>navigation.navigate("Stock-Detail", {item})}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                            <View style={{marginLeft: 6}}>
                               <UI.CustomText size='sm'>{item.name}</UI.CustomText>
                               <UI.CustomText size='xs'>APPL</UI.CustomText>
                            </View>
                        </View>

                        <UI.CustomText size='sm' bold>{`$${item.price}`}</UI.CustomText>
                    </TouchableOpacity>
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

export default StockItem
