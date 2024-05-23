import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet, StatusBar, Dimensions } from 'react-native'
import * as UI from '../../components/common'
import TransactionList from '../../components/main/TransactionList'
import { GET_TRANSACTIONS } from '../../graphql/queries/transanctions'
import { useQuery } from '@apollo/client';
import { darkGrayColor, primaryColor } from '../../components/common/variables'
import VerticalListLoadingSkeleton from '../../components/LoadingSkeletons/VerticalListLoadingSkeleton'

const { width, height} = Dimensions.get("screen")

const TransanctionsScreen = () => {
  const [category, setCategory ] = useState<"All" | "Deposit"| "Withdrawal">("All")
  const {data, loading, error} = useQuery(GET_TRANSACTIONS)


  return (
    <SafeAreaView style={styles.containner}>
      

      {/* header */}
      <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
         <UI.CustomText size='md' bold>Approved Transanctions</UI.CustomText>

         <UI.CategoryAccordion category={category} setCategory={setCategory}/>
      </View>

      {/* list */}
      <View style={{width: "100%", flex: 1, position: "absolute", zIndex: -20,  top: 70, right: 0, left: 0, bottom: 0, justifyContent: "center"}}>
        
            {loading && <VerticalListLoadingSkeleton itemsNo={8}/>}

            {data?.recentTransactions.length === 0 && <UI.CustomText 
                size='md' 
                bold
                color={darkGrayColor}
               style={{textAlign: "center", marginTop: 250}}>No Recent Transaction</UI.CustomText>
            }

            <TransactionList recentTransactions={data?.recentTransactions.filter(item => category === "All" ? true : item.name === category)} />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    height: height,
    width: width,
    flex: 1
},
})
export default TransanctionsScreen
