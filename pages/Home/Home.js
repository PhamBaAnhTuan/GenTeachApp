import React, {useContext} from "react";
import styles from "./styles";
import {
	Alert,
	Button,
	FlatList,
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// Icons
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { VideoCard } from "../../Components/Components";
// Context
import { AuthContext } from "../../Context/Context";

const Home = ({ navigation }) => {
	const { user, setUser, isSignedIn, setIsSignedIn } = useContext(AuthContext);

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={styles.gradient}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				<View style={styles.navbarHome}>					

					<View style={styles.navbarRight}>

						<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
							<Ionicons name="person-outline" size={24} color="black" />
						</TouchableOpacity>

						{/* <TouchableOpacity // Sign out Btn
						onPress={signOutMethod}
						>
							<LinearGradient
								colors={["#3AABBB", "#B689E2"]}
								start={{ x: 0, y: 0.5 }}
								end={{ x: 1, y: 0.5 }}
								style={styles.signOutBtn}
							>
								<Text
									style={{
										fontSize: 15,
										fontWeight: "700",
									}}
								>
									Sign Out
								</Text>
							</LinearGradient>
						</TouchableOpacity> */}

					</View>

				</View>
						<View>
							<Text style={{backgroundColor: 'green'}} >Hello {user?.userName}</Text>
							<Text style={{backgroundColor: 'green'}} >{user.userId}</Text>
						</View>
					
				{/* <View style={{height: 500, width: '100%'}}>
					<FlatList> */}
						<VideoCard />
					{/* </FlatList>
				</View> */}

			</LinearGradient>
		</SafeAreaView>
	);
};

export default Home;
