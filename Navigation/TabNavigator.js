import { Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Screen1 from "../pages/Shop/Screen1";
import Screen2 from "../pages/Shop/Screen2";
import Screen3 from "../pages/Shop/Screen3";
import Shop from "../pages/Shop/Shop";

import Home from "../pages/Home/Home";
import Chat from "../pages/Chat/Chat";
import Edu from "../pages/Edu/Edu";
import PodcastList from "../pages/PodCast/PodcastList";

import { Ionicons } from "@expo/vector-icons";
import ChatList from "../pages/Chat/ChatList";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
	return (
		// <NavigationContainer>
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === "Home") {
						[iconName, color, size] = focused
							? ['home', '#867edb', 35]
							: ['home-outline', 'grey', 21];						
					} else if (route.name === "Shop") {
						[iconName, color, size] = focused
							? ['cart', '#867edb', 35]
							: ['cart-outline', 'grey', 21];	
					} else if (route.name === "Chat") {
						[iconName, color, size] = focused
							? ['chatbox', '#867edb', 35]
							: ['chatbox-outline', 'grey', 21];	
					} else if (route.name === "Edu") {
						[iconName, color, size] = focused
							? ['book', '#867edb', 35]
							: ['book-outline', 'grey', 21];	
					} else if (route.name === "Podcast") {
						[iconName, color, size] = focused
							? ['headset', '#867edb', 35]
							: ['headset-outline', 'grey', 21];	
					}
					// You can return any React element here, including custom icons
					return <Ionicons name={iconName} size={size} color={color}  />;
				},
				tabBarActiveTintColor: "#867edb",
				tabBarInactiveTintColor: "plum",
				headerBackgroundContainerStyle: "transparent",
				tabBarLabelStyle: {
					fontWeight: "bold",
				},
				tabBarStyle: {
					backgroundColor: "plum",
					color: 'plum',
					height: 60,
					paddingTop: 10,
					// borderTopStartRadius: 20,
					// borderTopRightRadius: 20
				},
			})}
		>
			<Tab.Screen
				name="Chat"
				component={ChatList}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Shop"
				component={Shop}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Edu"
				component={Edu}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Podcast"
				component={PodcastList}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
		// </NavigationContainer>
	);
};

export default TabNavigator;
