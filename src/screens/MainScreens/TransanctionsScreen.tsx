import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, StatusBar, Dimensions } from 'react-native'
import * as UI from '../../components/common'
import TransactionList from '../../components/main/TransactionList'
import recentTransactions from '../../constants/recentTransactions'

const { width, height} = Dimensions.get("screen")

const TransanctionsScreen = () => {
  return (
    <SafeAreaView style={styles.containner}>

      {/* header */}
      <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
         <UI.CustomText size='md' bold>Transanctions</UI.CustomText>

         <UI.CategoryAccordion/>
      </View>

      {/* list */}
      <TransactionList recentTransactions={recentTransactions} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    height: height,
    width: width
},
})
export default TransanctionsScreen
