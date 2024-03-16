import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout } from '../store/slices/auth.slice';
import { useNavigation } from '@react-navigation/native';
import { clearAll } from '../utils/localStorage';

export const ProfileScreen = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch(); 
    const { user } = useAppSelector((state)=> state.AuthReducer)

    const handlerLogout = () => {
        dispatch(logout());
        clearAll();
    }

    return (
        <View style={styles.conteiner}>
            <Text style={{ 
                textAlign: 'center', 
                marginVertical: 30,
                fontSize: 20,
                fontWeight: "bold" }}>{ user?.username } </Text>
            <Button
                title='Cerrar Sesión'
                loading={false}
                style={{}}
                textStyle={{}}
                onPress={() => handlerLogout()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        padding: 25,
        backgroundColor: "#f1f8c2"
    },
})