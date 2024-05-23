import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { grayColor, success } from '../common/variables';
import * as UI from '../common' 
import Animated, {StretchInX} from 'react-native-reanimated';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)


const AssetItem = ({item, delay, navigation}) => {
  return (
  <AnimatedTouchableOpacity 
    entering={StretchInX.delay(delay)}
    onPress={()=>navigation.navigate("Asset-Detail", {item})}
    style={{width: 130, borderWidth: 1, borderColor: grayColor, borderRadius: 15, marginRight:8, padding: 8,}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
            <Image source={{uri: item.stock.image}} height={30} width={30} style={{borderRadius: 20}}/>
            <View style={{marginLeft: 6}}>
               <UI.CustomText size='xs'>{item.stock.name}</UI.CustomText>
               <UI.CustomText size='xs'>{item.stock.ticker}</UI.CustomText>
            </View>
        </View>

        <UI.CustomText size='xs' bold>{`$${item.volume * item.stock.price}`}</UI.CustomText>
      

       <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'baseline'}}>
         <UI.CustomText size='xs' color={item.currentPercent > 0 ? success: 'red' }>{`${item.currentPercent > 0 ? '▲': '▼' } ${item.currentPercent}%`}</UI.CustomText>
         <MaterialCommunityIcons name="greater-than" size={14} color={grayColor} />
       </View>
    </AnimatedTouchableOpacity>
  )
}

export default AssetItem
