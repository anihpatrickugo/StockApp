import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Pressable, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as UI from '../../components/common/index';
import {grayColor, grayLightColor, primaryColor, success} from '../../components/common/variables'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import recentTransactions from '../../constants/recentTransactions';
import FundAlertModal from '../../components/main/FundAlert.Modal';
import StockMarketList from '../../components/main/StockMarketList';
import { useSelector } from 'react-redux';
import MyAssetsList from '../../components/main/MyAssetsList';

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
        <View style={styles.accountBalance}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <View>
                   <UI.CustomText size='sm' color='#F6F6FE'>Portfolio Balance</UI.CustomText>
                    <UI.CustomText size='xl' color='#F6F6FE' bold style={{marginVertical: 1}}>{!showBalance ? `$ ${user.balance}` : '*****'}</UI.CustomText>
                </View>

                {/* acoordion */}
                <UI.Accordion/> 
            </View>

            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>

                <View style={{flexDirection: 'row', alignContent: 'center', gap: 6}}>
                    <UI.CustomText size='sm' color='white' bold>+ ₦1500.00</UI.CustomText>
                    <UI.CustomText size='xs' color={success}>^ 248%</UI.CustomText>
                </View>

               <Pressable style={{alignSelf: 'flex-end'}} onPress={()=>setShowBalance(!showBalance)}>
                {showBalance ? 
                  (<Feather name="eye" size={24} color="#F6F6FE" />)
                : 
                (<Feather name="eye-off" size={24} color="#F6F6FE" />)}
               </Pressable>
            </View>
        </View>


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

    accountBalance: {
       width: '100%',
       backgroundColor: primaryColor,
       borderRadius: 16,
       marginVertical: 10,
       padding: 12
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
