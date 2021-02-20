import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';

const CN8 = () => {
  return (
    <ScrollView style={style.Container}>
      <Text style={style.title}>Lactancia materna</Text>
      <Text style={style.p}>
        La leche materna es el alimento ideal y exclusivo durante los primeros 6
        meses de vida del bebé, ya que ayuda:{'\n'}
      </Text>
      <Text style={style.title}>Al bebé...</Text>
      <Text style={style.p}>
        👶🏼 Es la primera vacuna porque trasmite defensas.{'\n\n'}
        👶🏼 Aporta nutrientes y lo protege de infecciones del instestino y
        pulmones.{'\n\n'}
        👶🏼 Favorece la maduración del cerebro y el desarrollo de la
        inteligencia.{'\n\n'}
        👶🏼 Favorece el vínculo entre padres e hijo.{'\n'}
      </Text>
      <Text style={style.title}>A la mamá...</Text>
      <Text style={style.p}>
        👶🏼 Es económica, sin bacterias y está a temperatura ideal.{'\n\n'}
        👶🏼 Ayuda a la recuperación del tamaño de la matriz.{'\n\n'}
        👶🏼 Disminuye el riesgo de sangrado.{'\n\n'}
        👶🏼 Favorece la pérdida de peso.{'\n\n'}
        👶🏼 Disminuye la aparición de cáncer de seno y ovario.{'\n\n'}
        👶🏼 Produce sentimientos de bienestar.{'\n\n'}
        👶🏼 Evita hincazón y dolor de los senos.{'\n'}
      </Text>
      <Text style={style.title}>Técnicas de amamantamiento...</Text>
      <Text style={style.p}>
        👶🏼 Lavarse las manos.{'\n\n'}
        👶🏼 Despertarlo para comer.{'\n\n'}
        👶🏼 Posición cómoda para la madre y el bebé.{'\n\n'}
        👶🏼 Ofrecer el seno al bebé introduciendo el pezón y la mitad de la zona
        oscura.{'\n\n'}
        👶🏼 Dejarlo tomar hasta que desocupe el seno.{'\n\n'}
        👶🏼 No retirar bruscamente el seno.{'\n\n'}
        👶🏼 Sacarle gases evitando movimientos bruscos.{'\n'}
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

export default CN8;
