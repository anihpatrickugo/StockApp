import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import * as UI from '../index'

interface Props {
    navigation: any,
    screenName: string
}

const BackButton: React.FC<Props> = ({navigation, screenName}) => {
  return (
    <Pressable  style={styles.backButton} onPress={()=>navigation.goBack()}>
        <AntDesign name="left" size={24} color="black" />
           <UI.CustomText size='md' style={{marginLeft: 10, fontWeight: '600'}}>
             {screenName}
            </UI.CustomText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    backButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
})
export {BackButton}
