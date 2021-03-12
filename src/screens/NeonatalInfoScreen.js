import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Colors from '../res/Colors';
import user from '../assets/images/user.png';
import ShowValue from '../components/ShowValue';

import {Avatar} from 'react-native-elements';

const NeonatalInfoScreen = () => {
  return (
    <ScrollView style={style.scrollContainer}>
      <View style={style.avatarContainer}>
        <Avatar
          size="xlarge"
          rounded
          title="CR"
          activeOpacity={0.7}
          source={{
            uri:
              'https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg',
          }}
        />
      </View>
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
  avatarContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default NeonatalInfoScreen;
