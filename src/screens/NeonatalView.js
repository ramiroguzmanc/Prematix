import React,{useState} from 'react'
import { Button, View, StyleSheet, TextInput } from 'react-native';
import ViewNeo from '../components/ViewNeo'

const NeonatalView = () => {
  const [currentPage, setCurrentPage] = useState('viewNeo');
  const [joinCode, setJoinCode] = useState('');

  return (
    <View>
      {currentPage === 'viewNeo' ? (
        <Menu
          joinCode={joinCode}
          setJoinCode={setJoinCode}
          setPage={setCurrentPage}
        />
      ) : (
        <ViewNeo mode={currentPage} callId={joinCode} setPage={setCurrentPage} />
      )}
    </View>
  )
  
}

function Menu(props) {
  return (
    <View className="answer box" style={style.container}>
        <TextInput
          style={style.input}
          value={props.joinCode}
          onChangeText={text => props.setJoinCode(text)}
          placeholder="Join with code"
        />
        <Button onPress={() => props.setPage('join')} title="Entrar a la sala" color="pink" />
    </View>
  )
}

const style = StyleSheet.create({
sectionContainer: {
    marginTop: '60%',
  },
  buttonContainer: {
    marginHorizontal: 60,
    borderRadius: 10
  },
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    marginHorizontal: 60,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});

export default NeonatalView;
