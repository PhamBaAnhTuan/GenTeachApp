import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
// Route get params
import { useRoute } from "@react-navigation/native";
// Icon
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
// Component
import { ItemShopDetail } from "../../Components/ItemShopDetail";

const EduDetail = ({ navigation }) => {

	const [follow, setFollow] = useState('Follow');
	const [opacity, setOpacity] = useState(1);

	const handleFollow = () =>{
		follow === 'Follow' 
		? (setFollow('Following'), ToastAndroid.show('Following',ToastAndroid.SHORT)) 
		: (setFollow('Follow'), ToastAndroid.show('Unfollowed',ToastAndroid.SHORT));
		opacity === 1 ? setOpacity(0.5) : setOpacity(1);
	}

	const route = useRoute();
	const selectedCourse = route.params?.selectedCourse;
	
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

               <Text style={{fontWeight: 'bold'}}>Course</Text>

					<TouchableOpacity>
						<Entypo
							name="dots-three-vertical"
							size={22}
							color="black"
						/>
					</TouchableOpacity>
				</View>

				<ScrollView>
					{/* img item */}
					<ItemShopDetail img={selectedCourse.img}
						name={selectedCourse.name}
						author={selectedCourse.author}
						handleFollow={handleFollow}
						opacity={opacity}
						follow={follow}
						price={selectedCourse.price}
						description={selectedCourse.description}
						discount={selectedCourse.discount}
						rate={selectedCourse.rate}
					/>
				</ScrollView>

				<View style={styles.navbarBot}>
					<TouchableOpacity>
						<LinearGradient
							colors={["#3AABBB", "#B689E2"]}
							start={{ x: 0, y: 0.5 }}
							end={{ x: 1, y: 0.5 }}
							style={styles.buyBtn}
						>
							<Text style={{ fontWeight: "bold", fontSize: 13, color: 'white' }}>Buy</Text>
						</LinearGradient>
					</TouchableOpacity>

					<TouchableOpacity>
						<LinearGradient
							colors={["#3AABBB", "#B689E2"]}
							start={{ x: 0, y: 0.5 }}
							end={{ x: 1, y: 0.5 }}
							style={styles.buyBtn}
						>
							<Text style={{ fontWeight: "bold", fontSize: 13, color: 'white' }}>Try free for 2 lesson</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default EduDetail;
