import React, { useEffect, useState, useContext } from "react";
import styles from "../styles";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// Router
import { useRoute } from '@react-navigation/native'
// Icons
import { Entypo, Feather, AntDesign, Ionicons } from "@expo/vector-icons";
// Context
import { UserListContext } from "../../../Context/Context";
// Components
import { SearchView } from "../../../Components/Components";

const ChatList = ({ navigation }) => {
	// Route
	const route = useRoute();
	const selectedChat = route.params?.selectedChat;
	const data = () => {
		console.log('selected chat: ', selectedChat);
	}
	// Context
	const { userList } = useContext(UserListContext);

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={{ height: "100%" }}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 1, y: 1 }}
			>
				<ScrollView showsVerticalScrollIndicator={false}>

					<SearchView onPress={null} />

					{userList.map((item, index) => (
						<TouchableOpacity key={index} onPress={() => navigation.navigate('ChatDetail', { selectedUser: userList[index] })} >
							<View style={styles.navbarChatList}>
								<View style={styles.navbarLeft}>
									<Image
										source={{ uri: item.avatar }}
										style={styles.img}
										resizeMode="contain"
									></Image>

									<View style={styles.msgContainer}>
										<Text style={styles.userName}>{item.name}</Text>
										<Text style={styles.msg}>{item.msg}</Text>
									</View>
								</View>

								<View style={styles.navbarRight}>
									{item.online === true ? (
										<Entypo name="dot-single" size={35} color="aqua" />
									) : (
										<Entypo name="dot-single" size={35} color="grey" />
									)}
								</View>
							</View>
						</TouchableOpacity>
					))}

				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default ChatList;