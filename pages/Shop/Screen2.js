import React from "react";
import {
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

const Screen2 = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={{ height: "100%" }}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				<View style={styles.skipBtn}>
					<TouchableOpacity
						onPress={() => navigation.navigate("Shop")}
					>
						<Text style={{ color: "white" }}>Skip</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.bgContainer2}>
					{/* <Image source={require('../../assets/Icon/circle.png')} resizeMode='contain' style={styles.circleImg} /> */}
					<Image
						source={require("../../assets/background/oclock.png")}
						resizeMode="contain"
					/>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.title}>Quickly and Easily</Text>
					<Text style={styles.text}>
						You can place your order quickly and easly without
						wasting time. You can also schedule orders via your
						smarthphone.
					</Text>
				</View>

				<TouchableOpacity
					style={styles.btnContainer}
					onPress={() => navigation.navigate("Screen3")}
				>
					<LinearGradient
						colors={["#3AABBB", "#B689E2"]}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
						style={styles.continueBtn}
					>
						<Text
							style={{
								fontSize: 17,
								fontWeight: "500",
								color: "#fff",
							}}
						>
							Continue
						</Text>
					</LinearGradient>
				</TouchableOpacity>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default Screen2;
