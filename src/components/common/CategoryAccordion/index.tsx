import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { darkGrayColor, primaryColor, secondaryColor } from '../variables';


const CategoryAccordion = ({category, setCategory}) => {

    const [open, setOpen] = React.useState(false);



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

    <View style={[{display: open ? 'flex' : 'none'}, styles.allCategories]}>
        <Pressable style={styles.listItem}  onPress={()=>
        {setCategory('All');
            setOpen(false)
        }}>
             <Text style={{color: primaryColor, fontWeight: '700', fontSize: 14}}>All</Text>
        </Pressable>

        <Pressable style={styles.listItem} onPress={()=>{
            setCategory('Deposit');
            setOpen(false)

        }}>
             <Text style={{color: primaryColor, fontWeight: '700', fontSize: 14}}>Deposits</Text>
        </Pressable>

        <Pressable style={styles.listItem} onPress={()=>{
            setCategory('Withdrawal');
            setOpen(false)
            }}>
             <Text style={{color: primaryColor, fontWeight: '700', fontSize: 14}}>Withdrawal</Text>
        </Pressable>

    </View>
  
   </Pressable>
  )
  
}

const styles = StyleSheet.create({
    pickerContainer: {
        width: "40%",
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
      },

      allCategories: {
        width: '100%', 
        backgroundColor: secondaryColor, 
        borderRadius: 20, 
        paddingHorizontal: 8,
  
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
        marginVertical: 4,
        paddingVertical: 10,
        }
})

export {CategoryAccordion};
