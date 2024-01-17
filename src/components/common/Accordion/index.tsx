import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'
// import * as UI from '../index'
import { AntDesign } from '@expo/vector-icons';
import { primaryColor } from '../variables';
import NigeriaIcon from '../../../assets/icons/Nigeria'
import USAIcon from '../../../assets/icons/USA'


const Accordion = () => {
    const [currency, setCurrency] = React.useState("Naira");
    const [open, setOpen] = React.useState(false);

    // set currency and close list items
    const setTheCurrency = (value)=> {

        if (value === 'Naira'){
            setCurrency('Naira')
        }else{
            setCurrency('Dollar')
        }
        setOpen(false)
    }

  return (

   <Pressable style={styles.pickerContainer} onPress={()=>setOpen(!open)}>
    <View style={styles.currentItem}>
        {currency === "Naira" ? (
            <NigeriaIcon width={18} height={18}/>
            ): (
            <USAIcon width={18} height={18}/>
        )}

        <Text style={{color: "#FFFFFF", fontWeight: '700', fontSize: 16}}>{currency === "Naira" ? 'NG Naira': 'US Dollar' }</Text>
        { open ? (
            <AntDesign name='up' size={24} color="#FFFFFF" />
            ): (
            <AntDesign name='down' size={24} color="#FFFFFF" />
            )
        }

    </View>

    <View style={{display: open ? 'flex' : 'none', width: '100%', backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 8}}>
        <Pressable style={styles.listItem}  onPress={()=>setTheCurrency('Naira')}>
            <NigeriaIcon width={18} height={18}/>
             <Text style={{color: primaryColor, fontWeight: '700', fontSize: 16}}>NG Naira</Text>
        </Pressable>
        <Pressable style={styles.listItem} onPress={()=>setTheCurrency('Dollar')}>
            <USAIcon width={18} height={18}/>
             <Text style={{color: primaryColor, fontWeight: '700', fontSize: 16}}>US Dollar</Text>
        </Pressable>

    </View>
  
   </Pressable>
  )
  
}

const styles = StyleSheet.create({
    pickerContainer: {
        width: "40%",
        height: 31,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 120,
      },

      currentItem: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
      },

      listItem: {
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4
        }

      
})

export {Accordion};
