import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';

const Loading = () => {
    const progress = useSharedValue(0);

    React.useEffect(() => {
        progress.value = withTiming(1, {
            duration: 1000,
            easing: Easing.linear,
        });
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${progress.value * 360}deg` }],
        };
    });

    // return (
    //     <View style={styles.container}>
    //         <View style={[styles.spinner, animatedStyle]} />
    //     </View>
    // );
    return <View style={styles.container}>
        <Text style={{fontSize: 24, fontWeight: "700"}}>Loading</Text>
        </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'gray',
        borderTopColor: 'white',
    },
});

export {Loading};