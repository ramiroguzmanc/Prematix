import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, Text, Button} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Avatar} from 'react-native-elements';
import fontConfig from '../res/fontConfig';
import firebase from '../utils/firebase';
import 'firebase/auth';

const NeonatalInfoScreen = (props) => {
  const [neonato, setNeonato] = useState({
    docId: props.route.params.neoId,
    name: '',
    lastname: '',
    born: '',
    IMC: '',
    PC: '',
    weight: '',
    height: '',
  });

  useEffect(() => {
    const userEmail = firebase.firebase.auth().currentUser.email;

    firebase.db
      .collection('users')
      .doc(userEmail)
      .collection('neonatos')
      .doc(neonato.docId)
      .get()
      .then((doc) => {
        //console.log(doc.data());
        const {name, lastname, IMC, PC, born, height, weight} = doc.data();
        setNeonato({
          ...neonato,
          name,
          lastname,
          IMC,
          PC,
          born,
          height,
          weight,
        });
      });
  }, []);

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
      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>Nombres:</ListItem.Title>
          <ListItem.Title style={style.p}>{neonato.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>Apellidos:</ListItem.Title>
          <ListItem.Title style={style.p}>{neonato.lastname}</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>Fecha Nacimiento:</ListItem.Title>
          <ListItem.Title style={style.p}>{neonato.born}</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>IMC:</ListItem.Title>
          <ListItem.Title style={style.p}>{neonato.IMC}</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>
            Perímetro Craneal:
          </ListItem.Title>
          <ListItem.Title style={style.p}>{neonato.PC}</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>Peso:</ListItem.Title>
          <ListItem.Title style={style.p}>{neonato.weight} lbs.</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={style.content}>
          <ListItem.Title style={style.title}>Altura:</ListItem.Title>
          <ListItem.Title style={style.p}>{neonato.height} cm</ListItem.Title>
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
  p: {
    ...fontConfig.p,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default NeonatalInfoScreen;
