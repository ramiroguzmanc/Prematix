import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';

const CN10 = () => {
  return (
    <ScrollView style={style.Container}>
      <Text style={style.title}>Fuente de información</Text>
      <Text style={style.p}>
        La información suministrada en la sección "cuidado neonatal" ha sido
        recolectada del folleto "Cuidado en el posparto a la madre y el recién
        nacido" por el grupo académico materno perinatal de la Universidad
        Nacional de Colombia Sede Bogotá.
      </Text>
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

export default CN10;
