import React, { useState } from 'react';
import axios from 'axios';
import { speak, isSpeakingAsync, stop } from 'expo-speech';
import ChatBubble from './ChatBubble';
import { ActivityIndicator, FlatList, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

const ChatBot = () => {
   const [chat, setChat] = useState([]);
   const [input, setInput] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [isSpeaking, setIsSpeaking] = useState(false);

   API_KEY = 'AIzaSyBUXx-ImDgnfjL6wtQBxjFWPyt8ERe2uWM';

   const handleInput = async () => {
      const updatedChat = [
         ...chat,
         {
            role: 'user',
            part: [{ text: input }],
         },
      ];
      setLoading(true);
      try {
         const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
            {
               contents: updatedChat
            }
         );
         console.log('Gamini response: ' + JSON.stringify(response.data));
         const modelResponse =
            response.data?.candidates ?.[0]?.content ?.parts?.[0] ?.text || "";

            if(modelResponse){
               updatedChatWithModel = [
                  ...updatedChat,
                  {
                     role: 'model',
                     part: [{ text: modelResponse }],
                  }
               ];
               setChat(updatedChatWithModel);
               setInput('');
            }
      } catch (error) {
         console.log('err calling Gemini: ', error);
         console.log('err response: ', error.response);
         setError('Try again');
      } finally{
         setLoading(false);
      }
   };

   const handleSpeech = async (text) =>{
      if (isSpeaking) {
         stop();
         setIsSpeaking(false);
      } else {
         if(!(await isSpeakingAsync())) {
            speak(text);
            isSpeaking(true);
         }
      }
   };

   const renderItem = ({item}) => {
      return(
         <ChatBubble 
            role={item.role}
            text={item.parts[0].text}
            onSpeech={() => handleSpeech(item.parts[0].text)}
         />
      )
   }
   return (
      <View style={{height: 600}}>
         <FlatList 
            data={chat}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.chatContainer}
         />
         <View style={styles.inputContainer}>
            <TextInput 
               style={styles.input}
               value={input}
               onChangeText={setInput}
            />
            <TouchableOpacity onPress={handleInput}>
               <Text>Send</Text>
            </TouchableOpacity>
         </View>
         {loading && <ActivityIndicator style={styles.loading} /> }
         {error && <Text style={styles.loading} >{error}</Text> }
      </View>
   )
};

export default ChatBot;

const styles = StyleSheet.create({
   chatContainer:{
      flex: 1,
      padding: 10,
      backgroundColor: '#f8f8f8',
      height: 500,
      width: 'auto'
   },
})