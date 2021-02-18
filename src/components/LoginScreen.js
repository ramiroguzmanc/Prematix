import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#63CEF3',
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
    backgroundColor: '#ed91b7',
    alignSelf: 'center',
    textAlign: 'center',
    margin: 40,
    borderColor: '#cf7e9f',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
