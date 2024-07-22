import { ActivityIndicator, Dimensions, FlatList, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// Icon
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
// Components
import ChatBot from '../../../Components/ChatBot/ChatBot';
// Chat bot
import axios from 'axios';
import { speak, isSpeakingAsync, stop } from 'expo-speech';
import ChatBubble from '../../../Components/ChatBot/ChatBubble';

const ChatAI = ({ navigation }) => {

   // const ChatBot = () => {
   const [chat, setChat] = useState([]);
   const [input, setInput] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [isSpeaking, setIsSpeaking] = useState(false);

   const API_KEY = 'AIzaSyBUXx-ImDgnfjL6wtQBxjFWPyt8ERe2uWM';

   const handleInput = async () => {
      let updatedChat = [
         ...chat,
         {
            role: 'user',
            parts: [{ text: input }],
         },
      ];

      setLoading(true);

      try {
         const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
            {
               contents: updatedChat,
            }
         );
         console.log('Gemini response: ' + JSON.stringify(response.data));

         const modelResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

         if (modelResponse) {
            const updatedChatWithModel = [
               ...updatedChat,
               {
                  role: 'model',
                  parts: [{ text: modelResponse }],
               }
            ];
            setChat(updatedChatWithModel);
            setInput('');
         }
         // console.log('bot: ', JSON.stringify(chat));
      } catch (error) {
         console.log('err calling Gemini: ', error);
         console.log('err response: ', error.response);
         setError('Try again');
      } finally {
         setLoading(false);
      }
   };

   const handleSpeech = async (text) => {
      if (isSpeaking) {
         stop();
         setIsSpeaking(false);
      }
      else if (!(await isSpeakingAsync())) {
         speak(text);
         isSpeaking(true);
      }

   };

   const renderItem = ({ item }) =>
      <ChatBubble
         role={item.role}
         text={item.parts[0].text}
         onSpeech={() => handleSpeech(item.parts[0].text)}
      />

   return (
      <SafeAreaView style={styles.safeView}>

         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.gradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0.5, y: 1 }}
         >
            <View style={styles.navbarTop}>
               <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 0 }}>
                  <AntDesign name="arrowleft" size={25} color="black" />
               </TouchableOpacity>

               <Text style={styles.text}>GenTech</Text>

               <TouchableOpacity style={{ marginLeft: 0 }}>
                  <Entypo name="dots-three-vertical" size={22} color="black" />
               </TouchableOpacity>

            </View>

            {/* <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexDirection: 'column-reverse' }}> */}
               {/* <View style={{height: '82%'}}> */}
               <FlatList
                  data={chat}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={styles.chatContainer}
               />
               {/* </View> */}
            {/* </ScrollView> */}

            {error === true && <Text style={styles.loading} >{error}</Text>}

            <View style={styles.chatInputContainer} >
               <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={0}>

                  <View style={styles.chatInputWrap}>
                     <TouchableOpacity style={{ marginLeft: 17 }} >
                        <Feather name="camera" size={24} color="black" />
                     </TouchableOpacity>

                     <TextInput
                        style={styles.chatInput}
                        placeholder='Enter message'
                        value={input}
                        onChangeText={setInput}
                     />

                     {loading === true ? (<ActivityIndicator style={{ marginRight: 20 }} />)
                        : (<TouchableOpacity style={{ marginRight: 17 }} onPress={handleInput} >
                           <Feather name="send" size={24} color="black" />
                        </TouchableOpacity>)
                     }
                  </View>

               </KeyboardAvoidingView>
            </View>
         </LinearGradient>

      </SafeAreaView>
   )
}

export default ChatAI;

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,

   },
   gradient: {
      flex: 1,
   },

   // navbar
   navbarTop: {
      // borderWidth: 1,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10
   },
   text: {
      fontSize: 15,
      fontWeight: 'bold',
   },

   // chat input
   chatInputContainer: {
      height: 70,
      justifyContent: 'center',
      // borderWidth: 1
   },
   chatInputWrap: {
      height: 55,
      width: 330,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: 'center',
      justifyContent: "space-evenly",
      borderWidth: 1,
      borderRadius: 30,
      // marginBottom: 10
   },
   chatInput: {
      // placeholderTextColor
      fontSize: 15,
      fontWeight: "400",
      paddingHorizontal: 5,
      width: 240,
   },

   // Chat ai
   chatContainer: {
      // height: 1000,
      width: '100%',
      flex: 1,
      // borderWidth: 1,
      justifyContent: 'flex-end',
      padding: 10
   }
})