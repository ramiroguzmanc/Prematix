import React, { useRef, useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import firebase from '../utils/firebase';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  RTCPeerConnection,
  mediaDevices,
  RTCView,
  RTCSessionDescription,
  RTCIceCandidate,
} from 'react-native-webrtc';
import LoadingVideo from './LoadingVideo';

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

function VideoCall(props) {
  const [webcamActive, setWebcamActive] = useState(false);
  const [roomId, setRoomId] = useState(props.callId);
  const [copiedText, setCopiedText] = useState('');

  // const pc = useRef();
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const pc = useRef();

  const setupSources = async () => {
    pc.current = new RTCPeerConnection(servers);
    let isFront = true;
    const sourceInfos = await mediaDevices.enumerateDevices();
    let videoSourceId;
    for (let i = 0; i < sourceInfos.length; i++) {
      const sourceInfo = sourceInfos[i];
      if (
        sourceInfo.kind === 'videoinput' &&
        sourceInfo.facing === (isFront ? 'front' : 'environment')
      ) {
        videoSourceId = sourceInfo.deviceId;
      }
    }
    const stream = await mediaDevices.getUserMedia({
      audio: true,
      video: {
        width: 640,
        height: 480,
        frameRate: 30,
        facingMode: isFront ? 'user' : 'environment',
        deviceId: videoSourceId,
      },
    });

    if (stream) {
      setLocalStream(stream);
      pc.current.addStream(stream);
      console.log('Local Stream on');
      console.log(typeof stream);
    }

    pc.current.onaddstream = e => {
      setRemoteStream(e.stream);
      console.log('Remote stream on');
    };

    if (props.mode === 'create') {
      console.log('call created');
      const callDoc = firebase.db.collection('calls').doc();
      const offerCandidates = callDoc.collection('offerCandidates');
      const answerCandidates = callDoc.collection('answerCandidates');

      setRoomId(callDoc.id);
      console.log(`room Id ${callDoc.id}`);

      pc.current.onicecandidate = event => {
        event.candidate && offerCandidates.add(event.candidate.toJSON());
      };

      const offerDescription = await pc.current.createOffer();
      await pc.current.setLocalDescription(offerDescription);

      const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
      };

      await callDoc.set({ offer });

      callDoc.onSnapshot(snapshot => {
        const data = snapshot.data();
        if (!pc.current.remoteDescription && data?.answer) {
          const answerDescription = new RTCSessionDescription(data.answer);
          pc.current.setRemoteDescription(answerDescription);
        }
      });

      answerCandidates.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            const candidate = new RTCIceCandidate(change.doc.data());
            pc.current.addIceCandidate(new RTCIceCandidate(candidate));
          }
        });
      });
    } else if (props.mode === 'join') {
      console.log(props.callId)
      const callDoc = firebase.db.collection('calls').doc(props.callId);
      const asnwerCandidates = callDoc.collection('asnwerCandidates');
      const offerCandidates = callDoc.collection('offerCandidates');

      pc.current.onicecandidate = event => {
        event.candidate && asnwerCandidates.add(event.candidate.toJSON());
      };

      const callData = (await callDoc.get()).data();

      const offerDescription = callData.offer;

      console.log(offerDescription)
      await pc.current.setRemoteDescription(
        new RTCSessionDescription(offerDescription),
      );

      const answerDescription = await pc.current.createAnswer();
      await pc.current.setLocalDescription(answerDescription);

      const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp,
      };

      await callDoc.update({ answer });

      console.log(answer)

      offerCandidates.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            console.log('agregado')
            // const candidate = new RTCIceCandidate(change.doc.data());
            // pc.current.addIceCandidate(new RTCIceCandidate(candidate));
            let data = change.doc.data();
            pc.current.addIceCandidate(new RTCIceCandidate(data));
          }
        });
      });
    }

    pc.current.onconnectionstatechange = event => {
      if (pc.current.connectionState === 'disconnected') {
        hangUp();
      }
    };
  };

  const copyToClipboard = () => {
    console.log('Codigo copiado')
    Clipboard.setString(roomId);
  };

  const hangUp = async () => {
    pc.current.close();

    if (roomId) {
      let roomRef = firebase.db.collection('calls').doc(roomId);
      await roomRef
        .collection('answerCandidates')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete();
          });
        });
      await roomRef
        .collection('offerCandidates')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete();
          });
        });
      await roomRef.delete();
      console.log('Salí')
      props.setPage('home')
    }
  };

  if (localStream && !remoteStream) {
    {console.log('estoy aqui')}
    return (
      <View style={{ height: '100%', alignItems: 'center' }}>
        <View style={styles.vContainer}>
          <RTCView
          style={styles.videoLocalE}
          mirror
          objectFit={'cover'}
          streamURL={localStream.toURL()}
        />
        </View>
        
        <TouchableOpacity onPress={copyToClipboard()} style={styles.buttonContainer}>
          <Text style={{ fontWeight: 'bold' }}>Copiar Código</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>Esperando Respuesta</Text>
        </View>
          <LoadingVideo />
      </View>
    );
  }else if (localStream && remoteStream) {
    {console.log('entré')}
    return (
      <View style={styles.container}>
        <View>
        <RTCView
          style={styles.videoRemote}
          objectFit={'cover'}
          mirror
          streamURL={remoteStream.toURL()}
        />
        </View>
        <View>
          <RTCView
          style={styles.videoLocal}
          objectFit={'cover'}
          mirror
          streamURL={localStream.toURL()}
        />
        </View>
        <Button style={styles.button} onPress={hangUp} title="Colgar" />
      </View>
    );
  }

  return <Button onPress={setupSources} title="Start" />;
  // <SafeAreaView style={{flex: 1}}>
  //   <View style={styles.containerclip}>
  //     <TouchableOpacity onPress={copyToClipboard}>
  //       <Text>Click here to copy to Clipboard</Text>
  //     </TouchableOpacity>
  //   </View>
  // </SafeAreaView>
  // {!webcamActive && (
  //   <View style={styles.container_home}>
  //     <Button
  //       onPress={() => props.setPage('home')}
  //       style={styles.secundary}
  //       title="Cancel"
  //     />
  //
  //   </View>
  // )}
}

const styles = StyleSheet.create({
  vContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  container:{
    height: '100%',
    borderColor: 'red',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  videoLocalE: {
    position: 'absolute',
    width: '100%',
    height: 500,
    top: 0
  },
  buttonContainer : {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: '40%',
    backgroundColor: '#5D68F8',
    alignItems: "center",
    width: '50%',
    height: '5%',
    borderRadius: 10,
  },
  containerclip: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoRemote: {
    position: 'absolute',
    width: '100%',
    height: 720,
    top: 0,
    left:0,
    right: 0,
    bottom: 0,
  },
  videoLocal: {
    position: 'absolute',
    width: '60%',
    height: 300,
    left: 0,
  },
  highlight: {
    fontWeight: '700',
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    bottom: 100,
  },
  button: {
    position: 'absolute',
    bottom: 0,
  }
});

export default VideoCall;
