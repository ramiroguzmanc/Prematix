import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';

const CN4 = () => {
  return (
    <ScrollView style={style.Container}>
      <Text style={style.title}>Cuidados con la piel</Text>
      <Text style={style.p}>
        👶🏼 La piel del niño es muy delicada, y tiene al nacer una grasa blanca,
        que no debe retirar, pues se cae sola. En ocasiones el bebé puede
        presentar un brote pequeño y de color rojo en la piel que desaparecerá
        solo. Pero si este tiene pus o materia, debe consultar al médico.
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

export default CN4;
