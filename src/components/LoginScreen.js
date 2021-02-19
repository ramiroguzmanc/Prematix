import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';

import Colors from '../res/Colors';

const LoginScreen = (props) => {
  const handlePress = (e) => {
    props.navigation.navigate('MainMenu');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prematix</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="white"
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.azul,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  input: {
    // backgroundColor: 'white',
    height: 46,
    width: '80%',
    color: 'white',
    fontSize: 20,
    borderRadius: 8,
    borderBottomWidth: 1,
    padding: 10,
    margin: 15,
    borderColor: 'white',
  },
  button: {
    borderWidth: 1,
    height: 42,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: Colors.rosa,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 40,
    borderColor: Colors.rosa,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
