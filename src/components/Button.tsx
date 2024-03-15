import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from "react-native";


interface Props {
    onPress:  ((event: GestureResponderEvent) => void),
    title: string,
    style: StyleProp<ViewStyle>,
    textStyle: StyleProp<TextStyle>,
    disabled?: boolean,
    activeOpacity?: number,
    loading: boolean,
}
const Button = ({
    onPress,
    title,
    style,
    textStyle,
    disabled = false,
    activeOpacity = .8 ,
    loading,
}: Props ) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={activeOpacity}
            style={[disabled ? styles.disabledButton : styles.button, style]}
        >

            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            )}

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#8ed08f",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 45
        // Add any additional styles or override default styles here
    },
    disabledButton: {
        backgroundColor: "grey",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        // Add any additional styles or override default styles here
    },
});

export default Button;