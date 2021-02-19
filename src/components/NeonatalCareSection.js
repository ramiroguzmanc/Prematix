import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fontConfig from '../res/fontConfig';

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
  title: fontConfig.title,
  p: fontConfig.p,
});

export default NeonatalCareScreen;
