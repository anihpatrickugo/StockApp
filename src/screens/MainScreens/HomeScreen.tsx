import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import * as UI from '../../components/common/index';
import {darkGrayColor, grayColor, primaryColor} from '../../components/common/variables'
import Fund from '../../assets/icons/Fund';
import Withdraw from '../../assets/icons/Withdraw';
import Invest from '../../assets/icons/Invest';
import VerticalListLoadingSkeleton from '../../components/LoadingSkeletons/VerticalListLoadingSkeleton';
import { FontAwesome5 } from '@expo/vector-icons';
import TransactionList from '../../components/main/TransactionList';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_TRANSACTIONS } from '../../graphql/queries/transanctions';
import AccountBalanceCard from '../../components/main/AccountBalanceCard';



const { width, height} = Dimensions.get("screen")


const HomeScreen = ({navigation}) => {
    
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

            {/* <Pressable onPress={()=>navigation.navigate('Notifications')}>
                <BellOutline height={25} width={25}/>
            </Pressable> */}
        </View>

        {/* account balance and currency */}
        <AccountBalanceCard balance={user?.balance}/>
        

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

            <TouchableOpacity style={styles.actionItems} onPress={()=>navigation.navigate("Invest")}>
                <Invest height={65} width={65}/>
                <UI.CustomText size='sm'>Invest</UI.CustomText>
            </TouchableOpacity>

        </View>


        {/* recent transanctions */}
        <View style={{ width: '100%', marginTop: 45, flex: 1, justifyContent: "center"}}>
            <UI.CustomText size='sm' bold style={{paddingBottom: 6}}>Recent Actions</UI.CustomText>

            {loading && <VerticalListLoadingSkeleton itemsNo={4} />}
            

            {(!loading && data?.recentTransactions.length) === 0 && <UI.CustomText 
                size='md' 
                bold
                color={darkGrayColor}
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
        height: height,
        flex: 1
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
