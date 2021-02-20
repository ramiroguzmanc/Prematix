import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';
import bano from '../assets/images/bano_recien_nacido.jpg';

const CN1 = () => {
  return (
    <ScrollView style={style.Container}>
      <Text style={style.title}>Baño del bebé</Text>
      <Text style={style.p}>
        Alistar todo lo que se necesite para el baño del bebé (toalla, esponja,
        jabón o champú, ropa, pañal) calentando la ropa en el seno de la madre.
        {'\n\n'}
        👶🏼 Evitar corrientes de aire.{'\n\n'}
        👶🏼 Asegurarse que el agua esté templada, ni demasiado fría, ni demasiado
        caliente. Evitar agregar sustancias diferentes.{'\n\n'}
        👶🏼 Iniciar el baño, por la cara, continuar por la cabeza, luego cuerpo y
        por último los genitales.{'\n\n'}
        👶🏼 Secar rápidamente al bebé y vestirlo rápidamente
      </Text>
      <Image style={style.image} source={bano} />
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

export default CN1;
