import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet  } from 'react-native'
import * as UI from '../common/index';
import { grayLightColor } from '../common/variables';
import Animated, {SlideInLeft} from 'react-native-reanimated';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const StockItem = ({item, delay, navigation}) => {
  return (
                  <AnimatedTouchableOpacity entering={SlideInLeft.delay(delay)} style={styles.transactionItem}  onPress={()=>navigation.navigate("Stock-Detail", {item})}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Animated.Image sharedTransitionTag={`Stock-Image-${item.id}`} source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                            <View style={{marginLeft: 6}}>
                               <UI.CustomText size='sm'>{item.name}</UI.CustomText>
                               <UI.CustomText size='xs'>{item.ticker}</UI.CustomText>
                            </View>
                        </View>

                        <UI.CustomText size='sm' bold>{`$${item.price}`}</UI.CustomText>
                    </AnimatedTouchableOpacity>
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
