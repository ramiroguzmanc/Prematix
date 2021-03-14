import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {Button} from 'react-native-elements';
import firebase from '../utils/firebase';
import 'firebase/auth';

import Colors from '../res/Colors';

const LoginScreen = (props) => {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(null);

  const handlePress = async (e) => {
    try {
      setLoading(true);
      await firebase.firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      // console.log('User log');
      setLoading(false);
      props.navigation.navigate('MainMenu');
    } catch (error) {
      setLoading(false);
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

      <Button
        title="Iniciar Sesión"
        titleStyle={{fontWeight: 'bold'}}
        buttonStyle={styles.button}
        onPress={handlePress}
        loading={loading}
      />
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
    backgroundColor: Colors.rosa,
    textAlign: 'center',
    width: 200,
    marginTop: 35,
  },
});

export default LoginScreen;
