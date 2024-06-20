import React, { useEffect, useState, useContext } from "react";
import styles from "./styles";
import {
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
	ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageSlider } from "react-native-image-slider-banner";
// Component
import { CardItem, TitleField } from "../../Components/Components";
// Fire store
import { FIREBASE_FIRESTORE } from "../../Firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
// Context
import { AuthContext } from "../../Context/Context";

const MedicineScreen = ({navigation}) => {
	// Context
	const {bgTheme, textTheme} = useContext(AuthContext);

	const db = FIREBASE_FIRESTORE;
	const [shopMedicine1, setShopMedicine1] = useState([]);

	useEffect(() => {
		const shopMedicine1 = async () => {
			try {
				const collectionRef = collection(db, "/shop/shopMedicine/bestSell");
				const querySnapshot = await getDocs(collectionRef);
				const data1 = querySnapshot.docs.map((doc) => doc.data());
				setShopMedicine1(data1); // Set data directly (more efficient)
			} catch (error) {
				console.error("Error fetching podcast data:", error);
				// Handle errors appropriately (e.g., display an error message)
			}
		};

		shopMedicine1(); // Call the function within useEffect
	}, []);

	return (
		<LinearGradient
			colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
			style={{ height: "100%" }}
			start={{ x: 0, y: 0.3 }}
			end={{ x: 0.5, y: 0.7 }}
		>
			<ScrollView>
				<View style={styles.container}>
					<View style={{ marginBottom: 20 }}>
						<TitleField titleText="Best Sell" />
						<View>
							<ScrollView horizontal={true}>
								{shopMedicine1.map((item, index) => (
									<View
										style={{
											height: 200,
											width: 150,
											backgroundColor: bgTheme,
											borderRadius: 10,
											margin: 10,
											justifyContent: "flex-start",
										}}
										key={index}
									>
										<TouchableOpacity onPress={() => navigation.navigate('ShopDetail')} >
											{/* Item name container */}
											<View
												style={{
													alignItems: "center",
													justifyContent: 'flex-end',
													height: "10%",
													marginTop: 20
												}}
											>
												<Text style={{ fontSize: 13, color: textTheme }}>
													{item.brand}
												</Text>
												<Text
													style={{
														fontWeight: "500",
														color: textTheme,
													}}
												>
													{item.name}
												</Text>
											</View>

											<Image // img
												style={{
													marginTop: 15,
													height: "60%",
													width: "70%",
													resizeMode: "contain",
													alignSelf: "center",
													borderRadius: 20,
												}}
												source={{ uri: item.img }}
											/>
										</TouchableOpacity>
										<View // Bot navbar container
											style={{
												height: "10%",
												width: "100%",
												// marginTop: 5,
												marginBottom: 30,
												flexDirection: "row",
												alignItems: "flex-end",
												justifyContent: "space-around",
												// borderWidth: 1
											}}
										>
											<TouchableOpacity>
												<Feather
													name="shopping-cart"
													size={18}
													color={textTheme}
												/>
											</TouchableOpacity>
											<Text
												style={{
													fontSize: 15,
													fontWeight: "700",
													color: textTheme
												}}
											>
												{item.price}$
											</Text>
											<TouchableOpacity
											// onPress={onPressIcon}
											>
												<MaterialIcons
													name="favorite-border"
													size={18}
													color= {textTheme}
												/>
											</TouchableOpacity>
										</View>
									</View>
								))}
							</ScrollView>
						</View>
					</View>

					<View>
						<TitleField titleText="For you" />

						<View>
							<ScrollView horizontal={true}>
							{shopMedicine1.map((item, index) => (
									<View
										style={{
											height: 200,
											width: 150,
											backgroundColor: bgTheme,
											borderRadius: 10,
											margin: 10,
											justifyContent: "flex-start",
										}}
										key={index}
									>
										<TouchableOpacity>
											{/* Item name container */}
											<View
												style={{
													alignItems: "center",
													justifyContent: 'flex-end',
													height: "10%",
													marginTop: 20
												}}
											>
												<Text style={{ fontSize: 13, 	color: textTheme }}>
													{item.brand}
												</Text>
												<Text
													style={{
														fontWeight: "500",
														color: textTheme
													}}
												>
													{item.name}
												</Text>
											</View>

											<Image // img
												style={{
													marginTop: 15,
													height: "60%",
													width: "70%",
													resizeMode: "contain",
													alignSelf: "center",
													borderRadius: 10,
												}}
												source={{ uri: item.img }}
											/>
										</TouchableOpacity>
										<View // Bot navbar container
											style={{
												height: "10%",
												width: "100%",
												// marginTop: 5,
												marginBottom: 30,
												flexDirection: "row",
												alignItems: "flex-end",
												justifyContent: "space-around",
												// borderWidth: 1
											}}
										>
											<TouchableOpacity>
												<Feather
													name="shopping-cart"
													size={18}
													color={textTheme}
												/>
											</TouchableOpacity>
											<Text
												style={{
													fontSize: 15,
													fontWeight: "700",
													color: textTheme
												}}
											>
												{item.price}$
											</Text>
											<TouchableOpacity
											// onPress={onPressIcon}
											>
												<MaterialIcons
													name="favorite-border"
													size={18}
													color= {textTheme}
												/>
											</TouchableOpacity>
										</View>
									</View>
								))}
							</ScrollView>
						</View>
					</View>
				</View>
			</ScrollView>
		</LinearGradient>
	);
};

export default MedicineScreen;
