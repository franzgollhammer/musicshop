import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create Component
const App = () => (
    <Header headerText={'albums'} /> 
  );

// Render to device
AppRegistry.registerComponent('musicshop', () => App);
