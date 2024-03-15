import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Toolbar } from '../components/Toolbar';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    return (
        <View style={styles.conteiner}>
            <Toolbar titleScreen='Login' />
            <View style={{ flex: 3, justifyContent: "center",  }}>
                <View style={styles.form}>
                    <TextInput
                        style={{ ...styles.input }}
                        placeholder="Email"
                        keyboardType="email-address"
                        placeholderTextColor={"#000000"}
                        onChangeText={newText => setEmail(newText)}
                        defaultValue={email}
                    />
                    <TextInput
                        style={{ ...styles.input }}
                        placeholder="Password"
                        keyboardType="default"
                        secureTextEntry
                        placeholderTextColor={"#000000"}
                        onChangeText={newText => setPassword(newText)}
                        defaultValue={password}
                    />
                    <Button
                        title='Iniciar Sesión'
                        loading={false}
                        style={{}}
                        textStyle={{}}
                        onPress={ () => navigation.navigate("TabsBottomNavigation") }
                    />
                </View>
            </View>
            <View style={{ flex: 8, justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ paddingBottom: 10 }}>App de prueba para vacante en Go-Sharp</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        padding: 25,
        backgroundColor: "#f1f8c2"
    },
    input: {
        backgroundColor: "#daffda",
        padding: 20,
        borderRadius: 15,
        height: 50,
        marginBottom: 15
    },
    form: {
        justifyContent: "space-around"
    }
});