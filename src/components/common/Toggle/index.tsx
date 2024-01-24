import React from 'react'
import { View, Pressable, } from 'react-native'
import { grayLightColor, primaryColor, secondaryColor } from '../variables'

interface Props {
    toggled: boolean,
    setToggled: (boolean)=>void
}

const Toggle: React.FC<Props> = ({toggled, setToggled}) => {
   

  return (

   <Pressable style={{
    width: 40,
    height: 20,
    backgroundColor: toggled ? secondaryColor :  grayLightColor,
    borderRadius: 20,
    alignItems: toggled ? 'flex-end' : 'flex-start',
    justifyContent: 'center'
  }} onPress={()=>setToggled(!toggled)}>
    <View style={{
         width: 16,
         height: 16,
         borderRadius: 45,
         backgroundColor: toggled ? primaryColor : 'white',
         margin: 2,
      }}/>
   </Pressable>
  )
  
}

export {Toggle};
