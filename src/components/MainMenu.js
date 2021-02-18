import React from 'react';
import {View, StyleSheet} from 'react-native';
import MainMenuOption from './MainMenuOption';
import Colors from '../res/Colors';
import cuidado from '../assets/images/cuidado.png';
import acercade from '../assets/images/acercade.png';
import verneo from '../assets/images/verneo.png';
import preguntas from '../assets/images/preguntas.png';
import contacto from '../assets/images/contacto.png';
import about from '../assets/images/about.png';

const MainMenu = () => {
  return (
    <View style={styles.container}>
      <MainMenuOption title="Cuidado Neonatal" source={cuidado} />
      <MainMenuOption title="Acerca de mi neonato" source={acercade} />
      <MainMenuOption title="Ver mi neonato" source={verneo} />
      <MainMenuOption title="Preguntas frecuentes" source={preguntas} />
      <MainMenuOption title="Contactar pediatra" source={contacto} />
      <MainMenuOption title="Acerca de la app" source={about} />
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
