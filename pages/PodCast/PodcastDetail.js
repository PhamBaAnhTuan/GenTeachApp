import React, { useState } from "react";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import {
	MaterialCommunityIcons,
	Entypo,
	MaterialIcons,
	FontAwesome6,
	Feather
} from "@expo/vector-icons";

const PodcastDetail = () => {
	const [iconName1, setIconName1] = useState("favorite-border");
	const [iconName2, setIconName2] = useState("play-circle");
	const [iconColor, setIconColor] = useState("black");

	const onPressIcon1 = () => {
		setIconName1(
			iconName1 === "favorite-border" ? "favorite" : "favorite-border",
		);
		setIconColor(
			iconColor === "black" ? "red" : "black",
		);
	};
	const onPressIcon2 = () => {
		setIconName2(
			iconName2 === "play-circle" ? "pause-circle" : "play-circle",
		);
	};

	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={{ height: "100%" }}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>

				<View style={styles.navbarTop}>
					<TouchableOpacity onPress={() => navigation.goBack()} >
						<AntDesign name="arrowleft" size={25} color="black" />
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>Podcast</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Entypo name="menu" size={25} color="black" />
					</TouchableOpacity>
				</View>


				<View style={{ height: "50%" }}>
					<Image
						source={require("../../assets/postcard/postcard1.png")}
						resizeMode="contain"
						style={styles.podcastImg}
					/>
				</View>

				<View style={styles.titleContainer}>
					<TouchableOpacity>
						<FontAwesome6 name="share" size={24} color="black" />
					</TouchableOpacity>
					<View>
						<Text style={styles.podcastTitle}>Coi mo</Text>
						<Text style={styles.podcastAuth}>Vietcetera</Text>
					</View>
					<TouchableOpacity onPress={onPressIcon1}>
						<MaterialIcons
							name={iconName1}
							size={24}
							color={iconColor}
						/>
					</TouchableOpacity>
				</View>


				<View style={styles.timeLine}>
					<View>
						<Text style={{ fontSize: 13 }}>1:02</Text>
					</View>

					<View
						style={{
							height: 1,
							width: 240,
							backgroundColor: "black",
						}}
					></View>
					<View>
						<Text style={{ fontSize: 13 }}>3:44</Text>
					</View>
				</View>


				<View style={styles.navbarControl}>
					<TouchableOpacity>
						<MaterialCommunityIcons
							name="playlist-play"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign
							name="fastbackward"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={onPressIcon2}
					// delayPressOut={200}
					>

						<Feather name={iconName2} size={70} color="black" />
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign name="fastforward" size={24} color="black" />
					</TouchableOpacity>
					<TouchableOpacity>
						<MaterialCommunityIcons
							name="play-speed"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default PodcastDetail;
