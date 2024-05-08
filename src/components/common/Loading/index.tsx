import React from 'react';
import {Text, Modal, StyleSheet, View, Dimensions, ActivityIndicator} from 'react-native';
const {width, height} = Dimensions.get("screen")

const Loading = () => {
 

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        >
        <View style={styles.containner}>

          <View style={styles.modalView}>
            <ActivityIndicator size="large" color="#E1AE3C" /> 
            <Text style={styles.loadingText}>Loading...</Text>

          </View>

        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  containner: {
    position: 'absolute',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },

  loadingText: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: 16
  }
});

export {Loading};