import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';
import pos1 from '../assets/images/pos1.png';
import pos2 from '../assets/images/pos2.png';
import pos3 from '../assets/images/pos3.png';
import pos4 from '../assets/images/pos4.png';

const CN9 = () => {
  return (
    <ScrollView style={style.Container}>
      <Text style={style.title}>Posiciones de amamantamiento</Text>
      <Text style={style.p}>
        👶🏼 Postura sentada posición "de cuna" (vientre con vientre)
      </Text>
      <Image style={style.image} source={pos1} />
      <Text>
        Imagen tomada de folleto cuidado en el posparto a la madre y el recién
        nacido. Grupo académico perinatal UNAL{'\n'}
      </Text>
      <Text style={style.p}>
        👶🏼 Postura sentada posición "de cuna" cruzada (vientre con vientre)
      </Text>
      <Image style={style.image} source={pos2} />
      <Text>
        Imagen tomada de folleto cuidado en el posparto a la madre y el recién
        nacido. Grupo académico perinatal UNAL{'\n'}
      </Text>
      <Text style={style.p}>
        👶🏼 Postura sentada posición "de rugby" (fútbol americano)
      </Text>
      <Image style={style.image} source={pos3} />
      <Text>
        Imagen tomada de folleto cuidado en el posparto a la madre y el recién
        nacido. Grupo académico perinatal UNAL{'\n'}
      </Text>
      <Text style={style.p}>
        👶🏼 Postura estirada posición recostada de lado
      </Text>
      <Image style={style.image} source={pos4} />
      <Text>
        Imagen tomada de folleto cuidado en el posparto a la madre y el recién
        nacido. Grupo académico perinatal UNAL{'\n'}
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

export default CN9;
