import React, { FC } from 'react'
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import { primaryColor, grayColor, darkGrayColor } from '../variables'

interface Props extends TouchableOpacityProps {
    text: string,
    variant: "coloured" | "light" | "light-gray",
    size: "small" | "medium" | "large",
    noBorder?:  boolean;
}

const SmallButton: FC<Props> = ({text, size, variant, noBorder, style, ...props}) => {
   let variantStyles = {button: null, buttonText: null}
   let sizeStyles = {button: null, buttonText: null}


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
            button: {},  
            buttonText: {color: darkGrayColor, fontWeight: '500' }}
        break;

    default: 
        variantStyles =  {button: {backgroundColor: primaryColor},  buttonText: {color: "white" }}
        break;
   }


//    size
   switch (size){
    
    case "small":

        sizeStyles = { 
            button: {
            paddingHorizontal: 24,
            paddingVertical: 8,
            borderRadius: 20,
          },
          buttonText: {
            textAlign: "center",
            color: "white",
            fontSize: 12
          }
        }
        break;

    case "medium":
        sizeStyles = { 
            button: {
            paddingHorizontal: 48,
            paddingVertical: 12,
            borderRadius: 30,
          },
          buttonText: {
            textAlign: "center",
            color: "white",
            fontSize: 12
          }
        }
        break;

    case "large":
        sizeStyles = { 
            button: {
            paddingHorizontal: 64,
            paddingVertical: 10,
            borderRadius: 40,
          },
          buttonText: {
            textAlign: "center",
            color: "white",
            fontSize: 12
          }
        }
        break;

    default: 
    sizeStyles = { 
        button: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
      },
      buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 12,
        fontFamily: 'Roboto_500Medium'
      }
    }
    break;

   }

  return (
    <TouchableOpacity style={[style, sizeStyles.button, variantStyles.button]} {...props}>
            <Text style={[sizeStyles.buttonText, variantStyles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   
    
     
})
export {SmallButton};
