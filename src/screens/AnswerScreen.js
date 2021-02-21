import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import fontConfig from '../res/fontConfig';
import Colors from '../res/Colors';
import ContainerConfig from '../res/ContainerConfig';

const AnswerScreen = (props) => {
  const info = props.route.params;
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {info.title}
          {'\n'}
        </Text>
        {/* <Text style={styles.p}>
          {info.answer}
          {'\n'}
        </Text> */}
        {info.font && <Text>Información recopilada de: {info.font}</Text>}
        {info.children}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
  },
  container: {
    ...ContainerConfig.pplContainer,
    backgroundColor: 'white',
  },
  title: {
    ...fontConfig.title,
    color: Colors.rosaBorder,
    alignSelf: 'center',
  },
  p: {
    ...fontConfig.p,
  },
});

export default AnswerScreen;
