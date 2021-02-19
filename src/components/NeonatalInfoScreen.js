import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import Colors from '../res/Colors';
import user from '../assets/images/user.png';
import ShowValue from './ShowValue';

const NeonatalInfoScreen = () => {
  return (
    <ScrollView style={style.scrollContainer}>
      <Image source={user} style={style.image} />
      <ShowValue title="Fec. Nac:" place="DD/MM/AA" />
      <ShowValue title="Peso:" place="kg." measure="kg." />
      <ShowValue title="Altura:" place="Cm" measure="Cm." />
      <ShowValue title="IMC" place="Índice Masa Corporal" />
      <ShowValue title="P. craneal" place="Perímetro craneal" measure="Cm" />
      <ShowValue title="Madre" place="Madre" />
      <ShowValue title="Padre" place="Padre" />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Colors.azul,
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 100,
    margin: 30,
  },
});

export default NeonatalInfoScreen;
