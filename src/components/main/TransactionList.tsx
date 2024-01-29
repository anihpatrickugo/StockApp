import React, {Dispatch, SetStateAction } from 'react'
import { FlatList, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import * as UI from '../../components/common/index';
import { grayLightColor } from '../common/variables';

interface Props {
    modalVisible? : boolean,
    setModalVisible? : Dispatch<SetStateAction<boolean>>,
    recentTransactions: any
}

const TransactionList: React.FC<Props> = ({modalVisible, recentTransactions}) => {
  return (
    <FlatList
               overScrollMode='never'
               data={recentTransactions}
               keyExtractor={(item, index) => index.toString()}
               style={{width: '100%', height: 300}}
               renderItem={
                ({item}) => (
                    <TouchableOpacity style={[styles.transactionItem, { borderBottomColor: modalVisible ? "gray" : grayLightColor}]}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                            <View style={{marginLeft: 6}}>
                               <UI.CustomText size='sm'>{item.title}</UI.CustomText>
                               <UI.CustomText size='xs'>Oct 03, 08:52</UI.CustomText>
                            </View>
                        </View>

                        <UI.CustomText size='sm' bold>- $1500.0</UI.CustomText>
                    </TouchableOpacity>
                )
               }
               showsVerticalScrollIndicator={false}
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
    
    }
})

export default TransactionList
