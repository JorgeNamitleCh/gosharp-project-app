import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { Provider } from 'react-redux';


const App = () => {
    return (

         <Navigation />

    );
}

const styles = StyleSheet.create({

});

export default App;
