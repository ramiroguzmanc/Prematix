import React from 'react'
import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native';

const LoadingVideo = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView source={require('../assets/loading.json')} autoPlay loop />
    </View>
  )
}

export default LoadingVideo

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    marginTop: '87%'
  }
})
