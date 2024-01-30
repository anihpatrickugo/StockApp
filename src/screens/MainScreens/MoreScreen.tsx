import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import * as UI from '../../components/common'
import { grayColor, primaryColor, secondaryColor } from '../../components/common/variables'
import AccountIcon from '../../assets/icons/Account'
import CustomerCareIcon from '../../assets/icons/CustomerCare'
import { AntDesign } from '@expo/vector-icons';


const MoreScreen = () => {
  return (
    <SafeAreaView style={styles.containner}>

      {/* header */}
      <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
         <UI.CustomText size='md' bold>More</UI.CustomText>
      </View>

      {/* More links list*/}
      <ScrollView style={styles.moreScrollList} showsVerticalScrollIndicator={false}>

        {/* link item */}
        <TouchableOpacity style={styles.listItem}>

          <AccountIcon width={50} height={50} color="#E3E3E3" />

          <View style={{flex: 1, paddingHorizontal: 8}}>
            <UI.CustomText size='sm' bold>Account settings</UI.CustomText>
            <UI.CustomText size='xs'>Personalize your account for a tailored investing environment</UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />

        </TouchableOpacity>

        {/* link item */}
        <TouchableOpacity style={styles.listItem}>

          <AccountIcon width={50} height={50} color={secondaryColor}/>

          <View style={{flex: 1, paddingHorizontal: 8}}>
            <UI.CustomText size='sm' bold>Security Settings</UI.CustomText>
            <UI.CustomText size='xs'>Ensure a worry-free investing experience with advanced security settings</UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />

        </TouchableOpacity>

        {/* link item */}
        <TouchableOpacity style={styles.listItem}>

          <CustomerCareIcon width={50} height={50}/>

          <View style={{flex: 1, paddingHorizontal: 8}}>
            <UI.CustomText size='sm' bold>Customer Support</UI.CustomText>
            <UI.CustomText size='xs'>Get prompt assistance and solutions from our dedicated support team.</UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />

        </TouchableOpacity>

        {/* link item */}
        <TouchableOpacity style={styles.listItem}>

          <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png"}} width={48} height={48}/>

          <View style={{flex: 1, paddingHorizontal: 8}}>
            <UI.CustomText size='sm' bold>Referral Program</UI.CustomText>
            <UI.CustomText size='xs'>Refer friends, grow your community, and earn rewards through our Referral Program.</UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />

        </TouchableOpacity>
        
        {/* link item */}
        <TouchableOpacity style={styles.listItem}>

          <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png"}} width={48} height={48}/>

          <View style={{flex: 1, paddingHorizontal: 8}}>
            <UI.CustomText size='sm' bold>Upgrade Account</UI.CustomText>
            <UI.CustomText size='xs'>Unlock premium features for an elevated investing experience.</UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />

        </TouchableOpacity>
        
        {/* link item */}
        <TouchableOpacity style={styles.listItem}>

          <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png"}} width={48} height={48}/>

          <View style={{flex: 1, paddingHorizontal: 8}}>
            <UI.CustomText size='sm' bold>Learn and Earn</UI.CustomText>
            <UI.CustomText size='xs'>xplore opportunities to earn rewards while enhancing your knowledge.</UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />

        </TouchableOpacity>
        
        {/* link item */}
        <TouchableOpacity style={styles.listItem}>

          <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png"}} width={48} height={48}/>

          <View style={{flex: 1, paddingHorizontal: 8}}>
            <UI.CustomText size='sm' bold>Feedback</UI.CustomText>
            <UI.CustomText size='xs'>Share your thoughts with us; your feedback helps us improve StockPay.</UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />

        </TouchableOpacity>
        
        {/* link item */}
        <TouchableOpacity style={styles.listItem}>

          <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png"}} width={48} height={48}/>

          <View style={{flex: 1, paddingHorizontal: 8}}>
            <UI.CustomText size='sm' bold>About MyStockPay</UI.CustomText>
            <UI.CustomText size='xs'>About us.</UI.CustomText>
          </View>

          <AntDesign name="right" size={24} color={primaryColor} />

        </TouchableOpacity>
        


      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containner: {
    paddingTop: StatusBar.currentHeight,
    padding: 14,
    height: Dimensions.get('window').height
  },

  moreScrollList: {
    width: "100%",

  },

  listItem: {
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: grayColor,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
export default MoreScreen
