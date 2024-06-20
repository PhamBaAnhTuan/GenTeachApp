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

const Screen1 = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.safeView}>
			
			<LinearGradient
			//["#192f6a","plum",] ['#3AABBB', '#B689E2'] [ '#66ffff','#192f6a', 'plum', ]
			colors={["plum", "#66ffff"]}
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

				<View style={styles.bgContainer1}>
					<Image
						source={require("../../assets/Icon/circle.png")}
						resizeMode="contain"
						style={styles.circleImg}
					/>
					<Image
						source={require("../../assets/background/bgImg.png")}
						resizeMode="contain"
						style={styles.bgImg}
					/>
					<Image
						source={require("../../assets/Icon/hand.png")}
						resizeMode="contain"
						style={styles.handImg}
					/>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.title}>Shop with privacy</Text>
					<Text style={styles.text}>
						Purchases of sensitive products are now secured by
						Genshop
					</Text>
				</View>

				<TouchableOpacity
					style={styles.btnContainer}
					onPress={() => navigation.navigate("Screen2")}
				>
					<LinearGradient
						colors={["#3AABBB", "#B689E9"]}
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

export default Screen1;
