import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create Component
const App = () => {
    return (
        <Header />
    );
};

// Render to device
AppRegistry.registerComponent('musicshop', () => App);
