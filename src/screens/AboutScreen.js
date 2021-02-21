import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';
import fontConfig from '../res/fontConfig';

const AboutScreen = () => {
  return (
    <ScrollView style={style.container}>
      <View style={style.sectionContainer}>
        <Text style={style.title}>PREMATIX (BETA)</Text>
        <Text style={style.p}>
          La presente aplicación es el resultado del proyecto de tesis: DISEÑO Y
          DESARROLLO DE UNA APLICACIÓN MÓVIL PARA LA ATENCIÓN EN SALUD EN RECIÉN
          NACIDOS PREMATUROS EN LOS SERVICIOS DE UTIN, NEONATOS Y LACTANTES DE
          UNA INSTITUCIÓN DE SALUD DE MONTERÍA. Proyecto interdisciplinario
          realizado por los semilleros de investigación GNOXIS y -- de la
          Universidad del Sinú sede Montería.
        </Text>
      </View>
      <View style={style.sectionContainer}>
        <Text style={style.title}>Integrantes grupo GNOXIS</Text>
        <Text style={style.p}>
          Ramiro Guzmán Cabrera{'\n'}Cristian Castillo Álvarez{'\n'}Sergio Pérez
          Arrieta
          {'\n'}Juan Torres Tovio (Asesor)
        </Text>
      </View>
      <View style={style.sectionContainer}>
        <Text style={style.title}>Integrantes grupo --</Text>
        <Text style={style.p}>
          Jemima Cassares Guarnizo{'\n'}
          Carolina Castellanos (Asesora)
        </Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    ...ContainerConfig.pplContainer,
    backgroundColor: 'white',
  },
  sectionContainer: {
    ...ContainerConfig.sectionContainer,
  },
  title: {
    ...fontConfig.title,
    color: Colors.rosa,
  },
  p: {
    ...fontConfig.p,
  },
});

export default AboutScreen;
