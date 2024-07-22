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
	const {book17, book18} = useContext(ItemContext);

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
						<TitleField titleText="Tuôi dậy thì" />
						<View >
							<ScrollView horizontal={true}>
							{book17.map((item, index) => (
									<ShopCard 
										key={index}
										onPress={() => navigation.navigate('ShopDetail', { selectedItem: book17[index] })}
										brand={item.author}
										name={item.name}
										img={item.img}
										price={item.price}
									/>
								))}
							</ScrollView>
						</View>
					</View>

					<View style={{marginBottom: 20}}>
						<TitleField titleText="Tuổi vị thành niên" />

						<View >
							<ScrollView horizontal={true}>
							{book18.map((item, index) => (
									<ShopCard 
									key={index}
									onPress={() => navigation.navigate('ShopDetail', { selectedItem: book18[index] })}
									brand={item.author}
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


// const styles = StyleSheet.create({})