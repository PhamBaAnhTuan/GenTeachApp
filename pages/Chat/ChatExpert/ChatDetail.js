import React, { useEffect, useRef, useState, useContext } from 'react';
import {
View, Text, SafeAreaView, Image, TouchableOpacity, 
TextInput, ScrollView, KeyboardAvoidingView, Button 
} from 'react-native';
import styles from '../styles';
// Route get params
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
// Icon
import { AntDesign, Ionicons, Feather, Entypo } from '@expo/vector-icons';
// Context
import { UserListContext } from '../../../Context/Context';

const ChatDetail = ({ navigation }) => {

    const route = useRoute();
    const selectedExpert = route.params?.selectedExpert;

    // const {mess, setMess, messList, sendMessage} = useContext(UserListContext);
    // const [mess, setMess] = useState('');
    const handleMess = (text) => setMess(text);

    return (
        <SafeAreaView style={styles.safeView}>
            <LinearGradient
                colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
                style={{ height: "100%" }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
            >

                <View style={styles.navbarChatDetail} >

                    <View style={styles.navbarLeft}>
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <AntDesign name="arrowleft" size={25} color="black" style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ExpertIn4', {selectedExpert})} >
                            <Image source={{ uri: selectedExpert.img }} style={styles.img} resizeMode="contain"></Image>
                        </TouchableOpacity>

                        <View style={styles.msgContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('ExpertIn4', {selectedExpert})}>
                                <Text style={styles.userName}>{selectedExpert.name}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.navbarRight}>
                        <TouchableOpacity >
                            <Ionicons name="call" size={23} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 20 }}>
                            <Entypo name="dots-three-vertical" size={22} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {/* <View style={{height: 1000}}></View> */}
                </ScrollView>

                {/* Text input */}
                <View style={styles.chatInputContainer} >

                    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={0} >
                        <View style={styles.chatInputWrap}>
                            <TouchableOpacity style={{ marginLeft: 17 }} >
                                <Feather name="camera" size={24} color="black" />
                            </TouchableOpacity>

                            <TextInput 
                                style={styles.chatInput}
                                placeholder='Enter message'
                                // value={mess}
                                // onChangeText={handleMess}
                            />
                            
                            <TouchableOpacity style={{ marginRight: 17 }}  >
                                <Feather name="send" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                    
                </View>

            </LinearGradient>

        </SafeAreaView>
    );
}

export default ChatDetail;