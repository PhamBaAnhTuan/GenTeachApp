import React, { useEffect, useState } from "react";
import styles from "./styles";
import {
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageSlider } from "react-native-image-slider-banner";
// Components
import { TitleField, CardCourse, SearchView } from "../../Components/Components";
// Fire store
import { FIREBASE_FIRESTORE } from "../../Firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
// Icons
import { MaterialIcons, Feather } from "@expo/vector-icons";

const Edu = ({ navigation }) => {
	const db = FIREBASE_FIRESTORE;
	const [eduSexual, setEduSexual] = useState([]);
	const [eduMentality, setEduMentality] = useState([]);
	const [eduSelfGrowth, setEduSelfGrowth] = useState([]);

	useEffect(() => {
		const eduSexual = async () => {
			try {
				const collectionRef = collection(db, "edu_sexual");
				const querySnapshot = await getDocs(collectionRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setEduSexual(data); // Set data directly (more efficient)
				// console.log(data);
			} catch (error) {
				console.error("Error fetching podcast data:", error);
				// Handle errors appropriately (e.g., display an error message)
			}
		};

		eduSexual();
		//
		const eduMentality = async () => {
			try {
				const collectionRef = collection(db, "edu_mentality");
				const querySnapshot = await getDocs(collectionRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setEduMentality(data); // Set data directly (more efficient)
			} catch (error) {
				console.error("Error fetching podcast data:", error);
				// Handle errors appropriately (e.g., display an error message)
			}
		};

		eduMentality();
		//
		const eduSelfGrowth = async () => {
			try {
				const collectionRef = collection(db, "edu_selfGrowth");
				const querySnapshot = await getDocs(collectionRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setEduSelfGrowth(data); // Set data directly (more efficient)
			} catch (error) {
				console.error("Error fetching podcast data:", error);
				// Handle errors appropriately (e.g., display an error message)
			}
		};

		eduSelfGrowth();
	}, []);

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={{ height: "100%" }}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				<ScrollView>
					<SearchView />

					<View style={{ marginTop: 20 }}>
						<TitleField titleText="Sexual Edu" />
						<View style={styles.courseContainer}>
							<ScrollView horizontal={true}>
								{eduSexual.map((item, index) => (
									<View
										style={{
											height: 220,
											width: 180,
											// backgroundColor: "grey",
											borderRadius: 10,
											margin: 10,
											// borderWidth: 1
										}}
										key={index}
									>
										<TouchableOpacity
											style={{ height: "90%" }}
											onPress={() => navigation.navigate("EduDetail")}
										>
											<Image // img container
												style={{
													alignSelf: "center",
													height: "80%",
													width: "100%",
													resizeMode: "cover",
													borderRadius: 15,
													// marginTop: 5
												}}
												source={{ uri: item.img }}
											/>
											<View // name container
												style={{
													// marginLeft: 5,
													marginTop: 5,
													alignSelf: "center",
													alignItems: "center",
												}}
											>
												<Text style={{ fontSize: 12 }}>{item.author}</Text>
												<Text
													style={{
														fontSize: 14,
														fontWeight: "bold",
													}}
												>
													{item.name}
												</Text>
											</View>
										</TouchableOpacity>
										<View // price container
											style={{
												height: "10%",
												width: "100%",
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "space-around",
												marginTop: 5,
												// borderWidth: 1
											}}
										>
											<TouchableOpacity>
												<Feather
													name="shopping-cart"
													size={18}
													color="black"
												/>
											</TouchableOpacity>
											<Text
												style={{
													fontSize: 15,
													fontWeight: "bold",
												}}
											>
												{item.price}$
											</Text>
											<TouchableOpacity>
												<MaterialIcons
													name="favorite-border"
													size={18}
													color="black"
												/>
											</TouchableOpacity>
										</View>
									</View>
								))}
							</ScrollView>
						</View>
					</View>

					<View>
						<TitleField titleText="Mentality" />
						<View style={styles.courseContainer}>
							<ScrollView horizontal={true}>
								{eduMentality.map((item, index) => (
									<View
										style={{
											height: 220,
											width: 185,
											// backgroundColor: "grey",
											borderRadius: 10,
											margin: 10,
											// marginLeft: 10,
											// alignItems: "center",
										}}
										key={index}
									>
										<TouchableOpacity style={{ height: "90%" }}>
											<Image // img container
												style={{
													alignSelf: "center",
													height: "80%",
													width: "100%",
													resizeMode: "cover",
													borderRadius: 15,
													// marginTop: 5
												}}
												source={{ uri: item.img }}
											/>
											<View // name container
												style={{
													// marginLeft: 5,
													marginTop: 5,
													alignSelf: "center",
													alignItems: "center",
												}}
											>
												<Text style={{ fontSize: 12 }}>{item.author}</Text>
												<Text
													style={{
														fontSize: 14,
														fontWeight: "bold",
													}}
												>
													{item.name}
												</Text>
											</View>
										</TouchableOpacity>

										<View // price container
											style={{
												width: "100%",
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "space-around",
												marginTop: 5,
											}}
										>
											<TouchableOpacity>
												<Feather
													name="shopping-cart"
													size={18}
													color="black"
												/>
											</TouchableOpacity>
											<Text
												style={{
													fontSize: 15,
													fontWeight: "bold",
												}}
											>
												{item.price}$
											</Text>
											<TouchableOpacity>
												<MaterialIcons
													name="favorite-border"
													size={18}
													color="black"
												/>
											</TouchableOpacity>
										</View>
									</View>
								))}
							</ScrollView>
						</View>
					</View>

					<View>
						<TitleField titleText="Self Growth" />
						<View style={styles.courseContainer}>
							<ScrollView horizontal={true}>
								{eduSelfGrowth.map((item, index) => (
									<View
										style={{
											height: 220,
											width: 185,
											// backgroundColor: "grey",
											borderRadius: 10,
											margin: 10,
											// marginLeft: 10,
											// alignItems: "center",
										}}
										key={index}
									>
										<TouchableOpacity>
											<Image // img container
												style={{
													alignSelf: "center",
													height: "80%",
													width: "100%",
													resizeMode: "cover",
													borderRadius: 15,
												}}
												source={{ uri: item.img }}
											/>
											<View // name container
												style={{
													// marginLeft: 5,
													// marginTop: 5,
													alignSelf: "center",
													alignItems: "center",
												}}
											>
												<Text style={{ fontSize: 12 }}>{item.author}</Text>
												<Text
													style={{
														fontSize: 14,
														fontWeight: "bold",
													}}
												>
													{item.name}
												</Text>
											</View>
										</TouchableOpacity>

										<View // price container
											style={{
												width: "100%",
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "space-around",
												// marginTop: 5,
											}}
										>
											<TouchableOpacity style={{ height: "90%" }}>
												<Feather
													name="shopping-cart"
													size={18}
													color="black"
												/>
											</TouchableOpacity>
											<Text
												style={{
													fontSize: 15,
													fontWeight: "bold",
												}}
											>
												{item.price}$
											</Text>
											<TouchableOpacity>
												<MaterialIcons
													name="favorite-border"
													size={18}
													color="black"
												/>
											</TouchableOpacity>
										</View>
									</View>
								))}
							</ScrollView>
						</View>
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default Edu;
