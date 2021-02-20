import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';
import cicatrizacion from '../assets/images/cicatrizacioncordon.jpg';

const CN2 = () => {
  return (
    <ScrollView style={style.Container}>
      <Text style={style.title}>Cuidados con el ombligo</Text>
      <Text style={style.p}>
        👶🏼 Mantenerlo limpio y seco. Retirar residuos de agua y jabón después
        del baño.{'\n\n'}
        👶🏼 Aplicar alcohol tres veces al día en la parte donde el ombligo se
        pega a la piel.{'\n\n'}
        👶🏼 Si se hunta de orina o popó, lavarlo con abundante agua y jabón,
        secarlo y aplicar alcohol.{'\n\n'}
        👶🏼 Doblar el pañal por debajo del ombligo, para mantenerlo seco y
        facilitar su desprendimiento.{'\n\n'}
        👶🏼 El ombligo se caerá generalmente después de 7 a 10 días
      </Text>
      <Image source={cicatrizacion} style={style.image} />
      <Text>Imagen tomada de medlineplus.gov{'\n'}</Text>
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
    width: 400,
    height: 325,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default CN2;
