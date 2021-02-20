import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';
import bebesol from '../assets/images/bebesol.jpg';

const CN5 = () => {
  return (
    <ScrollView style={style.Container}>
      <Text style={style.title}>Exposición al sol</Text>
      <Text style={style.p}>
        👶🏼 A partir del segundo día de vida del bebé, presenta una coloración
        amarilla pálida en la piel; para disminuirla colocarlo a la luz del día
        mañana y tarde a través del vidrio de una ventana, sin corrientes de
        aire, durante 10 a 15 minutos, completamente desnudo cubriendo los ojos
        y genitales. Acompáñelo siempre.
      </Text>
      <Image style={style.image} source={bebesol} />
      <Text>Imagen tomada de okdiario.com{'\n'}</Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  Container: {
    ...ContainerConfig.pplContainer,
    backgroundColor: 'white',
  },
  title: {
    color: Colors.rosaBorder,
    alignSelf: 'center',
    ...fontConfig.title,
  },
  p: fontConfig.p,
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default CN5;
