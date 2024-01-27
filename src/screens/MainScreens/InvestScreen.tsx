import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Pressable, TouchableOpacity, FlatList} from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as UI from '../../components/common/index';
import {grayColor, grayLightColor, primaryColor, success} from '../../components/common/variables'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import recentTransactions from '../../constants/recentTransactions';
import FundAlertModal from '../../components/main/FundAlert.Modal';


const InvestScreen = ({navigation}) => {
    const [showBalance, setShowBalance] = React.useState(true)
    
    const [modalVisible, setModalVisible] = React.useState(false);



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
                    <UI.CustomText size='xl' color='#F6F6FE' bold style={{marginVertical: 1}}>{!showBalance ? '₦780,000' : '*****'}</UI.CustomText>
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
        <View style={{ width: '100%', marginTop: 20,}}>
             <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between",}}>
                <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>My assets</UI.CustomText>
                <Pressable onPress={()=>navigation.navigate("My-Assets")}>
                   <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>See all</UI.CustomText>
                </Pressable>
             </View>

             <FlatList
               overScrollMode='never'
               data={recentTransactions}
               keyExtractor={(item, index) => index.toString()}
               style={{width: '100%',}}
               horizontal
               showsHorizontalScrollIndicator={false}
               renderItem={
                ({item}) => (
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Asset-Detail", {item})}
                    style={{width: 130, borderWidth: 1, borderColor: grayColor, borderRadius: 15, marginRight:8, padding: 8,}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                            <Image source={{uri: item.image}} height={30} width={30} style={{borderRadius: 20}}/>
                            <View style={{marginLeft: 6}}>
                               <UI.CustomText size='xs'>{item.title}</UI.CustomText>
                               <UI.CustomText size='xs'>APPL</UI.CustomText>
                            </View>
                        </View>

                        <UI.CustomText size='xs' bold>#243,000</UI.CustomText>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'baseline'}}>
                             <UI.CustomText size='xs' color={success}>^  284%</UI.CustomText>
                             <MaterialCommunityIcons name="greater-than" size={14} color={grayColor} />
                        </View>
                    </TouchableOpacity>
                )
               }
             />
        </View>

        {/* stock market */}
        <View style={{ width: '100%', marginTop: 25,}}>
             <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between",}}>
                <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>Stock markets</UI.CustomText>
                <Pressable>
                   <UI.CustomText size='sm' bold style={{paddingBottom: 6}} onPress={()=>navigation.navigate("Stock-Market")}>
                    See all</UI.CustomText>
                </Pressable>
             </View>

             <FlatList
               overScrollMode='never'
               data={recentTransactions}
               keyExtractor={(item, index) => index.toString()}
               style={{width: '100%', height: 290}}
               renderItem={
                ({item}) => (
                    <TouchableOpacity style={styles.transactionItem}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={{uri: item.image}} height={40} width={40} style={{borderRadius: 20}}/>
                            <View style={{marginLeft: 6}}>
                               <UI.CustomText size='sm'>{item.title}</UI.CustomText>
                               <UI.CustomText size='xs'>APPL</UI.CustomText>
                            </View>
                        </View>

                        <UI.CustomText size='sm' color={success}>^  284%</UI.CustomText>
                    </TouchableOpacity>
                )
               }
               showsVerticalScrollIndicator={false}
             />
        </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    containner: {
        paddingTop: StatusBar.currentHeight,
        padding: 14,
        alignItems: 'center',
        backgroundColor: "#FFFFFF"
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
   

    transactionItem: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: grayLightColor,
    
    }
})
export default InvestScreen
