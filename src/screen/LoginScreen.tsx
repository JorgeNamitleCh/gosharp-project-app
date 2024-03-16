import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Toolbar } from '../components/Toolbar';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginFailure, loginSuccess } from '../store/slices/auth.slice';
import { setStoreData } from '../utils/localStorage';
import { useShowToast } from '../hooks/useToast';


export const LoginScreen = () => {

    const [username, setUsername] = useState("hugo.flores@go-sharp.com");
    const [password, setPassword] = useState("123456");
    const navigation = useNavigation();
    const { showToast } = useShowToast();
    const dispatch = useAppDispatch();
    const { user, error, isLoggedIn }  = useAppSelector((state) => state.AuthReducer);

    useEffect(() => {
        console.log("session: ", user);
    }, [user])
    
    const handlerLogin = () => {
        if (username === 'hugo.flores@go-sharp.com' && password === '123456') {
            dispatch(loginSuccess({ username, password }));
            setStoreData('token', { username, password });
            showToast('success','bienvenido');
            isLoggedIn && navigation.navigate("TabsBottomNavigation");
        } else {
            showToast('danger','Usuario y contraeña incorrectos');
            dispatch(loginFailure('Invalid username or password'));
        }
    }

    return (
        <View style={styles.conteiner}>
            <Toolbar titleScreen='Login' />
            <View style={{ flex: 3, justifyContent: "center", }}>
                <View style={styles.form}>
                    <TextInput
                        style={{ ...styles.input }}
                        placeholder="Email"
                        keyboardType="email-address"
                        placeholderTextColor={"#000000"}
                        onChangeText={newText => setUsername(newText)}
                        defaultValue={username}
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
                        onPress={() => handlerLogin()}
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
        padding: Platform.OS == "android" ? 10 : 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        height: 50,
        marginBottom: 15
    },
    form: {
        justifyContent: "space-around"
    }
});