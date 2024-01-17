import React from 'react';
import {Alert, Modal, StyleSheet, View} from 'react-native';
import { RadioButton } from 'react-native-paper'; 
import * as UI from '../common'
import { primaryColor } from '../common/variables';

const FundAlertModal = ({modalVisible, setModalVisible, navigation}) => {
  const [selectedValue, setSelectedValue] = React.useState('option1');

  const confirmFund =()=>{
    if (selectedValue === 'option1'){
       navigation.navigate('Bank-Transfer-Fund')
      }else{
      navigation.navigate('Debit-Card-Fund')
    }
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <UI.CustomText size='md' bold style={{marginBottom: 12}}>Fund your account</UI.CustomText>

            {/* radio group */}
            <View style={styles.radioGroup}> 
                <View style={styles.radioButton}> 
                    <RadioButton.Android 
                        value="option1"
                        status={selectedValue === 'option1' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => setSelectedValue('option1')} 
                        color={primaryColor}
                    /> 
                    <UI.CustomText  size='sm' style={styles.radioLabel}> 
                      Fund with Bank Transfer
                    </UI.CustomText> 
                </View> 
  
                <View style={styles.radioButton}> 
                    <RadioButton.Android 
                        value="option2"
                        status={selectedValue === 'option2' ?  
                                 'checked' : 'unchecked'} 
                        onPress={() => setSelectedValue('option2')} 
                        color={primaryColor}
                    /> 
                    <UI.CustomText  size='sm' style={styles.radioLabel}> 
                    Fund with Debit Card
                    </UI.CustomText> 
                </View> 
            </View> 

            {/* buttons */}
            <View style={{marginBottom: 6}}>
               <UI.Button text='Confirm' variant='coloured' onPress={confirmFund}/>
            </View>
            <View>
              <UI.Button text='Cancel' variant='light-gray' onPress={()=>setModalVisible(!modalVisible)}/>
            </View>

          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: "90%",
    height: "45%",
    borderRadius: 20,
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

  radioGroup: { 
    marginBottom: 8,
    justifyContent: 'space-around', 
    borderRadius: 8,  
  }, 
  radioButton: { 
      flexDirection: 'row', 
      alignItems: 'center', 
  }, 

  radioLabel: { 
    marginLeft: 8, 
    fontSize: 16, 
    color: '#333', 
  },

});

export default FundAlertModal;