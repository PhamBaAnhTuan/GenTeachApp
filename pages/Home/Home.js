import React, { useContext, useRef, useState } from "react";
import styles from "./styles";
import {
	Alert,
	Button,
	Dimensions,
	FlatList,
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	ToastAndroid
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// Icons
import { AntDesign, Feather, Ionicons, Entypo, FontAwesome6, FontAwesome } from "@expo/vector-icons";
// Context
import { AuthContext } from "../../Context/Context";
import { ItemContext } from "../../Context/Context";
// Component
import { Hello } from "../../Components/Animation";
// import VideoPlayer from '../../Components/VideoPlayer';
import { Video } from 'expo-av';



const Home = ({ navigation }) => {

	const { user, setUser, isSignedIn, setIsSignedIn } = useContext(AuthContext);

	// Handle follow
	const [follow, setFollow] = useState('Follow');
	const setFL = () => {
		follow === 'Follow'
			? (setFollow('Following'), ToastAndroid.show('Following', ToastAndroid.SHORT))
			: (setFollow('Follow'), ToastAndroid.show('Unfollowed', ToastAndroid.SHORT));
	};
	// Handle heart
	const [heart, setHeart] = useState('hearto');
	const [color, setColor] = useState('white');
	const handleHeart = () => {
		setHeart(heart === 'hearto' ? 'heart' : 'hearto');
		setColor(color === 'white' ? 'red' : 'white');
	};

	// Video
	const { video } = useContext(ItemContext);
	const videoRef = useRef(null);
	const [status, setStatus] = useState({});
	const arr = [1, 2, 3, 4];

	const renderItem = ({ item }) => (
		<View style={[{ flex: 1, height: Dimensions.get('window').height - 65 }]} >

			<Video
				ref={videoRef}
				// source={require('../../assets/video/video2.mp4')}
				source={{
					uri: item?.src
				}}
				style={{ width: '100%', height: '100%' }}
				shouldPlay={true}
				resizeMode='cover'
				isLooping={false}
				onPlaybackStatusUpdate={status => setStatus(() => status)}
				isMuted={true}

			/>

			<TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.personIcon}>
				<Ionicons name="person-outline" size={24} color="white" />
			</TouchableOpacity>

			<View style={styles.navbarInterAct}>
				<TouchableOpacity style={styles.likeWrap} onPress={handleHeart}>
					<AntDesign name={heart} size={25} color={color} />
					<Text style={styles.text1} >{item.like}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.likeWrap}>
					<FontAwesome6 name="comment-alt" size={25} color="white" />
					<Text style={styles.text1} >{item.comment}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.likeWrap}>
					<Feather name="send" size={25} color="white" />
					<Text style={styles.text1} >{item.share}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.likeWrap}>
					<Entypo name="dots-three-vertical" size={20} color="white" />
				</TouchableOpacity>
			</View>

			<View style={styles.captionContainer}>

				<View style={styles.in4Wrap}>
					<View style={styles.avtWrap}>
						<TouchableOpacity>
							<Image style={styles.avt} source={require('../../assets/Icon/Sun.png')} resizeMode="cover" />
						</TouchableOpacity>

						<TouchableOpacity>
							<Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>{item.author}</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity style={styles.flWrap} onPress={setFL}>
						<Text style={{ fontSize: 11, color: 'white' }}>{follow}</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.captionWrap}>
					<Text style={{ fontSize: 12, fontWeight: '400', color: 'white' }}>{item.caption}</Text>
				</View>

			</View>

			<View style={styles.musicWrap}>
				<TouchableOpacity style={styles.musicBox}>
					<FontAwesome name="music" size={15} color="white" />
					<Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 10, color: 'white' }}>Music</Text>
				</TouchableOpacity>

				<TouchableOpacity>
					<Image source={require('../../assets/postcard/postcard4.png')} resizeMode="center" style={styles.musicImg} />
				</TouchableOpacity>
			</View>
		</View>

	);

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={styles.gradient}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>

				<View style={styles.videoContainer}>
					{/* <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.personIcon}>
						<Ionicons name="person-outline" size={24} color="white" />
					</TouchableOpacity> */}

					<FlatList
						data={video}
						renderItem={renderItem}
						pagingEnabled
						showsVerticalScrollIndicator={false}
					/>
				</View>

			</LinearGradient>
		</SafeAreaView>
	);
};

export default Home;
