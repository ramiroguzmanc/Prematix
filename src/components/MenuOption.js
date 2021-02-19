import React from 'react';
import {Pressable, Text, StyleSheet, Image} from 'react-native';
import fontConfig from '../res/fontConfig';

const MainMenuOption = (props) => {
  const handlePress = () => {
    props.navigation.navigate(props.goTo);
  };
  return (
    <Pressable style={styles.optionContainer} onPress={handlePress}>
      {props.source && <Image style={styles.image} source={props.source} />}
      <Text style={styles.optionText}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '80%',
    padding: '3%',
    borderRadius: 8,
    margin: 10,
  },
  optionText: {
    fontSize: fontConfig.p.fontSize,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default MainMenuOption;
