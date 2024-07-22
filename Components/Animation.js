import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

export const Loading = () => {
  return (
    <View style={{height: 80, aspectRatio: 2}}>
        <LottieView style={{flex: 1}} source={require('../assets/animation/loading.json')} autoPlay loop />
    </View>
  )
};

export const Hello = () => {
  return(
    <View style={{height: 300, width: 300, alignSelf: 'center'}}>
        <LottieView style={{flex: 1}} source={require('../assets/animation/hello.json')} autoPlay loop />
    </View>
  )
};

export const AI = () => {
  return(
    <View style={{height: 70, width: 70, alignSelf: 'center'}}>
        <LottieView style={{flex: 1}} source={require('../assets/animation/robot.json')} autoPlay loop />
    </View>
  )
};

export const Expert = () => {
  return(
    <View style={{height: 100, width: 100, alignSelf: 'center'}}>
        <LottieView style={{flex: 1}} source={require('../assets/animation/expert.json')} autoPlay loop />
    </View>
  )
};