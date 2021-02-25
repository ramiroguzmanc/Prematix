import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import firebase from '../utils/firebase';
import 'firebase/auth';

import Colors from '../res/Colors';

const LoginScreen = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handlePress = async (e) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // console.log('User log');
      props.navigation.navigate('MainMenu');
    } catch (error) {
      console.log(error);
      alert('Los datos suministrados no son válidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prematix</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="white"
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
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
