import React, { FC } from 'react'
import { StyleSheet, TextInputProps } from 'react-native'
import { secondaryColor } from '../variables'
import { TextInput } from 'react-native-gesture-handler'

interface Props extends TextInputProps {
}

const CustomTextInput: FC<Props> = ({children, ...props}) => {


 return  <TextInput style={styles.inputField} {...props}>{children}</TextInput>

}

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: secondaryColor,
        height: 40,
        padding: 12,
        borderRadius: 8
 
    }
})
export {CustomTextInput};
