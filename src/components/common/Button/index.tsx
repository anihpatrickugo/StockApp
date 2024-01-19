import React, { FC } from 'react'
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import { primaryColor, grayColor } from '../variables'

interface Props extends TouchableOpacityProps {
    text: string,
    variant: "coloured" | "light" | "light-gray",
    noBorder?:  boolean;
}

const Button: FC<Props> = ({text, variant, noBorder, ...props}) => {
   let variantStyles = {button: null, buttonText: null}


//    variant types and styles
   switch (variant){

    case "coloured":
        variantStyles = {button: {backgroundColor: primaryColor},  buttonText: {color: "white" }}
        break;

    case "light":
        variantStyles =  { 
            button: {backgroundColor: "transparent",  borderWidth: noBorder ? 0 : 1, borderColor: primaryColor},  
            buttonText: {color: primaryColor }}
        break;

    case "light-gray":
        variantStyles =  { 
            button: {backgroundColor: "transparent",  borderWidth: 1, borderColor: grayColor},  
            buttonText: {color: '#344054', fontWeight: '700' }}
        break;

    default: 
        variantStyles =  {button: {backgroundColor: primaryColor},  buttonText: {color: "white" }}
        break;
   }

  return (
    <TouchableOpacity style={[styles.button, variantStyles.button]} {...props}>
            <Text style={[styles.buttonText, variantStyles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        paddingVertical: 12,
        borderRadius: 4,
      },
    
      buttonText: {
        textAlign: "center",
        color: "white",
      }
})
export {Button};
