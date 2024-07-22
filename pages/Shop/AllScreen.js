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
// Icon
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
// Context
import { ColorContext, ItemContext } from "../../Context/Context";
// Component
import { CardItem, TitleField } from "../../Components/Components";
import ShopCard from "../../Components/ShopCard";

const AllScreen = ({ navigation }) => {
	// Context
	const {bgcItemCard, textColorItemCard} = useContext(ColorContext);
	const {bestSell, forYou, top10, tee} = useContext(ItemContext);

	// Handle icons
	const [iconName, setIconName] = useState("favorite-border");
	const [iconColor, setIconColor] = useState("black");
	const onPressIcon = () => {
		setIconName(
			iconName === "favorite-border" ? "favorite" : "favorite-border",
		);
		setIconColor(iconColor === "black" ? "red" : "black");
	};

	return (
		<LinearGradient
			colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
			style={{ height: "100%" }}
			start={{ x: 0, y: 0.3 }}
			end={{ x: 0.5, y: 0.7 }}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					
					<View style={{ paddingBottom: 10 }}>
						<TitleField titleText="Bán chạy" />
						<View>
							<ScrollView horizontal={true}>
								{bestSell.map((item, index) => (
									<ShopCard 
										key={index}
										onPress={() => navigation.navigate('ShopDetail', { selectedItem: bestSell[index] })}
										brand={item.brand}
										name={item.name}
										img={item.img}
										price={item.price}
									/>
								))}
							</ScrollView>
						</View>
					</View>

					<View style={{ marginBottom: 10 }}>
						<TitleField titleText="Dành cho bạn" />

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

					<View style={{ marginBottom: 10 }}>
						<TitleField titleText="Top 10" />

						<View>
							<ScrollView horizontal={true}>
								{top10.map((item, index) => (
									<ShopCard 
									key={index}
									onPress={() => navigation.navigate('ShopDetail', { selectedItem: top10[index] })}
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
						<TitleField titleText="Clothes" />

						<View>
							<ScrollView horizontal={true}>
								{tee.map((item, index) => (
									<ShopCard 
									key={index}
									onPress={() => navigation.navigate('ShopDetail', { selectedItem: top10[index] })}
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

export default AllScreen;

