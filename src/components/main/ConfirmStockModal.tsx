import React from 'react';
import { Modal, StyleSheet, View, Dimensions, Pressable} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import * as UI from '../common'
import { primaryColor, grayLightColor, darkGrayColor } from '../common/variables';




const {width} = Dimensions.get("screen")

const ConfirmStockModal = ({modalVisible, setModalVisible,  handlePosition}) => {

  const [pin, setPin] = React.useState("");
  

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.centeredView}>

          <View style={styles.modalView}>
            
            <Pressable style={{position: 'absolute', top: 16, right: 35}} onPress={()=>setModalVisible(false)}>
                <UI.CustomText size="md" color={darkGrayColor}>&#10005;</UI.CustomText>
            </Pressable>

            <UI.CustomText size='md' bold style={{marginBottom: 12}}>Enter your PIN</UI.CustomText>

            <OTPInputView
                  style={{width: '60%', height: 100, alignItems: "center"}}
                  pinCount={4}
                  code={pin} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                  onCodeChanged = {code => {setPin(code)}}
                  autoFocusOnLoad={false}
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled = {(code)=>handlePosition(code)}

            />

          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: -30,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: width,
    height: "65%",
    alignItems: "center",
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  underlineStyleBase: {
    width: 45,
    height: 45,
    borderRadius: 20,
    borderBottomWidth: 1,
    backgroundColor: grayLightColor,
    color: "black"
  },

  underlineStyleHighLighted: {
    borderWidth: 1,
    borderColor: primaryColor,
    backgroundColor: "white",
    color: darkGrayColor
  },
});

export default ConfirmStockModal;