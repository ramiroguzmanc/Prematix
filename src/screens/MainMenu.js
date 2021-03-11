import React from 'react';
import {View, StyleSheet, Button, Pressable, Text} from 'react-native';
import MenuOption from '../components/MenuOption';
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
      <MenuOption
        title="Cuidado Neonatal"
        source={cuidado}
        goTo="NeonatalCareScreen"
        {...props}
      />
      <MenuOption
        title="Acerca de mi neonato"
        source={acercade}
        goTo="NeonatalList"
        {...props}
      />
      <MenuOption title="Ver mi neonato" source={verneo} />
      <MenuOption
        title="Preguntas frecuentes"
        source={preguntas}
        goTo="FQAScreen"
        {...props}
      />
      <MenuOption title="Contactar pediatra" source={contacto} />
      <MenuOption
        title="Acerca de la app"
        source={about}
        goTo="AboutScreen"
        {...props}
      />

    <Pressable style={styles.button} onPress={() => props.navigation.navigate("NeonatalList")}>
    <Text style={styles.buttonText}>Acerca de mi neonato 2</Text>
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
  }
});

export default MainMenu;
