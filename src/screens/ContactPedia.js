import React, { useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import VideoCall from '../components/VideoCall';

const ContactPedia = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [joinCode, setJoinCode] = useState('');

  return (
    <View>
      {currentPage === 'home' ? (
        <Menu
          joinCode={joinCode}
          setJoinCode={setJoinCode}
          setPage={setCurrentPage}
        />
      ) : (
        <VideoCall mode={currentPage} callId={joinCode} setPage={setCurrentPage} />
      )}
    </View>
  );
}

function Menu(props) {
  return (
    <View className="home" style={style.sectionContainer}>
      <View className="create box" style={style.buttonContainer}>
        <Button onPress={() => props.setPage('create')} title="Crear Llamada"/> 
      </View>

      <View className="answer box" style={style.container}>
        <TextInput
          style={style.input}
          value={props.joinCode}
          onChangeText={text => props.setJoinCode(text)}
          placeholder="Join with code"
        />
        <Button onPress={() => props.setPage('join')} title="Responder Llamada" color="green" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: '80%',
    marginHorizontal: 60,
  },
  sectionContainer: {
    marginTop: '20%',
  },
  buttonContainer: {
    marginHorizontal: 60,
    borderRadius: 10
  },
  button: {
    borderRadius: 10,
    height: 80,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});

export default ContactPedia;
