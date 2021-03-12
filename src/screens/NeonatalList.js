import React, {useEffect, useState} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import firebase from '../utils/firebase';
import {ListItem, Avatar} from 'react-native-elements';
import ContainerConfig from '../res/ContainerConfig';
import fontConfig from '../res/fontConfig';
import 'firebase/auth';
import 'react-native-vector-icons';

const NeonatalList = (props) => {
  const [neonatos, setNeonatos] = useState([]);
  const [loading, setLoading] = useState(false);

  //const getUsers = () => {
  // firebase.db.collection('users').onSnapshot((querySnapshot) => {
  //   querySnapshot.docs.forEach((doc) => {
  //     console.log(doc.data());
  //     console.log(querySnapshot);
  //   });
  // });
  //};

  useEffect(() => {
    const userEmail = firebase.firebase.auth().currentUser.email;
    setLoading(true);
    firebase.db
      .collection('users')
      .doc(userEmail)
      .collection('neonatos')
      .onSnapshot((querySnapshot) => {
        const neonatos = [];
        querySnapshot.docs.forEach((doc) => {
          //console.log("Current data:",doc.data());
          const {IMC, PC, born, height, lastname, name, weight} = doc.data();
          neonatos.push({
            id: doc.id,
            IMC,
            PC,
            born,
            height,
            lastname,
            name,
            weight,
          });
        });
        //  console.log(neonatos);
        setLoading(false);
        setNeonatos(neonatos);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading == true ? (
        <Text style={styles.p}>Cargando...</Text>
      ) : (
        <Text style={styles.p}>Seleccione un neonato:</Text>
      )}
      {neonatos.map((neo) => {
        console.log('Neo', neo);
        return (
          <ListItem
            key={neo.id}
            style={styles.listItem}
            onPress={() =>
              props.navigation.navigate('NeonatalInfoScreen', {
                neoId: neo.id,
              })
            }>
            <Avatar
              rounded
              size="medium"
              title={'N'}
              source={{
                uri: '#',
                //'https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg',
              }}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.p}>
                {neo.name} {neo.lastname}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.subp}>
                Peso: {neo.weight} - IMC: {neo.IMC} - Altura: {neo.height}
              </ListItem.Subtitle>
            </ListItem.Content>
            {/* <ListItem.Chevron color="black" /> */}
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...ContainerConfig.pplContainer,
  },
  listItem: {
    borderWidth: 1,
    borderColor: 'transparent',
    marginVertical: 7,
  },
  p: {
    ...fontConfig.p,
    fontWeight: 'bold',
  },
  subp: {
    fontSize: 17,
  },
});

export default NeonatalList;
