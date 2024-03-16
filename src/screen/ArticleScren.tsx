import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ArticleAddState, ArticleRemoveState, removeToArticle } from '../store/slices/article.slice';
import Button from '../components/Button';

export const ArticleScren = () => {

    const articles = useAppSelector((state) => state.ArticleReducer);
    const dispatch = useAppDispatch()
    const handlerRemoveArticleId = (id: ArticleRemoveState) => {
        dispatch(removeToArticle(id));
    }

    const renderItem = (article: ArticleAddState) => {
        return (
            <View style={{ ...styles.card }}>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold"}}> {article.name} </Text>
                    <Text> {article.price} </Text>
                    <Text> {article.info} </Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Button 
                        title='' 
                        icon="trash-outline" 
                        onPress={() => handlerRemoveArticleId({id: article.id})} 
                        style={{ backgroundColor: "#FF6868", height: 50, width: 50, borderRadius:50 }} 
                        textStyle={{}} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.conteiner}>
            <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: "bold" }}>Lista de prodcutos { articles.length }</Text>
            {
                articles.length > 0 &&
                < FlatList
                    data={articles}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        padding: 25,
        backgroundColor: "#f1f8c2"
    },
    card: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 15,
        marginBottom: 15,
    },
});