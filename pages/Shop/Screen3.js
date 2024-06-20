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

const Screen3 = ({ navigation }) => {
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

				<View style={styles.bgContainer3}>
					<Image
						source={require("../../assets/Icon/circle.png")}
						resizeMode="contain"
						style={styles.circleImg}
					/>
					<Image
						source={require("../../assets/background/discount.png")}
						resizeMode="contain"
						style={styles.discountImg}
					/>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.title}>Get and Redeem Voucher</Text>
					<Text style={styles.text}>
						Exciting prizes await you! Redeem yours by collecting
						all the points after purchase in the app!
					</Text>
				</View>

				<TouchableOpacity
					style={styles.btnContainer}
					onPress={() => navigation.navigate("Shop")}
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

export default Screen3;
