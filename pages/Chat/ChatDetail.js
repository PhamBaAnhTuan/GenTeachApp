import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './styles';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useNavigationState, useRoute } from "@react-navigation/native";
// Context
import { UserListContext } from "../../Context/Context";

import { AntDesign, Ionicons, Feather, Entypo } from '@expo/vector-icons';


const ChatDetail = () => {

    const { userList } = useContext(UserListContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeView}>
            <LinearGradient
                colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
                style={{ height: "100%" }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
            >
                {userList.map((item, index) => (
                    <View style={styles.navbarChatDetail} key={index} >

                        <View style={styles.navbarLeft}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <AntDesign name="arrowleft" size={25} color="black" style={{ marginLeft: 15 }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={{ uri: item.avatar }} style={styles.img} resizeMode="contain"></Image>
                            </TouchableOpacity>

                            <View style={styles.msgContainer}>
                                <TouchableOpacity>
                                    <Text style={styles.userName}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.navbarRight}>
                            <TouchableOpacity>
                                <Ionicons name="call" size={23} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 20 }}>
                                <Entypo name="dots-three-vertical" size={22} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                <ScrollView >
                    <View style={{ height: '70%', backgroundColor: 'green' }}></View>
                </ScrollView>

                <KeyboardAvoidingView style={{ height: '10%', justifyContent: 'flex-end' }}>
                    <View style={styles.chatInputContainer}>
                        <TouchableOpacity style={{ marginLeft: 17 }} >
                            <Feather name="camera" size={24} color="black" />
                        </TouchableOpacity>
                        <TextInput style={styles.chatInput} placeholder='Enter message' numberOfLines={3} />
                        <TouchableOpacity style={{ marginRight: 17 }} onPress={null} >
                            <Feather name="send" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </LinearGradient>

        </SafeAreaView>
    );
}

export default ChatDetail;