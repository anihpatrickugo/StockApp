import React from 'react'
import { Pressable, StyleSheet, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

interface Props {
    navigation: any,
    screenName: string
}

const BackButton: React.FC<Props> = ({navigation, screenName}) => {
  return (
    <Pressable  style={styles.backButton} onPress={()=>navigation.goBack()}>
        <AntDesign name="left" size={24} color="black" />
           <Text style={{marginLeft: 10, fontWeight: '600', fontSize: 16, lineHeight: 30}}>
             {screenName}
            </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    backButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
})
export {BackButton}
