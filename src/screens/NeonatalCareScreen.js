import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import MenuOption from '../components/MenuOption';
import Colors from '../res/Colors';

const NeonatalCareScreen = (props) => {
  return (
    <ScrollView style={{backgroundColor: Colors.azul}}>
      <View style={styles.container}>
        <MenuOption title="Baño del bebé" goTo="CN1" {...props} />
        <MenuOption title="Cuidados con el ombligo" goTo="CN2" {...props} />
        <MenuOption title="Vestido y cambio del pañal" goTo="CN3" {...props} />
        <MenuOption title="Cuidados con la piel" goTo="CN4" {...props} />
        <MenuOption title="Exposición al sol" goTo="CN5" {...props} />
        <MenuOption title="Ambiente y sueño" goTo="CN6" {...props} />
        <MenuOption title="Vacunación" goTo="CN7" {...props} />
        <MenuOption title="Lactancia materna" goTo="CN8" {...props} />
        <MenuOption
          title="Posiciones de amamantamiento"
          goTo="CN9"
          {...props}
        />
        <MenuOption title="Fuente de información" goTo="CN10" {...props} />
      </View>
    </ScrollView>
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
