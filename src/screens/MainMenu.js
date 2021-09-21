import React from 'react';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';
import Colors from '../res/Colors';
import fontConfig from '../res/fontConfig';
import cuidado from '../assets/images/cuidado.png';
import acercade from '../assets/images/acercade.png';
import verneo from '../assets/images/verneo.png';
import preguntas from '../assets/images/preguntas.png';
import contacto from '../assets/images/contacto.png';
import about from '../assets/images/about.png';

const MainMenu = (props) => {
  return (
    <View style={styles.container}>
      {/*Cuidado neonatal */}
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate('NeonatalCareScreen')}>
        <Image source={cuidado} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Cuidado neonatal</Text>
      </Pressable>

      {/*Acerca del Neonato */}
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate('NeonatalList')}>
        <Image source={acercade} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Acerca de mi neonato</Text>
      </Pressable>

      {/*Ver mi neonato*/}
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate('NeonatalView')}>
        <Image source={verneo} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Ver mi neonato</Text>
      </Pressable>

      {/*Preguntas frecuentes */}
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate('FQAScreen')}>
        <Image source={preguntas} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Preguntas frecuentes</Text>
      </Pressable>

      {/*Contactar pediatra*/}
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate('ContactPediatra')}>
        <Image source={contacto} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Contactar pediatra</Text>
      </Pressable>

      {/*Acerca de la app */}
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate('AboutScreen')}>
        <Image source={about} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Acerca de la app</Text>
      </Pressable>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.azul,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '80%',
    padding: '3%',
    borderRadius: 8,
    margin: 10,
  },

  buttonText: {
    fontSize: fontConfig.p.fontSize,
    fontWeight: 'bold',
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default MainMenu;
