import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import MainMenu from './MainMenu';
import NeonatalCareScreen from './NeonatalCareScreen';

const Stack = createStackNavigator();

const PrematixStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainMenu" component={MainMenu} />
      <Stack.Screen name="NeonatalCareScreen" component={NeonatalCareScreen} />
    </Stack.Navigator>
  );
};

export default PrematixStack;
