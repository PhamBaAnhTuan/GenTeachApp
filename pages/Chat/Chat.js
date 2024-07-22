import React, { useContext, useState, useEffect } from "react";
import styles from "./styles";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// Lottie
import LottieView from "lottie-react-native";
// Component
import { ChatCard } from "../../Components/Components";
import { AI, Expert } from "../../Components/Animation";
import PodcastCard from "../../Components/PodcastCard";
// Icons
import { AntDesign } from '@expo/vector-icons';
// Context
import { ExpertContext } from '../../Context/Context';

const Chat = ({ navigation }) => {
	const { sexualExpert, dermatologistExpert, mentalHealthExpert } = useContext(ExpertContext);

	// 
	const [isVisible, setIsVisible] = useState(true);
	useEffect(() => {
		const timerId = setInterval(() => {
			setIsVisible(!isVisible);
		}, 3000);
		// setIsVisible(isVisible);
		return () => clearInterval(timerId);
	}, []);

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={styles.gradient}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Welcome to GenChat!</Text>
						<Text>You have 5 times to chat free, Check it out!</Text>
						{/* <Text>Check it out</Text> */}
					</View>


					<View style={styles.container1}>
						<View style={styles.titleWrap}>
							<Text style={styles.text1}>
								Sexual health expert
							</Text>
						</View>

						<View style={styles.cardWrap}>
							<ScrollView horizontal={true}>
								{sexualExpert.map((item, index) => (
									<PodcastCard
										onPress={() => navigation.navigate('ChatDetail', { selectedExpert: sexualExpert[index] })}
										key={index}
										img={item.img}
										name={item.role}
										author={item.name}
										star={item.star}
										icon={<AntDesign name="star" size={15} color="gold" />}
									/>
								))}
							</ScrollView>
						</View>
					</View>


					<View style={styles.container1}>
						<View style={styles.titleWrap}>
							<Text style={styles.text1}>
								Dermatologist expert
							</Text>
						</View>

						<View style={styles.cardWrap}>
							<ScrollView horizontal={true}>
								{dermatologistExpert.map((item, index) => (
									<PodcastCard
										onPress={() => navigation.navigate('ChatDetail', { selectedExpert: dermatologistExpert[index] })}
										key={index}
										img={item.img}
										name={item.role}
										author={item.name}
										star={item.star}
										icon={<AntDesign name="star" size={15} color="gold" />}
									/>
								))}
							</ScrollView>
						</View>
					</View>


					<View style={styles.container1}>
						<View style={styles.titleWrap}>
							<Text style={styles.text1}>
								Mental Health expert
							</Text>
						</View>

						<View style={styles.cardWrap}>
							<ScrollView horizontal={true}>
								{mentalHealthExpert.map((item, index) => (
									<PodcastCard
										onPress={() => navigation.navigate('ChatDetail', { selectedExpert: mentalHealthExpert[index] })}
										key={index}
										img={item.img}
										name={item.role}
										author={item.name}
										star={item.star}
										icon={<AntDesign name="star" size={15} color="gold" />}
									/>
								))}
							</ScrollView>
						</View>
					</View>

				</ScrollView>
				<TouchableOpacity style={styles.aiContainer} onPress={() => navigation.navigate('ChatAI')}>
					<AI />
					{isVisible && <Text style={styles.aiText}>Hi! I'm GenTech, How can I help you</Text>}
				</TouchableOpacity>

			</LinearGradient>
		</SafeAreaView>
	);
};

export default Chat;
