import React, { useContext, useEffect, useState } from "react";
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
// Icon
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
// Context
import { ColorContext, ItemContext } from "../../Context/Context";

const ToolScreen = ({navigation}) => {
	// Context
	const {bgcItemCard, textColorItemCard} = useContext(ColorContext);
	const {top10, bestSell} = useContext(ItemContext);

	return (
		<LinearGradient
			colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
			style={{ height: "100%" }}
			start={{ x: 0, y: 0.3 }}
			end={{ x: 0.5, y: 0.7 }}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={{marginBottom: 20}}>
						<TitleField titleText="Bao cao su" />
						<View >
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

					<View style={{marginBottom: 20}}>
						<TitleField titleText="Tool" />

						<View >
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
				</View>
			</ScrollView>
		</LinearGradient>
	);
};

export default ToolScreen;
