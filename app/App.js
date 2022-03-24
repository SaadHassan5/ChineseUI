import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MainNavigator } from './navigators/mainNavigator';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
};
export default App;
