import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../store/slices/auth.slice";

export const setStoreData = async (key: string, value: User) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
    }
};

export const getStorageData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
    }
};



export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
    }
    console.log('Done remove storage.')
}