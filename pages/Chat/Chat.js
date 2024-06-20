import * as React from "react";
import styles from "./styles";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import ChatDetail from './ChatDetail';

const Chat = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={styles.gradient}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				<Image
					source={require("../../assets/background/bgChat.png")}
					resizeMode="contain"
				></Image>
				<TouchableOpacity
					style={{ marginTop: 100 }}
					onPress={() => navigation.navigate("ChatList")}
				>
					<LinearGradient
						colors={["#3AABBB", "#B689E2"]}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
						style={styles.btn}
					>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "700",
								color: "#fff",
							}}
						>
							Let's chat
						</Text>
					</LinearGradient>
				</TouchableOpacity>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default Chat;
