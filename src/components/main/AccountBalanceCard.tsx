import React from 'react'
import { Pressable, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as UI from '../common/index'
import { primaryColor } from '../common/variables';

const AccountBalanceCard = ({balance}) => {
    const [showBalance, setShowBalance] = React.useState(true)

  return (
    <View style={styles.accountBalance}>
    <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
        <View >
           <UI.CustomText size='sm' color='#F6F6FE'>Account Balance</UI.CustomText>
            <UI.CustomText size='xl' color='#F6F6FE' bold style={{marginVertical: 1}}>{!showBalance ? `$ ${balance || 0}` : '*****'}</UI.CustomText>
        </View>

        {/* acoordion */}
        <UI.Accordion/> 
    </View>

    <Pressable style={{alignSelf: 'flex-end'}} onPress={()=>setShowBalance(!showBalance)}>
        {showBalance ? 
          (<Feather name="eye" size={24} color="#F6F6FE" />)
        : 
        (<Feather name="eye-off" size={24} color="#F6F6FE" />)}
    </Pressable>
</View>
  )
}

const styles = StyleSheet.create({
    accountBalance: {
        width: '100%',
        backgroundColor: primaryColor,
        borderRadius: 16,
        marginVertical: 10,
        padding: 12
     },
})

export default AccountBalanceCard
