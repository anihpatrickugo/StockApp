import { FC } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Animated, { BounceIn } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width;


interface CarouselItems {
    id: string,
    title: string,
    description: string,
    image: any,
}

interface Props {
    item: CarouselItems
}

const OnboardingListItem: FC<Props> = ({item}) => {
  return (
    <Animated.View entering={BounceIn.duration(1000)} style={styles.itemContainer}>
    <Image source={item.image} style={styles.onboardingImage}/>

    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </Animated.View>
  )
}
const styles = StyleSheet.create({
itemContainer: {
 justifyContent: 'center',
 alignItems: 'center',
 marginTop: 100,
 width: ITEM_WIDTH,
 height: 320,
 paddingHorizontal: 40,
 border: 3,
 borderStyle: "solid",
 borderColor: "red"

},
onboardingImage: {
  width: "80%",
  height: 350,
  alignSelf: "center",
  objectFit: 'contain',
  marginBottom: -20
},

details: {
  marginTop: 0,
  
},

title: {
  fontSize: 23,
  textAlign: "center",
  fontWeight: 'bold',
//   fontFamily: 'Poppins_700Bold',
  
},
description: {
  fontSize: 14,
  textAlign: "center",
//   fontFamily: 'Poppins_400Regular',
},
})

export default OnboardingListItem
