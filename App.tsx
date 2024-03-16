import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { ToastProvider } from 'react-native-toast-notifications';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ToastProvider>
                    <Navigation />
                </ToastProvider>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({

});

export default App;
