import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList /> 
  </View>
  );

// Render to device
AppRegistry.registerComponent('musicshop', () => App);
