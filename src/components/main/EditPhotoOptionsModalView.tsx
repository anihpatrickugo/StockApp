import React from 'react';
import { Modal, StyleSheet, View, Dimensions, Pressable} from 'react-native';
import * as UI from '../common'
import { primaryColor, grayLightColor, darkGrayColor } from '../common/variables';


const {width} = Dimensions.get("screen")

const EditPhotoOptionsModalView = ({setModalVisible, pickImage, setCamera}) => {


  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        >
        <View style={styles.centeredView}>

          <View style={styles.modalView}>
            
            <Pressable style={{position: 'absolute', top: 16, right: 35}} onPress={()=>setModalVisible(false)}>
                <UI.CustomText size="md" color={darkGrayColor}>&#10005;</UI.CustomText>
            </Pressable>

            <UI.CustomText size='md' bold style={{marginBottom: 12}}>Choose Option</UI.CustomText>


            <View style={styles.options}>
              <View style={{width: 100}}>
                <UI.Button 
                  variant='coloured'
                  text='Camera'
                  onPress={()=>{
                    setCamera(true);
                    setModalVisible(false)
                  }}
                  style={{marginBottom: 12}}
                />
              </View>

              <View style={{width: 100}}>
                <UI.Button 
                  variant='coloured'
                  text='Gallery'
                  onPress={()=>{
                    pickImage();
                    setModalVisible(false)
                  }}
                  style={{marginBottom: 12}}
                />
              </View>
                
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
    marginBottom: -30,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: width,
    height: width/2,
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
  options : {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 12,
    marginTop: 20
  }

});

export default EditPhotoOptionsModalView;