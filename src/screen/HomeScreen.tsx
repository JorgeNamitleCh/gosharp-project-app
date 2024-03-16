import React, { useEffect } from 'react'
import { Text, View, TextInput, StyleSheet, Platform } from 'react-native'
import { useForm } from '../hooks/useForm';
import Button from '../components/Button';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ArticleAddState, addToArticle } from '../store/slices/article.slice';
import { useShowToast } from '../hooks/useToast';


const initialForm = {
    id: '', name: '', price: 0, info: ''
}

export const HomeScreen = () => {

    const dispatch = useAppDispatch();

    const { onChange, form, setState } = useForm(initialForm);
    const { showToast } = useShowToast()

    useEffect(() => {
      console.log(form)
    }, [form])
    

    const handlerAddArticle = () => {
        if (form.name != '' && form.info != '') {
            dispatch(addToArticle({ ...form, id: (Date.now() + 10).toString() }));
            setState(initialForm);
            showToast('success', 'Se agrego correctamente');
        } else {
            showToast('danger', 'El nombre y descripción del producto son requeridos')
        }
    }

    return (
        <View style={styles.conteiner}>
            <View>
                <TextInput
                    style={{ ...styles.input }}
                    placeholder='Nombre del producto'
                    keyboardType='default'
                    placeholderTextColor={'#000000'}
                    onChangeText={(value) => onChange(value, 'name')}
                    defaultValue={form.name}
                />
                <TextInput
                    style={{ ...styles.input }}
                    placeholder='Precio'
                    keyboardType='decimal-pad'
                    placeholderTextColor={'#000000'}
                    onChangeText={(value) => onChange(value, 'price')}
                    defaultValue={form.price.toString()}
                />
                <TextInput
                    style={{ ...styles.input, height: 90 }}
                    placeholder='Descripción'
                    keyboardType='default'
                    placeholderTextColor={'#000000'}
                    onChangeText={(value) => onChange(value, 'info')}
                    defaultValue={form.info}
                    numberOfLines={5}
                    //multiline={true}
                />
            </View>
            <Button
                title='Agregar  Producto'
                loading={false}
                style={{}}
                textStyle={{}}
                onPress={() => handlerAddArticle()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        padding: 25,
        backgroundColor: '#f1f8c2'
    },
    input: {
        backgroundColor: '#daffda',
        padding: Platform.OS == "android" ? 5 : 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        height: 50,
        marginBottom: 15
    },
    form: {
        justifyContent: 'space-around'
    }
});