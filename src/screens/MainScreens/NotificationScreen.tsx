import React from 'react'
import { StyleSheet, StatusBar, SafeAreaView, View, Pressable, FlatList } from 'react-native'
import * as UI from '../../components/common'
import notifications from '../../constants/notifications';
import NotificationIcon from '../../assets/icons/ColouredNotificationBell'
import { grayLightColor } from '../../components/common/variables';

const NotificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containner}>
        <UI.BackButton navigation={navigation} screenName='Notifications'/>
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

    notificationItem: {
        borderBottomWidth: 1,
        borderBottomColor: grayLightColor,
        paddingVertical: 10
    }
})

export default NotificationScreen
