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

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};


function ViewNeo(props) {
  const [webcamActive, setWebcamActive] = useState(false);
  const [roomId, setRoomId] = useState(props.callId);
  const [copiedText, setCopiedText] = useState('');

  // const pc = useRef();
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const pc = useRef();

  const copyToClipboard = () => {
    Clipboard.setString(roomId);
  };

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
      audio: false,
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

    if (props.mode === 'join') {
      const callDoc = firebase.db.collection('neonatalview').doc(props.callId);
      const asnwerCandidates = callDoc.collection('asnwerCandidates');
      const offerCandidates = callDoc.collection('offerCandidates');

      pc.current.onicecandidate = event => {
        event.candidate && asnwerCandidates.add(event.candidate.toJSON());
      };

      const callData = (await callDoc.get()).data();

      const offerDescription = callData.offer;
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

      offerCandidates.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
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
      props.setPage('viewNeo')
    }
  };

  // if (!remoteStream) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Esperando Imagen</Text>
  //     </View>
  //   );
  // }

  if (remoteStream) {
    console.log(remoteStream)
    return (
      <View style={styles.container}>
        <View style={styles.vContainer}>
          <RTCView
          objectFit={'cover'}
          style={styles.video}
          mirror
          streamURL={remoteStream.toURL()}
        />
        </View>
        <TouchableOpacity onPress={hangUp} style={styles.buttonContainer}>
          <Text style={{ fontWeight: 'bold' }}>Terminar</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
  <Button onPress={setupSources} title="Start" />
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  vContainer:{
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: 550,
    top: 0
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
  buttonContainer : {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: '40%',
    backgroundColor: '#F94144',
    alignItems: "center",
    width: '50%',
    height: '5%',
    borderRadius: 10,
  },
});

export default ViewNeo;
