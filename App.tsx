import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { ToastProvider } from 'react-native-toast-notifications';

const App = () => {
    return (
        <Provider store={store}>
            <ToastProvider>
                <Navigation />
            </ToastProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({

});

export default App;
