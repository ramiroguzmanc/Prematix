import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Avatar} from 'react-native-elements';
import fontConfig from '../res/fontConfig';

const NeonatalInfoScreen = (props) => {
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
      <Text>{props.route.params.neoId}</Text>
      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>Nombres:</ListItem.Title>
          <ListItem.Title></ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>Apellidos:</ListItem.Title>
          <ListItem.Title></ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>Fecha Nacimiento:</ListItem.Title>
          <ListItem.Title></ListItem.Title>
          <ListItem.Title></ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>IMC:</ListItem.Title>
          <ListItem.Title></ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>
            Perímetro Craneal:
          </ListItem.Title>
          <ListItem.Title></ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>Peso:</ListItem.Title>
          <ListItem.Title></ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>Altura:</ListItem.Title>
          <ListItem.Title></ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
  },
  avatarContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    ...fontConfig.p,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default NeonatalInfoScreen;
