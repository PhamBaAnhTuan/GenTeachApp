import React, { useContext, useEffect, useState } from "react";
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
// Component
import { SearchView, TitleField } from "../../Components/Components";
import PodcastCard from '../../Components/PodcastCard';
// Icon
import { Entypo, Feather } from "@expo/vector-icons";
// Context
import { ItemContext } from "../../Context/Context";

const PodcastList = ({ navigation }) => {

	const { podcast1, podcast2, podcast3 } = useContext(ItemContext);

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={{ flex: 1 }}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>

				<ScrollView showsVerticalScrollIndicator={false} >

					<SearchView />

					<View style={{ marginTop: 20, paddingLeft: 0 }}>
						<TitleField titleText="Sexual edu" />
						<View style={styles.podcastContainer}>
							<ScrollView horizontal={true}>
								{podcast1.map((item, index) => (
									<PodcastCard
										key={index}
										onPress={() => navigation.navigate('PodcastDetail', { selectedPodcast: podcast1[index] })}
										img={item.img}
										name={item.name}
										author={item.author}
									/>
								))}
							</ScrollView>
						</View>
					</View>

					<View style={{ paddingLeft: 0 }}>
						<TitleField titleText="Self growth" />
						<View style={styles.podcastContainer}>
							<ScrollView horizontal={true}>
								{podcast2.map((item, index) => (
									<PodcastCard
										key={index}
										onPress={() => navigation.navigate('PodcastDetail', { selectedPodcast: podcast2[index] })}
										img={item.img}
										name={item.name}
										author={item.author}
									/>
								))}
							</ScrollView>
						</View>
					</View>

					<View style={{ paddingLeft: 0 }}>
						<TitleField titleText="Daily life" />
						<View style={styles.podcastContainer}>
							<ScrollView horizontal={true}>
								{podcast3.map((item, index) => (
									<PodcastCard
										key={index}
										onPress={() => navigation.navigate('PodcastDetail', { selectedPodcast: podcast3[index] })}
										img={item.img}
										name={item.name}
										author={item.author}
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

export default PodcastList;
