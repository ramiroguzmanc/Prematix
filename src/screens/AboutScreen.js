import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import ContainerConfig from '../res/ContainerConfig';
import fontConfig from '../res/fontConfig';

const AboutScreen = () => {
  return (
    <ScrollView style={style.container}>
      <View style={style.sectionContainer}>
        <Text style={style.title}>PREMATIX (BETA)</Text>
        <Text style={style.p}>
          Prematix vesión BETA.{'\n'}Proyecto de Tesis semilleros de
          investigación GNOXIS y de la Universidad del Sinú sede Montería.
        </Text>
      </View>
      <View>
        <Text style={style.title}>Integrantes</Text>
        <Text style={style.p}>
          Ramiro Guzmán Cabrera{'\n'}Cristian Castillo Álvarez{'\n'}Sergio Pérez
          Arrieta
        </Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    ...ContainerConfig.pplContainer,
  },
  sectionContainer: {
    ...ContainerConfig.sectionContainer,
  },
  title: {
    ...fontConfig.title,
  },
  p: {
    ...fontConfig.p,
  },
});

export default AboutScreen;
