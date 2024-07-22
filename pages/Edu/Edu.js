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
	KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageSlider } from "react-native-image-slider-banner";
// Components
import { TitleField, CardCourse, SearchView } from "../../Components/Components";
// Icons
import { MaterialIcons, Feather } from "@expo/vector-icons";
// Context
import { ItemContext } from "../../Context/Context";
import EduCard from "../../Components/EduCard";

const Edu = ({ navigation }) => {
	const { eduSexual, eduMentality, eduSelfGrowth } = useContext(ItemContext);

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={{ flex: 1 }}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				<ScrollView showsVerticalScrollIndicator={false}>
					<SearchView />

					<View style={{ marginTop: 20, paddingLeft: 0 }}>
						<TitleField titleText="Sexual Edu" />
						<View style={styles.courseContainer}>
							<ScrollView horizontal={true}>
								{eduSexual.map((item, index) => (
									<EduCard 
										key={index}
										onPress={() => navigation.navigate("EduDetail", {selectedCourse: eduSexual[index]}) }
										src={{uri: item.img}}
										author={item.author}
										name={item.name}
										price={item.price}
									/>
								))}
							</ScrollView>
						</View>
					</View>

					<View style={{paddingLeft: 0}} >
						<TitleField titleText="Mentality" />
						<View style={styles.courseContainer}>
							<ScrollView horizontal={true}>
								{eduMentality.map((item, index) => (
									<EduCard 
									key={index}
									onPress={() => navigation.navigate("EduDetail", {selectedCourse: eduMentality[index]}) }
									src={{uri: item.img}}
									author={item.author}
									name={item.name}
									price={item.price}
								/>
								))}
							</ScrollView>
						</View>
					</View>

					<View style={{paddingLeft: 0}}>
						<TitleField titleText="Self Growth" />
						<View style={styles.courseContainer}>
							<ScrollView horizontal={true}>
								{eduSelfGrowth.map((item, index) => (
									<EduCard 
									key={index}
									onPress={() => navigation.navigate("EduDetail", {selectedCourse: eduSelfGrowth[index]}) }
									src={{uri: item.img}}
									author={item.author}
									name={item.name}
									price={item.price}
								/>
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
