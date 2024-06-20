import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from '@react-navigation/native';
// Icon
import { Ionicons, Entypo } from "@expo/vector-icons";

const EduDetail = ({ navigation }) => {

	const [follow, setFollow] = useState('Follow');
	const [opacity, setOpacity] = useState(1);

	const handleFollow = () =>{
		follow === 'Follow' ? setFollow('Unfollow') : setFollow('Follow');
		opacity === 1 ? setOpacity(0.5) : setOpacity(1);
	}
	
	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={{ height: "100%" }}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				<View style={styles.navbarTop}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons
							name="arrow-back"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Entypo
							name="dots-three-vertical"
							size={22}
							color="black"
						/>
					</TouchableOpacity>
				</View>

				<ScrollView>
					<View style={{ height: 900 }}>
						<View style={styles.container1}>
							<Image
								source={require("../../assets/postcard/postcard4.png")}
								style={styles.detailImg}
							/>
						</View>

						<View style={styles.container2}>
							<View style={styles.wrap2Left}>
								<Image
									style={styles.authorImg}
									source={require("../../assets/Profile/imgProfile.png")}
								/>
								<Text>Author name</Text>
							</View>

							<TouchableOpacity style={styles.flBtn} onPress={handleFollow}>
								<Text style={{opacity}}>{follow}</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.container3}>
							<Text style={{ fontSize: 20, fontWeight: "bold" }}>Course name</Text>
							<Text style={{ textAlign: "justify", fontSize: 12 }}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s
							</Text>
						</View>
						<View style={styles.container3}>
							<Text style={{ fontSize: 20, fontWeight: "bold" }}>Target</Text>
							<Text style={{ textAlign: "justify", fontSize: 12 }}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s
							</Text>
						</View>
						<View style={styles.container3}>
							<Text style={{ fontSize: 20, fontWeight: "bold" }}>Roadmap</Text>
							<Text style={{ textAlign: "justify", fontSize: 12 }}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s
							</Text>
						</View>
					</View>
				</ScrollView>

				<View style={styles.navbarBot}>
					<TouchableOpacity>
						<LinearGradient
							colors={["#3AABBB", "#B689E2"]}
							start={{ x: 0, y: 0.5 }}
							end={{ x: 1, y: 0.5 }}
							style={styles.buyBtn}
						>
							<Text style={{ fontWeight: "bold", fontSize: 12 }}>Buy</Text>
						</LinearGradient>
					</TouchableOpacity>

					<TouchableOpacity>
						<LinearGradient
							colors={["#3AABBB", "#B689E2"]}
							start={{ x: 0, y: 0.5 }}
							end={{ x: 1, y: 0.5 }}
							style={styles.buyBtn}
						>
							<Text style={{ fontWeight: "bold", fontSize: 12 }}>Try free for 2 lesson</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default EduDetail;
