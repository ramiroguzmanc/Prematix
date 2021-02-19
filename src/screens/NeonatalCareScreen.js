import React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuOption from '../components/MenuOption';
import Colors from '../res/Colors';

const NeonatalCareScreen = () => {
  return (
    <View style={styles.container}>
      <MenuOption title="Baño del bebé" />
      <MenuOption title="Cuidados con el ombligo" />
      <MenuOption title="Vestido y cambio del pañal" />
      <MenuOption title="Cuidados con la piel" />
      <MenuOption title="Exposición al sol" />
      <MenuOption title="Ambiente y sueño" />
      <MenuOption title="Vacunación" />
      <MenuOption title="Lactancia materna" />
      <MenuOption title="Posiciones de amamantamiento" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.azul,
    padding: 7,
    alignItems: 'center',
    flex: 1,
  },
});

export default NeonatalCareScreen;
