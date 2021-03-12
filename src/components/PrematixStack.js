import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import firebase from '../utils/firebase';
import 'firebase/auth';

import LoginScreen from '../screens/LoginScreen';
import MainMenu from '../screens/MainMenu';
import NeonatalCareScreen from '../screens/NeonatalCareScreen';
import NeonatalInfoScreen from '../screens/NeonatalInfoScreen';
import NeonatalList from '../screens/NeonatalList';
import FQAScreen from '../screens/FQAScreen';
import AnswerScreen from '../screens/AnswerScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

const PrematixStack = () => {
  const [signedIn, setSignedIn] = useState(null);

  firebase.firebase.auth().onAuthStateChanged((user) => {
    user ? setSignedIn(true) : setSignedIn(false);
  });

  const handlePress = async () => {
    try {
      await firebase.firebase.auth().signOut().then(setSignedIn(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack.Navigator>
      {signedIn ? (
        <>
          <Stack.Screen
            name="MainMenu"
            component={MainMenu}
            options={{
              title: 'Menú principal',
              headerRight: () => (
                <Pressable style={styles.button} onPress={handlePress}>
                  <Text style={styles.text}>Cerrar Sesión</Text>
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name="NeonatalCareScreen"
            component={NeonatalCareScreen}
            options={{title: 'Cuidado Neonatal'}}
          />

          <Stack.Screen
            name="NeonatalList"
            component={NeonatalList}
            options={{title: 'Selección de neonato'}}
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
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Iniciar Sesión'}}
        />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 10,
    marginRight: 7,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});

export default PrematixStack;
