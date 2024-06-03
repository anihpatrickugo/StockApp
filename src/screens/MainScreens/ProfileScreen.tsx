
import { SafeAreaView, StyleSheet, StatusBar, View, Dimensions, Image} from 'react-native'
import * as UI from '../../components/common/index';
import { useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { primaryColor } from '../../components/common/variables';




const { width, height} = Dimensions.get("screen")


const ProfileScreen = ({navigation}) => {
  const user = useSelector((state) => state.auth.user)

  return (
    <SafeAreaView style={styles.containner}>
      
    

      <UI.CustomText size='md' bold>Account Details</UI.CustomText>


     {/* Account Details */}
     <View style={styles.details}>

         {/* row */}
         <View style={{alignItems: 'center'}}>
            {user?.photo ? (

              <Image height={60} width={60} style={{borderRadius: 100}} source={{uri: user.photo || null}}/>
            ) : (
              
              <FontAwesome5 name="user-alt-slash" size={50} color={primaryColor} />
            )}
         </View>
        
        {/* row */}
        <View style={{flexDirection: 'row', alignItems: "center", marginBottom: 10, gap: 10}}>
          
          <View>
            <UI.CustomText size='xs'>First Name</UI.CustomText>
            <UI.CustomText size='md'>{user?.firstName.toUpperCase()}</UI.CustomText>
          </View>
        </View>

        {/* row */}
        <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between"}}>
          <View style={{flexDirection: 'row', alignItems: "center", marginBottom: 10}}>
              <View>
                 <UI.CustomText size='xs'>Last Name</UI.CustomText>
                 <UI.CustomText size='md'>{user?.lastName.toUpperCase()}</UI.CustomText>
              </View>
          </View>
        </View>

        {/* row */}
        <View style={{flexDirection: 'row', alignItems: "center", marginBottom: 10}}>
          {/* <UserIcon width={45} height={45}/> */}
          <View>
            <UI.CustomText size='xs'>Email Address </UI.CustomText>
            <UI.CustomText size='md'>{user?.email}</UI.CustomText>
          </View>
        </View>

        {/* row */}
        <View style={{flexDirection: 'row', alignItems: "center", marginBottom: 10}}>
          {/* <UserIcon width={45} height={45}/> */}
          <View>
            <UI.CustomText size='xs'>Tether Wallet Address </UI.CustomText>
            <UI.CustomText size='md'>{user?.walletAddress ? user.walletAddress : 'None'}</UI.CustomText>
          </View>
        </View>

      </View>


      <View style={{marginBottom: 50}}>
         <UI.Button text='Edit Profile' variant='coloured' onPress={()=>navigation.navigate("Edit-Profile")}/>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    containner: {
        paddingTop: StatusBar.currentHeight,
        padding: 14,
        width: width,
        height: height,
        flex: 1,
        
    },

    details: {
      width: '100%',
      marginVertical: 16,
      flex: 1,
      gap: 16
     },

})
export default ProfileScreen
