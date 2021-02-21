import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MainMenu from '../screens/MainMenu';
import NeonatalCareScreen from '../screens/NeonatalCareScreen';
import NeonatalInfoScreen from '../screens/NeonatalInfoScreen';
import FQAScreen from '../screens/FQAScreen';
import AnswerScreen from '../screens/AnswerScreen';
import AboutScreen from '../screens/AboutScreen';

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

      <Stack.Screen
        name="FQAScreen"
        component={FQAScreen}
        options={{title: 'Preguntas frecuentes'}}
      />
      <Stack.Screen
        name="AnswerScreen"
        component={AnswerScreen}
        options={{title: 'Respuesta'}}
      />

      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{title: 'Acerca de la App'}}
      />
    </Stack.Navigator>
  );
};

export default PrematixStack;
