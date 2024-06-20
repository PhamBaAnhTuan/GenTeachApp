import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={{height: 80, aspectRatio: 2}}>
        <LottieView style={{flex: 1}} source={require('../assets/Icon/loading.json')} autoPlay loop />
    </View>
  )
}

export default Loading