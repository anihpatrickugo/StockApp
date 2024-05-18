import React, { FC } from 'react'
import { Text, TextProps } from 'react-native'

interface Props extends TextProps {
    size: "xs" | "sm" | "md" | "lg" | "xl",
    bold?: boolean
    color?: string
}

const CustomText: FC<Props> = ({children, size, bold, color, style, ...props}) => {
   let variantStyles = {fontSize: null, lineHeight: null, fontWeight: null, color: color, fontFamily: 'Roboto_500Medium'}


//   custom sizes
    switch(size){
        case "xs":
            variantStyles = {...variantStyles, fontSize: 12}
            break;
        case "sm":
            variantStyles = {...variantStyles, fontSize: 14}
            break;
        case "md":
            variantStyles = {...variantStyles, fontSize: 16, lineHeight: 30}
            break;
        case "lg":
            variantStyles = {...variantStyles, fontSize: 20}
            break;
        case "xl":
            variantStyles = {...variantStyles, fontSize: 24}
            break;
        default: 
           variantStyles= {...variantStyles, fontSize: 10}
    }

    // bold
    switch (bold){
        case true:
            variantStyles = {...variantStyles, fontWeight: "bold"}
            break;
        default:
            variantStyles = {...variantStyles, fontWeight: null}
    }

 return  <Text style={[style, variantStyles]} {...props}>{children}</Text>

}

export {CustomText};
