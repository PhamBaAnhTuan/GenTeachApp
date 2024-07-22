import React, { useContext } from "react";
import {
	Button,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	Image,
	ScrollView,
	Alert,
	ToastAndroid
} from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
// Icon
import { Ionicons, Fontisto, FontAwesome5, Entypo, AntDesign, Feather } from "@expo/vector-icons";
// Component
import { SettingCard } from "../../Components/Components";
// Context
import { AuthContext } from "../../Context/Context";
// Firebase
import { FIREBASE_AUTH } from "../../Firebase/FirebaseConfig";


const Profile = ({ navigation }) => {

	const { user, setUser, setIsSignedIn } = useContext(AuthContext);
	const auth = FIREBASE_AUTH;
	// Sign out
	const signOutMethod = async () => {
		try {
			await auth.signOut();
			console.log("User signed out");
			// Navigation
			navigation.navigate("GetStart");
			// Show notification
			ToastAndroid.show('Signed out successfully', ToastAndroid.LONG);
			// set state
			setIsSignedIn(false);
			setUser('');
		} catch (error) {
			console.error("Sign out error:", error);
		}
	};

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={styles.gradient}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				<View style={styles.navbarProfile}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons name="arrow-back-outline" size={24} color="black" />
					</TouchableOpacity>
					<View style={styles.navbarProfileRight}>
						<TouchableOpacity style={{ marginHorizontal: 25 }}>
							<Fontisto name="bell" size={23} color="black" />
						</TouchableOpacity>
						<TouchableOpacity>
							<Ionicons name="settings-outline" size={24} color="black" />
						</TouchableOpacity>
					</View>
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.profileImgContainer}>
						<Image
							style={styles.profileImg}
							source={require("../../assets/background/bgImg.png")}
							resizeMode="center"
						/>

						<View>
							<Text style={{ fontSize: 20, fontWeight: "bold" }}>{user.userName}</Text>
							<Text style={{ opacity: 0.5 }}>{user.email}</Text>
						</View>
					</View>

					<View style={styles.in4Container}>
						<View style={styles.textWrap}>
							<Text style={styles.number}>1999</Text>
							<Text style={styles.text}>Follower</Text>
						</View>
						<View style={styles.textWrap}>
							<Text style={styles.number}>99</Text>
							<Text style={styles.text}>Following</Text>
						</View>
						<View style={styles.textWrap}>
							<Text style={styles.number}>12</Text>
							<Text style={styles.text}>Post</Text>
						</View>
					</View>

					<View style={{ height: 700 }}>
						<View style={styles.settingContainer}>

							<SettingCard
								onPress={null}
								name="Followers"
								icon={<Fontisto name="persons" size={24} color="black" />}
							/>

							<SettingCard
								onPress={null}
								name="Following"
								icon={<Fontisto name="person" size={24} color="black" />}
							/>

							<SettingCard
								onPress={null}
								name="Post"
								icon={<Entypo name="documents" size={24} color="black" />}
							/>

							<SettingCard
								onPress={null}
								name="Order"
								icon={<AntDesign name="shoppingcart" size={24} color="black" />}
							/>

							<SettingCard
								onPress={null}
								name="Saved"
								icon={<Feather name="bookmark" size={24} color="black" />}
							/>

							<SettingCard
								onPress={null}
								name="Favorite"
								icon={<AntDesign name="staro" size={24} color="black" />}
							/>

							<SettingCard
								onPress={() => navigation.navigate('UpGradeAccountDetail')}
								name="Upgrade your account"
								icon={<FontAwesome5 name="angle-double-up" size={24} color="gold" />}
							/>
						</View>

						<View style={styles.moreContainer}>

							<SettingCard
								onPress={() => Alert.alert('About us', 'Access Genteach.gdgt.edu.vn for more!')}
								name="About Us"
								icon={<Ionicons name="information-circle-outline" size={24} color="black" />}
							/>

							<SettingCard
								name="Feed back"
								icon={<AntDesign name="exclamation" size={24} color="black" />}
							/>

							<SettingCard
								name="Help and Support"
								icon={<Ionicons name="help" size={24} color="black" />}
							/>

							<SettingCard
								onPress={signOutMethod}
								name="Sign out"
								icon={<AntDesign name="logout" size={24} color="red" />}
							/>

						</View>
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default Profile;
