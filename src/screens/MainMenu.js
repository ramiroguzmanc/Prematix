import React, {Component} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import MenuOption from '../components/MenuOption';
import Colors from '../res/Colors';
import cuidado from '../assets/images/cuidado.png';
import acercade from '../assets/images/acercade.png';
import verneo from '../assets/images/verneo.png';
import preguntas from '../assets/images/preguntas.png';
import contacto from '../assets/images/contacto.png';
import about from '../assets/images/about.png';

const MainMenu = (props) => {
  return (
    <View style={styles.container}>
      <MenuOption
        title="Cuidado Neonatal"
        source={cuidado}
        goTo="NeonatalCareScreen"
        {...props}
      />
      <MenuOption
        title="Acerca de mi neonato"
        source={acercade}
        goTo="NeonatalInfoScreen"
        {...props}
      />
      <MenuOption title="Ver mi neonato" source={verneo} />
      <MenuOption title="Preguntas frecuentes" source={preguntas} />
      <MenuOption title="Contactar pediatra" source={contacto} />
      <MenuOption title="Acerca de la app" source={about} />
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
});

export default MainMenu;
