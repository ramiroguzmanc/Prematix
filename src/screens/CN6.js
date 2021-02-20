import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';
import bebedormido from '../assets/images/bebedormido.jpg';

const CN6 = () => {
  return (
    <ScrollView style={style.Container}>
      <Text style={style.title}>Ambiente y sueño</Text>
      <Text style={style.p}>
        👶🏼 Acostarlo boca arriba, la cabeza elevada 30 grados, sin almohadas al
        rededor, en una cuna, con soporte en los pies para evitar resbalarse
        bajo las cobijas y ahogarse, en la misma habitación con sus padres.
        {'\n\n'}
        👶🏼 No fumar en la habitación del bebé.{'\n\n'}
        👶🏼 No colocarlo en el pecho de los padres cansados o bajo efectos del
        alcohol y/o drogas.{'\n\n'}
      </Text>
      <Image style={style.image} source={bebedormido} />
      <Text>Imagen tomada de diezminutos.es{'\n'}</Text>
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

export default CN6;
