import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	ScrollView,
	FlatList,
} from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { PodcastCard, SearchView, TitleField } from "../../Components/Components";
import { Entypo, Feather } from "@expo/vector-icons";
import { FIREBASE_FIRESTORE } from "../../Firebase/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

const PodcastList = ({ navigation }) => {
	const db = FIREBASE_FIRESTORE;
	const [podcastCard1, setPodcastCard1] = useState([]);
	const [podcastCard2, setPodcastCard2] = useState([]);
	const [podcastCard3, setPodcastCard3] = useState([]);

	useEffect(() => {
		const getPodcastList1 = async () => {
			try {
				const collectionRef = collection(db, "podcast");
				const querySnapshot = await getDocs(collectionRef);
				const podcastData = querySnapshot.docs.map((doc) => doc.data());
				setPodcastCard1(podcastData); // Set data directly (more efficient)
			} catch (error) {
				console.error("Error fetching podcast data:", error);
				// Handle errors appropriately (e.g., display an error message)
			}
		};

		getPodcastList1(); // Call the function within useEffect
	}, []);

	useEffect(() => {
		const getPodcastList2 = async () => {
			try {
				const collectionRef = collection(db, "podcast2");
				const querySnapshot = await getDocs(collectionRef);
				const podcastData = querySnapshot.docs.map((doc) => doc.data());
				setPodcastCard2(podcastData); // Set data directly (more efficient)
			} catch (error) {
				console.error("Error fetching podcast data:", error);
				// Handle errors appropriately (e.g., display an error message)
			}
		};

		getPodcastList2(); // Call the function within useEffect
	}, []);

	useEffect(() => {
		const getPodcastList3 = async () => {
			try {
				const collectionRef = collection(db, "podcast3");
				const querySnapshot = await getDocs(collectionRef);
				const podcastData = querySnapshot.docs.map((doc) => doc.data());
				setPodcastCard3(podcastData); // Set data directly (more efficient)
			} catch (error) {
				console.error("Error fetching podcast data:", error);
				// Handle errors appropriately (e.g., display an error message)
			}
		};

		getPodcastList3(); // Call the function within useEffect
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

					<View style={styles.podcastContainer}>
						<TitleField titleText="Sexual edu" />
						<ScrollView horizontal={true}>
							{podcastCard1.map((item, index) => (
								<TouchableOpacity key={index} onPress={() => navigation.navigate('PodcastDetail')}>
									<View
										style={styles.podcastCard}

									>
										<Image
											style={{
												alignSelf: "center",
												height: "74%",
												width: "100%",
												resizeMode: "cover",
												borderRadius: 10,
												marginLeft: 5
											}}
											source={{ uri: item.img }}
										/>

										<View
											style={{
												marginLeft: 5,
												marginTop: 10,
												alignSelf: "flex-start",
											}}
										>
											<Text
												style={{
													fontSize: 14,
													fontWeight: "bold",
												}}
											>
												{item.podcastName}
											</Text>
											<Text style={{ fontSize: 12 }}>
												{item.podcastAuther}
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>

					<View style={styles.podcastContainer}>
						<TitleField titleText="Self growth" />
						<ScrollView horizontal={true}>
							{podcastCard2.map((item, index) => (
								<TouchableOpacity key={index}>
									<View
										style={styles.podcastCard}

									>
										<Image
											style={{
												alignSelf: "center",
												height: "74%",
												width: "100%",
												resizeMode: "cover",
												borderRadius: 10
											}}
											source={{ uri: item.img }}
										/>

										<View
											style={{
												marginLeft: 5,
												marginTop: 10,
												alignSelf: "flex-start",
											}}
										>
											<Text
												style={{
													fontSize: 14,
													fontWeight: "bold",
												}}
											>
												{item.name}
											</Text>
											<Text style={{ fontSize: 12 }}>
												{item.auther}
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>

					<View style={styles.podcastContainer}>
						<TitleField titleText="Daily life" />
						<ScrollView horizontal={true}>
							{podcastCard3.map((item, index) => (
								<TouchableOpacity key={index}>
									<View
										style={styles.podcastCard}

									>
										<Image
											style={{
												alignSelf: "center",
												height: "74%",
												width: "100%",
												resizeMode: "cover",
												borderRadius: 10
											}}
											source={{ uri: item.img }}
										/>

										<View
											style={{
												marginLeft: 5,
												marginTop: 10,
												alignSelf: "flex-start",
											}}
										>
											<Text
												style={{
													fontSize: 14,
													fontWeight: "bold",
												}}
											>
												{item.name}
											</Text>
											<Text style={{ fontSize: 12 }}>
												{item.auther}
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default PodcastList;
