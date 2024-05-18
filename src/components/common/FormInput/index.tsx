import React, { FC } from 'react'
import { StyleSheet, TextInputProps, } from 'react-native'
import { grayColor, secondaryColor } from '../variables'
import { TextInput } from 'react-native-gesture-handler'

interface Props extends TextInputProps {
}

const FormInput: FC<Props> = ({children, style, ...props}) => {


 return  <TextInput style={[styles.inputField, style]} {...props}>{children}</TextInput>

}

const styles = StyleSheet.create({
    inputField: {
        height: 40,
        padding: 12,
        borderWidth: 1,
        borderColor: grayColor,
        borderRadius: 8,
        fontFamily: 'Roboto_500Medium'
 
    }
})
export {FormInput};
