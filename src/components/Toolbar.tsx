import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    titleScreen: string
}

export const Toolbar = ( { titleScreen }: Props ) => {
    return (
        <View style={ styles.toolbar }>
            <View style={{ flex: 1 }}></View>
            <View style={{ ...styles.titleContent }}>
                <Text style={ styles.title }>{ titleScreen }</Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    toolbar: {
        flex: 1,
        flexDirection: "row",
    },
    titleContent: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});