import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput } from "react-native";
import styles from "./styles";
import { Video, ResizeMode } from "expo-av";
import { MaterialIcons, Feather } from "@expo/vector-icons";

export const TitleField = (props) => {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.titleText}>{props.titleText}</Text>
			<TouchableOpacity>
				<Text style={styles.viewAllText}>View all</Text>
			</TouchableOpacity>
		</View>
	);
};

export const SearchView = () => {
	return (
		<View style={styles.searchContainer}>
			<KeyboardAvoidingView behavior="padding">
				<TextInput
					style={styles.searchInput}
					placeholder="Search"
					editable={true}
				/>
			</KeyboardAvoidingView>

			<TouchableOpacity style={{ marginRight: 15 }}>
				<Feather
					name="search"
					size={24}
					color="black"
				/>
			</TouchableOpacity>
		</View>
	);
}

export const VideoCard = () => {
	const video = useRef(null);
	// const [status, setStatus] = useState({});

	return (
		<View>
			<FlatList>
				<Video
					ref={video}
					style={styles.video}
					source={{
						uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
					}}
					// useNativeControls
					resizeMode='contain'
					isLooping
					onPlaybackStatusUpdate={(status) => setStatus(() => status)}
				/>
			</FlatList>
		</View>
	);
};

export const SettingCard = (props) => {
	return (
		<>
			<View style={styles.settingWrap}>
				<View style={styles.wrapLeft}>
					<View style={{ opacity: 0.8, paddingHorizontal: 10, width: 50, alignItems: 'center' }}>{props.icon}</View>
					<Text style={styles.name}>{props.name}</Text>
				</View>
				<MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={{ paddingHorizontal: 15 }} />
			</View>

			<View style={{height: 0.7, width: 320, backgroundColor: 'black', alignSelf: 'center', opacity: 0.2}}></View>
		</>
	);
};

export const UpGradeCard = (props) => {
	return (
	  <View style={styles.plusCardContainer}>
			{/* <View style={styles.wrap1}> */}
				 <Image
					  style={styles.cardImg}
					  source={props.src}
					  resizeMode="contain"
				 />
			{/* </View> */}
 
				 <Text style={styles.title}>{props.title}</Text>
			<Text style={styles.text}>
				 {props.contain}
			</Text>
	  </View>
	)
};

export const UpGradeCardSmall = (props) => {
	return(
		<View style={styles.upGradeCardContainer}>
         <View style={styles.navbarLeft}>
				<Text style={styles.upGradeCardSaving}>
					{props.title}
				</Text>
			</View>

         <View style={styles.upGradeCardWrap}>
         	<Text style={styles.upGradeCardMonth}>{props.month} Month</Text>
	         <Text style={styles.upGradeCardPrice}>{props.price}$</Text>
         </View>
      </View>
	)
}