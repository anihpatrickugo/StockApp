import React from 'react';
import {  TouchableOpacity , Linking, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Animated, { BounceIn, FlipInEasyX, ZoomIn } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { primaryColor, grayColor, darkGrayColor} from '../../components/common/variables';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as UI from '../../components/common';

const { width, height } = Dimensions.get('window')

const DeveloperScreen = () => {
    const developer = {
        name: 'Anih-Patrick Ugochukwu',
        about: 'Fullstack Mobile Developer',
        description: 'Passionate about creating innovative and user-friendly mobile applications.',
        image: require('../../assets/images/developer.jpeg'),
        github: 'https://github.com/anihpatrickugo',
        linkedin: 'https://linkedin.com/in/anihpatrickugo',
        twitter: 'https://twitter.com/anihpatrickugo',
        gmail: 'mailto:iampatrickugo@gmail.com',
        phone: '+2349059209717',
        instagram: 'https://instagram.com/anihpatrickugoo',
        website: 'https://anihpatrickugo.github.io',
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.Image source={developer.image} style={{ width: 200, height: 200, borderRadius: 100 }} entering={BounceIn.delay(80)} />

            <Animated.View style={{alignItems: "center"}} entering={FlipInEasyX.delay(500)}>
               <UI.CustomText size='lg' bold color={primaryColor}>{developer.name}</UI.CustomText>
               <UI.CustomText size='sm' bold color={darkGrayColor} style={{textAlign: "center"}}>{developer.about}</UI.CustomText>

               <UI.CustomText size='xs' color={darkGrayColor} style={{textAlign: "center"}}>{developer.description}</UI.CustomText>
            </Animated.View>


            <Animated.View style={{ flexDirection: 'row', marginTop: 16, gap: 12 }} entering={ZoomIn.delay(1000)}>
                <TouchableOpacity onPress={() => Linking.openURL(developer.github)}>
                    <Ionicons name="logo-github" size={32} color="black" style={{ marginRight: 16 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(developer.linkedin)}>
                    <Ionicons name="logo-linkedin" size={32} color="black" style={{ marginRight: 16 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(developer.twitter)}>
                    <Ionicons name="logo-twitter" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(developer.instagram)}>
                    <Ionicons name="logo-instagram" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(developer.gmail)}>
                    <MaterialCommunityIcons name="gmail" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(developer.website)}>
                    <MaterialCommunityIcons name="web" size={32} color="black" />
                </TouchableOpacity>
            </Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    //   justifyContent: "space-between",
      paddingTop: StatusBar.currentHeight,
      padding: 16,
      backgroundColor: 'white',
      height: height,
      width: width
    },
  
  });

export default DeveloperScreen;