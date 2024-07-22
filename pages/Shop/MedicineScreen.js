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
import ShopCard from "../../Components/ShopCard";
// Fire store
import { FIREBASE_FIRESTORE } from "../../Firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
// Context
import { ColorContext, ItemContext } from "../../Context/Context";

const MedicineScreen = ({navigation}) => {
	// Context
	const {bgcItemCard, textColorItemCard} = useContext(ColorContext);
	const {top10, forYou} = useContext(ItemContext);

	return (
		<LinearGradient
			colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
			style={{ height: "100%" }}
			start={{ x: 0, y: 0.3 }}
			end={{ x: 0.5, y: 0.7 }}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={{ marginBottom: 20 }}>
						<TitleField titleText="Medicine" />
						<View>
							<ScrollView horizontal={true}>
								{forYou.map((item, index) => (
									<ShopCard 
										key={index}
										onPress={() => navigation.navigate('ShopDetail', { selectedItem: forYou[index] })}
										brand={item.brand}
										name={item.name}
										img={item.img}
										price={item.price}
									/>
								))}
							</ScrollView>
						</View>
					</View>

					<View>
						<TitleField titleText="Thực phẩm chức năng" />

						<View>
							<ScrollView horizontal={true}>
							{forYou.map((item, index) => (
									<ShopCard 
									key={index}
									onPress={() => navigation.navigate('ShopDetail', { selectedItem: forYou[index] })}
									brand={item.brand}
									name={item.name}
									img={item.img}
									price={item.price}
								/>
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
