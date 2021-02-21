import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';

const AnswerScreen = (props) => {
  const info = props.route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {info.title}
        {'\n'}
      </Text>
      <Text style={styles.p}>
        {info.answer}
        {'\n'}
      </Text>
      <Text>Información recopilada de: {info.font}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...ContainerConfig.pplContainer,
    backgroundColor: 'white',
  },
  title: {
    ...fontConfig.title,
    color: Colors.rosaBorder,
  },
  p: {
    ...fontConfig.p,
  },
});

export default AnswerScreen;
