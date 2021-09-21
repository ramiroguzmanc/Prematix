import React, { useState } from 'react';
import { Button, View, TextInput } from 'react-native';
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
    <View className="home">
      <View className="create box">
        <Button onPress={() => props.setPage('create')} title="Crear Llamada" />
      </View>

      <View className="answer box">
        <TextInput
          value={props.joinCode}
          onChangeText={text => props.setJoinCode(text)}
          placeholder="Join with code"
        />
        <Button onPress={() => props.setPage('join')} title="Answer" />
      </View>
    </View>
  );
}

export default ContactPedia;
