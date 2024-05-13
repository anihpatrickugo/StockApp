import React, {FC} from 'react'
import {View, Button, Image, StyleSheet, Modal, Dimensions} from 'react-native'
import { Camera } from 'expo-camera';
import * as UI from '../common'
import { primaryColor } from '../common/variables';
import { FontAwesome } from '@expo/vector-icons';

const {width, height} = Dimensions.get("screen")

interface Props {
    photo: string | null;
    type: any;
    setCamera: (ref: any)=>void;
    toggleCamera: ()=>void;
    takePicture: ()=>void;
    
}
const CameraModalView: FC<Props> = ({photo, type, setCamera, toggleCamera, takePicture,}) => {


  return (
     <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
        >

            
            {/* camera view */}
          <View style={{ flex: 1,}}>
               <View style={styles.cameraContainer}>
                  <Camera 
                    ref={ref => setCamera(ref)}
                    style={styles.fixedRatio} 
                    type={type}
                    ratio={'1:1'} />
              </View>
              

          </View>


        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              {/* image preview */}
              {photo ? <Image source={{uri: photo}} style={styles.image}/> 
              : 
              <FontAwesome name="photo" size={120} color="black" />
              }

            {/* buttons */}
            <View style={{flexDirection: "row", justifyContent: "space-around", gap: 20}}>

            <View style={{ width: 100}}>
                <UI.Button text='Flip Camera' variant='coloured' onPress={toggleCamera}/>
            </View>

            <View style={{ width: 100}}>
                <UI.Button text='Take Picture' variant='coloured' onPress={takePicture}/>
            </View>

            <View style={{ width: 100}}>
               <UI.Button text='Cancel' variant='light-gray' onPress={()=>setCamera(null)}/>
           </View>

         </View>
         {/* end of buttons */}


          </View>
        </View>
      </Modal>
  )

}
const styles = StyleSheet.create({

      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        width: width,
        height: height,
       
      },

      modalView: {
        margin: 20,
        backgroundColor: 'white',
        width: "95%",
        height: "80%",
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
        alignItems: 'center',
        justifyContent: "space-between"
      },
    

    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio:{
        flex: 1,
        aspectRatio: 0.8
    },

    image: {
        width: 120,
        height: 120, 
        borderRadius: 30, 
        borderColor: primaryColor, 
        borderWidth: 2}


})

export default CameraModalView




// import React, {FC} from 'react'
// import {View, Button, Image, StyleSheet, Modal, Dimensions} from 'react-native'
// import { Camera } from 'expo-camera';
// import * as UI from '../common'

// const {width, height} = Dimensions.get("screen")

// interface Props {
//     photo: string | null;
//     type: any;
//     setCamera: (ref: any)=>void;
//     toggleCamera: ()=>void;
//     takePicture: ()=>void;
    
// }
// const CameraModalView: FC<Props> = ({photo, type, setCamera, toggleCamera, takePicture,}) => {


//   return (
     
            
//             <View style={{ flex: 1}}>
//                <View style={styles.cameraContainer}>
//                   <Camera 
//                      ref={ref => setCamera(ref)}
//                      style={styles.fixedRatio} 
//                      type={type}
//                      ratio={'1:1'} />
//                </View>
//            {photo && <Image source={{uri: photo}} style={{flex: 1}}/>}

//            </View>
//   )

// }
// const styles = StyleSheet.create({

//       centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 22,
//         width: width,
//         height: height,
       
//       },

//       modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         width: "95%",
//         height: "80%",
//         borderRadius: 20,
//         padding: 12,
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//         alignItems: 'center'
//       },
    

//     cameraContainer: {
//         flex: 1,
//         flexDirection: 'row'
//     },
//     fixedRatio:{
//         flex: 1,
//         aspectRatio: 1
//     }
// })

// export default CameraModalView

