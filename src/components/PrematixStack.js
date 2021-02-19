import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import MainMenu from './MainMenu';
import NeonatalCareScreen from './NeonatalCareScreen';
import NeonatalInfoScreen from './NeonatalInfoScreen';

const Stack = createStackNavigator();

const PrematixStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Iniciar Sesión'}}
      />
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{title: 'Menú principal'}}
      />
      <Stack.Screen
        name="NeonatalCareScreen"
        component={NeonatalCareScreen}
        options={{title: 'Cuidado Neonatal'}}
      />
      <Stack.Screen
        name="NeonatalInfoScreen"
        component={NeonatalInfoScreen}
        options={{title: 'Acerca de mi neonato'}}
      />
    </Stack.Navigator>
  );
};

export default PrematixStack;
