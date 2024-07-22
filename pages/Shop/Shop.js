import React from "react";
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
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ImageSlider } from "react-native-image-slider-banner";
// Acreen
import AllScreen from "./AllScreen";
import MedicineScreen from "./MedicineScreen";
import ToolScreen from "./ToolScreen";
// Icons
import { Entypo, Feather, Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
// Components
import { SearchView } from "../../Components/Components";
import BookScreen from "./BookScreen";
import ClothesScreen from "./ClothesScreen";

const TopTab = createMaterialTopTabNavigator();

const Shop = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff",]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={{ height: "100%" }}
				start={{ x: 0, y: 0.3 }}
				end={{ x: 0.5, y: 0.7 }}
			>
				<SearchView />

				<View style={styles.banner}>
					<ImageSlider
						data={[
							{
								img: require("../../assets/banner/banner5.jpg"),
							},
							{
								img: require("../../assets/banner/banner3.jpg"),
							},
							{
								img: require("../../assets/banner/banner6.jpg"),
							},
						]}
						localImg
						autoPlay={true}
						timer={5000}
						// onItemChanged={(item) => console.log("item", item)}
						closeIconColor="#fff"
						showIndicator={false}
						showHeader={false}
						onClick={null}
						caroselImageStyle={{
							resizeMode: "contain",
							height: 150,
							width: 330,
							marginHorizontal: 10,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					/>
				</View>

				<View style={{ height: 500 }} >
					<TopTab.Navigator
						screenOptions={({ route }) => ({
							// tabBarIcon: ({ focused, color, size }) => {
							// 	let iconName;
							// 	if (route.name === "All") {
							// 		[iconName, color, size] = focused
							// 			? ['home', '#867edb', 25]
							// 			: ['home-outline', 'grey', 21];
							// 	} else if (route.name === "Medicine") {
							// 		[iconName, color, size] = focused
							// 			? ['cart', '#867edb', 25]
							// 			: ['cart-outline', 'grey', 21];
							// 	} else if (route.name === "Tool") {
							// 		[iconName, color, size] = focused
							// 			? ['chatbox', '#867edb', 25]
							// 			: ['chatbox-outline', 'grey', 21];
							// 	}

							// 	return <Ionicons name={iconName} size={size} color={color} />;
							// },
							tabBarActiveTintColor: "#fff",
							tabBarShowLabel: false,
							tabBarLabelStyle: {
								// fontWeight: 'bold',
								fontSize: 10
							},
							swipeEnabled: false,
							tabBarStyle: {
								backgroundColor: "plum",
							},
							tabBarIconStyle: {
								alignItems: 'center',
								justifyContent: 'center',
							}
						})}
					>
						<TopTab.Screen name="All" component={AllScreen} options={{
							tabBarIcon({ focused }) {
								return (
									<AntDesign name='appstore-o' size={20} color={focused ? '#fff' : 'gray'} />
								);
							},

						}} />
						<TopTab.Screen name="Medicine" component={MedicineScreen} options={{
							tabBarIcon({ focused }) {
								return (
									<AntDesign name='medicinebox' size={20} color={focused ? '#fff' : 'gray'} />
								);
							}
						}} />
						<TopTab.Screen name="Tool" component={ToolScreen} options={{
							tabBarIcon({ focused }) {
								return (
									<FontAwesome name="stethoscope" size={20} color={focused ? '#fff' : 'gray'} />
								);
							}
						}} />
						<TopTab.Screen name="Book" component={BookScreen} options={{
							tabBarIcon({ focused }) {
								return (
									<AntDesign name='book' size={20} color={focused ? '#fff' : 'gray'} />
								);
							}
						}} />
						<TopTab.Screen name="Clothes" component={ClothesScreen} options={{
							tabBarIcon({ focused }) {
								return (
									<AntDesign name='tago' size={20} color={focused ? '#fff' : 'gray'} />
								);
							}
						}} />
					</TopTab.Navigator>
				</View>

			</LinearGradient>
		</SafeAreaView>
	);
};

export default Shop;

