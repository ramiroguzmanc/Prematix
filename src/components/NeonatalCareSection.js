import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NeonatalCareScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.p}>{props.contain}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  p: {
    fontSize: 20,
  },
});

export default NeonatalCareScreen;
