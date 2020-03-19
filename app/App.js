import React from 'react';
import { StatusBar } from 'react-native'
import AppNavigator from '@navigator'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </>
  );
};

export default App;
