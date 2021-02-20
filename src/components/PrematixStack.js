import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MainMenu from '../screens/MainMenu';
import NeonatalCareScreen from '../screens/NeonatalCareScreen';
import NeonatalInfoScreen from '../screens/NeonatalInfoScreen';
import CN1 from '../screens/CN1';
import CN2 from '../screens/CN2';
import CN3 from '../screens/CN3';
import CN4 from '../screens/CN4';
import CN5 from '../screens/CN5';
import CN6 from '../screens/CN6';
import CN7 from '../screens/CN7';
import CN8 from '../screens/CN8';
import CN9 from '../screens/CN9';
import CN10 from '../screens/CN10';
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
        name="CN1"
        component={CN1}
        options={{title: 'Baño del bebé'}}
      />
      <Stack.Screen
        name="CN2"
        component={CN2}
        options={{title: 'Cuidados con el ombligo'}}
      />
      <Stack.Screen
        name="CN3"
        component={CN3}
        options={{title: 'Vestido y cambio del pañal'}}
      />
      <Stack.Screen
        name="CN4"
        component={CN4}
        options={{title: 'Cuidados con la piel'}}
      />
      <Stack.Screen
        name="CN5"
        component={CN5}
        options={{title: 'Exposición al sol'}}
      />
      <Stack.Screen
        name="CN6"
        component={CN6}
        options={{title: 'Ambiente y sueño'}}
      />
      <Stack.Screen
        name="CN7"
        component={CN7}
        options={{title: 'Vacunación'}}
      />
      <Stack.Screen
        name="CN8"
        component={CN8}
        options={{title: 'Lactancia materna'}}
      />
      <Stack.Screen
        name="CN9"
        component={CN9}
        options={{title: 'Posiciones de amamantamiento'}}
      />
      <Stack.Screen
        name="CN10"
        component={CN10}
        options={{title: 'Fuente de información'}}
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
