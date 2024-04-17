import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';

interface AlertProps {
    type: 'success' | 'warning' | 'error';
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
    const opacity = useSharedValue(0);

    React.useEffect(() => {
        opacity.value = withTiming(1, { duration: 300 });
        const timeout = setTimeout(() => {
            opacity.value = withTiming(0, { duration: 300 }, () => {
                runOnJS(onClose)();
            });
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    const getAlertColor = () => {
        switch (type) {
            case 'success':
                return '#4CAF50';
            case 'warning':
                return '#FFC107';
            case 'error':
                return '#F44336';
            default:
                return '#000000';
        }
    };

    return (
        <Animated.View style={{ opacity: opacity.value }}>
            <View
                style={{
                    backgroundColor: getAlertColor(),
                    padding: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={{ color: '#ffffff', marginRight: 8 }}>{message}</Text>
                <TouchableOpacity onPress={onClose}>
                    <Ionicons name="close" size={24} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

export  {Alert};