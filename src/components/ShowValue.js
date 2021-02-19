import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';
import Colors from '../res/Colors';
import fontConfig from '../res/fontConfig';

const ShowValue = (props) => {
  return (
    <View style={style.infoContainer}>
      <Text style={style.text}>{props.title}</Text>
      <TextInput
        style={style.input}
        editable={false}
        placeholder={props.place}
      />
      <Text style={style.text}>{props.measure}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    // marginVertical: 8,
    paddingVertical: 10,
  },
  text: {
    fontSize: fontConfig.p.fontSize,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    height: '80%',
    width: '65%',
    borderRadius: 7,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 18,
  },
});

export default ShowValue;
