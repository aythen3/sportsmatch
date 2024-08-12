import React, { createContext, useContext, useState, useCallback } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ message: '', visible: false });
    const [fadeAnim] = useState(new Animated.Value(0));

    const showToast = useCallback((message) => {
        setToast({ message, visible: true });
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => setToast({ ...toast, visible: false }));
            }, 5000);
        });
    }, [fadeAnim, toast]);

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            {toast.visible && (
                <Animated.View style={[styles.toastContainer, { opacity: fadeAnim }]}>
                    <Text style={styles.toastText}>{toast.message}</Text>
                </Animated.View>
            )}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};

const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        bottom: 80,
        left: 20,
        right: 20,
        padding: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        borderRadius: 10,
        alignItems: 'center',
    },
    toastText: {
        color: 'white',
        fontSize: 16,
    },
});
