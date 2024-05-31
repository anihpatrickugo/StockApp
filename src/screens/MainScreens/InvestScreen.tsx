import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Pressable, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as UI from '../../components/common/index';
import {primaryColor, success} from '../../components/common/variables'
import FundAlertModal from '../../components/main/FundAlert.Modal';
import StockMarketList from '../../components/main/StockMarketList';
import { useSelector } from 'react-redux';
import MyAssetsList from '../../components/main/MyAssetsList';
import AccountBalanceCard from '../../components/main/AccountBalanceCard';

const { width, height} = Dimensions.get("screen")


const InvestScreen = ({navigation}) => {
    const [showBalance, setShowBalance] = React.useState(true)
    
    const [modalVisible, setModalVisible] = React.useState(false);

    const user = useSelector((state) => state.auth.user);



  return (
    <SafeAreaView style={styles.containner}>
       
       {modalVisible && (<FundAlertModal modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation}/>)}

        {/* top bar header */}
        <View style={styles.topHeader}>
            <UI.CustomText size='lg' bold>Invest</UI.CustomText>
        </View>

        {/* account balance and currency */}
        <AccountBalanceCard balance={user?.balance}/>


        {/* My assets */}
        <MyAssetsList navigation={navigation}/>

        {/* stock market */}
        <StockMarketList navigation={navigation}/>

        {/* actions */}
        

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    containner: {
        paddingTop: StatusBar.currentHeight,
        padding: 14,
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        width: width,
        height: height
    },

    topHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    profileLink: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    actions: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 40
    },

    actionItems: {
        alignItems: "center",
    },
   
})
export default InvestScreen
