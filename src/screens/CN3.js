import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';
import vestir from '../assets/images/vestirbebe.jpg';

const CN3 = () => {
  return (
    <ScrollView style={style.Container}>
      <Text style={style.title}>Vestido y cambio de pañal</Text>
      <Text style={style.p}>
        👶🏼 Colocar ropa ancha y cómoda, de material suave y preferiblemente de
        algodón.
        {'\n\n'}
        👶🏼 Evitar lastimarle los dedos al vestirlo.{'\n\n'}
        👶🏼 Lavar ropa con jabón neutro, separada de la ropa familiar.{'\n\n'}
        👶🏼 Cambiar el pañal regularmente.{'\n\n'}
        👶🏼 Lavar con agua tibia las nalgas, entre piernas y debajo de los
        testículos. Si es niño retraer suavemente la piel que cubre el pene y en
        la niña limpiar de adelante hacia atrás separando los labios, para
        evitar las infecciones. Secar bien con toques suaves.{'\n\n'}
        👶🏼 Si necesita cremas protectoras para evitar las quemaduras por orina,
        en las niñas no untar al interior de los genitales.{'\n\n'}
        👶🏼 No coloque en la piel aceites, talcos o sustancias.
      </Text>
      <Image style={style.image} source={vestir} />
      <Text>Imagen tomada de elblogdetubebe.com{'\n'}</Text>
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

export default CN3;
