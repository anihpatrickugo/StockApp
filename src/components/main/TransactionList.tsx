import React, {Dispatch, SetStateAction } from 'react'
import { FlatList } from 'react-native'

import TransactionItem from './TransactionItem';


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
               style={{width: '100%', flex: 1}}
                showsVerticalScrollIndicator={false}
               renderItem={
                ({item, index}) => (
                    <TransactionItem item={item} index={index}  modalVisible={modalVisible} />
               )
               }
               
             />
  )
}

export default TransactionList
