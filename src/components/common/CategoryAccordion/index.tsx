import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { darkGrayColor, primaryColor, secondaryColor } from '../variables';


const CategoryAccordion = () => {
    const [category, setCategory] = React.useState("All");
    const [open, setOpen] = React.useState(false);

    // set currency and close list items
    const setTheCategory = (value)=> {

        if (value === 'All'){
            setCategory('All')
        }
        if (value == 'Deposits'){
           setCategory('Deposits')
        }
        else{
            setCategory('Withdrawal')
        }
        setOpen(false)
    }

  return (

   <Pressable style={styles.pickerContainer} onPress={()=>setOpen(!open)}>
    <View style={styles.currentItem}>

        <Text style={{color: darkGrayColor, fontWeight: '700', fontSize: 14}}>Categories</Text>
        { open ? (
            <AntDesign name='caretup' size={16} color={darkGrayColor} />
            ): (
            <AntDesign name='caretdown' size={16} color={darkGrayColor} />
            )
        }

    </View>

    <View style={{display: open ? 'flex' : 'none', width: '100%', backgroundColor: secondaryColor, borderRadius: 20, paddingHorizontal: 8}}>
        <Pressable style={styles.listItem}  onPress={()=>setTheCategory('All')}>
             <Text style={{color: primaryColor, fontWeight: '700', fontSize: 14}}>All</Text>
        </Pressable>

        <Pressable style={styles.listItem} onPress={()=>setTheCategory('Deposits')}>
             <Text style={{color: primaryColor, fontWeight: '700', fontSize: 14}}>Deposits</Text>
        </Pressable>

        <Pressable style={styles.listItem} onPress={()=>setTheCategory('Withdrawal')}>
             <Text style={{color: primaryColor, fontWeight: '700', fontSize: 14}}>Withdrawal</Text>
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
        position: "relative", 
        zIndex: 100
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

export {CategoryAccordion};
