/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StatusBar } from 'react-native';

import Home from './app/Home'
import Test from './app/Test'


const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={"#343434"} />
      <Home/>
    </View>
  );
};

export default App;
