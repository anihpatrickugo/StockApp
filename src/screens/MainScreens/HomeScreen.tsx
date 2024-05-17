import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Pressable, TouchableOpacity, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as UI from '../../components/common/index';
import {primaryColor} from '../../components/common/variables'
import Fund from '../../assets/icons/Fund';
import Withdraw from '../../assets/icons/Withdraw';
import Invest from '../../assets/icons/Invest';
import BellOutline from '../../assets/icons/BellOutline';
import recentTransactions from '../../constants/recentTransactions';
import { FontAwesome5 } from '@expo/vector-icons';
import TransactionList from '../../components/main/TransactionList';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_TRANSACTIONS } from '../../graphql/queries/transanctions';



const { width, height} = Dimensions.get("screen")


const HomeScreen = ({navigation}) => {
    const [showBalance, setShowBalance] = React.useState(true)
    
    const [modalVisible, setModalVisible] = React.useState(false);

    const user = useSelector((state) => state.auth.user)

    const {data, loading} = useQuery(GET_TRANSACTIONS)



  return (
    <SafeAreaView style={[styles.containner, {backgroundColor: modalVisible ? "gray" : "#FFFFFF"}]}>
       
       {/* {modalVisible && (<FundAlertModal modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation}/>)} */}

       

        {/* top bar header */}
        <View style={styles.topHeader}>
            <View style={styles.profileLink}>
                {user?.photo ? (
                    
                  <Image height={30} width={30} style={{borderRadius: 100}} source={{uri: user.photo || null}}/>
                ) : (
                    <FontAwesome5 name="user-alt" size={24} color={primaryColor} />

                )}
               <UI.CustomText size='md' bold style={{marginLeft: 10}}>HI {user?.firstName.toUpperCase() || null}</UI.CustomText>
            </View>

            <Pressable onPress={()=>navigation.navigate('Notifications')}>
                <BellOutline height={25} width={25}/>
            </Pressable>
        </View>

        {/* account balance and currency */}
        <View style={styles.accountBalance}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <View >
                   <UI.CustomText size='sm' color='#F6F6FE'>Account Balance</UI.CustomText>
                    <UI.CustomText size='xl' color='#F6F6FE' bold style={{marginVertical: 1}}>{!showBalance ? `$ ${user?.balance}` : '*****'}</UI.CustomText>
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

        {/* actions */}
        <View style={styles.actions}>
            <TouchableOpacity style={styles.actionItems} onPress={()=>navigation.navigate("USDT-Transfer-Fund")}>
                <Fund height={65} width={65}/>
                <UI.CustomText size='sm'>Fund</UI.CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionItems} onPress={()=>navigation.navigate("Withdrawal")}>
                <Withdraw height={65} width={65}/>
                <UI.CustomText size='sm'>Withdraw</UI.CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionItems} onPress={()=>navigation.navigate("Stock-Market")}>
                <Invest height={65} width={65}/>
                <UI.CustomText size='sm'>Invest</UI.CustomText>
            </TouchableOpacity>

        </View>


        {/* recent transanctions */}
        <View style={{ width: '100%', marginTop: 45,}}>
            <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>Recent Actions</UI.CustomText>

            {loading && <UI.CustomText 
                size='md' 
                bold  color={primaryColor}
               style={{textAlign: "center", marginVertical: 60}}>Getting Recent Transactions...</UI.CustomText>
            }

            {data?.recentTransactions.length === 0 && <UI.CustomText 
                size='md' 
                bold
               style={{textAlign: "center", marginVertical: 60}}>No Recent Transaction</UI.CustomText>
            }
            
            
            <TransactionList
            modalVisible={modalVisible}
            recentTransactions={data?.recentTransactions}
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
        alignItems: 'center',
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
export default HomeScreen
