import { View, Text } from 'react-native';
import React, { useRef, useState, useContext } from 'react';
import { Video } from 'expo-av';
// Context
import { ItemContext } from '../Context/Context';

const VideoPlayer = ({ video }) => {

   // context
   // const { video } = useContext(ItemContext);

   const videoRef = useRef(null);
   const [status, setStatus] = useState({})

   return (
      <Video
         key={index}
         ref={videoRef}
         source={{
            // uri: item.src
         }}   //require('../assets/video/video2.mp4')
         style={{ width: '100%', height: '100%' }}
         shouldPlay={true}
         resizeMode='cover'
         isLooping={false}
         onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
   );
};

export default VideoPlayer;