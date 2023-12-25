import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { primaryColor, grayColor } from '../../components/common/variables';
import onboardingData from '../../constants/onboardingData';
import OnboardingListItem from '../../components/main/OnboardingListItem';
import * as UI from '../../components/common/index'

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width;

const OnboardingScreen = () => {

  const [currentIndex, setCurrentIndex] = useState(1);
  let flatListRef = useRef();
  const translateX = useSharedValue(0);

  const viewConfigRef = {viewAreaCoveragePercentThreshold: 100}

  const onViewRef = useRef(({changed} : {changed: any})=>{
    if (changed[0].isViewable){
      setCurrentIndex(changed[0].index)
    }
  })

  return (
    <>
    <View style={styles.container}>
      <View>
        <Animated.FlatList
        ref={(ref)=>{flatListRef.current = ref}}
        data={onboardingData}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={({ nativeEvent }) => {
          translateX.value = nativeEvent.contentOffset.x;
        }}
        onScrollEndDrag={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
          setCurrentIndex(newIndex);
        }}
        renderItem={({ item }) => <OnboardingListItem item={item}/>}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
        />
      </View>
    </View>

    <View style={styles.animationContainner}>
    {onboardingData.map(({}, index:number) => <Text key={index} style={[styles.animationItem, (index ===  currentIndex ? {paddingHorizontal: 10, backgroundColor: primaryColor}: {paddingHorizontal: 4, backgroundColor: grayColor})]}> </Text>)}
    </View>

    <View style={styles.buttons}>
      <View style={{marginVertical: 4}}>
         <UI.Button text='Create Account' variant="coloured"/>
      </View>

      <View style={{marginVertical: 4}}>
         <UI.Button text="Sign In" variant="light"/>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },

  animationContainner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  
  },

  animationItem: {
      lineHeight: 10,
      borderRadius: 8,
      marginHorizontal: 2
  },

  buttons: {
    marginVertical: 20,
    marginHorizontal: 16
    
  },

  
});

export default OnboardingScreen;
