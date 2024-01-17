import React from 'react'
import { Text, StyleSheet, StatusBar, SafeAreaView, View, Pressable, FlatList } from 'react-native'
import * as UI from '../../components/common'
import { AntDesign } from '@expo/vector-icons';
import notifications from '../../constants/notifications';
import NotificationIcon from '../../assets/icons/ColouredNotificationBell'
import { grayLightColor } from '../../components/common/variables';

const NotificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containner}>

      <Pressable  style={styles.backButton} onPress={()=>navigation.goBack()}>
        <AntDesign name="left" size={24} color="black" />
           <UI.CustomText size='md' style={{marginLeft: 10, fontWeight: '600'}}>
             Notifications
            </UI.CustomText>
        </Pressable>

        <FlatList
               data={notifications}
               keyExtractor={(item, index) => index.toString()}
               showsVerticalScrollIndicator={false}
               style={{width: '100%'}}
               renderItem={
                ({item}) => (
                    <Pressable key={item.id} style={styles.notificationItem}>
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10, width: '100%'}}>
                               <NotificationIcon width={35} height={35}/>
                               <UI.CustomText size='md' style={{marginLeft: 8}}>{item.title}</UI.CustomText> 
                        </View>
                        <UI.CustomText size='sm' style={{}}>{item.description}</UI.CustomText> 
                   </Pressable>)}
          />

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

    backButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    notificationItem: {
        borderBottomWidth: 1,
        borderBottomColor: grayLightColor,
        paddingVertical: 10
    }
})

export default NotificationScreen
