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
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ImageSlider } from "react-native-image-slider-banner";
import AllScreen from "./AllScreen";
import MedicineScreen from "./MedicineScreen";
import ToolScreen from "./ToolScreen";

import { Entypo, Feather } from "@expo/vector-icons";
import { SearchView } from "../../Components/Components";

const TopTab = createMaterialTopTabNavigator();

const Shop = ({navigation}) => {
	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum","#66ffff", ]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
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
							marginTop: 3,
							alignItems: "center",
							justifyContent: 'center',
							// borderWidth: 1
						}}
					/>
				</View>

				<View style={{ height: "90%" }}>
					<TopTab.Navigator
						screenOptions={{
							// tabBarActiveTintColor: "#e91e63",
							tabBarLabelStyle: { fontWeight: 'bold' },
							swipeEnabled: false,
							tabBarStyle: {
								backgroundColor: "plum",
							},
						}}
					>
						<TopTab.Screen name="All" component={AllScreen} />
						<TopTab.Screen name="Medicine" component={MedicineScreen} />
						<TopTab.Screen name="Tool" component={ToolScreen} />
					</TopTab.Navigator>
				</View>
				
			</LinearGradient>
		</SafeAreaView>
	);
};

export default Shop;

