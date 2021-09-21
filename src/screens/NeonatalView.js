import React,{useState} from 'react'
import { Button, View, TextInput } from 'react-native';
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
    <View className="viewNeo">
      <View className="answer box">
        <TextInput
          value={props.joinCode}
          onChangeText={text => props.setJoinCode(text)}
          placeholder="Join with code"
        />
        <Button onPress={() => props.setPage('join')} title="Answer" />
      </View>
    </View>
  )
}


export default NeonatalView;
