import { Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Shop from "../pages/Shop/Shop";

import Home from "../pages/Home/Home";
import Chat from "../pages/Chat/Chat";
import Edu from "../pages/Edu/Edu";
import PodcastList from "../pages/PodCast/PodcastList";

import { Ionicons } from "@expo/vector-icons";
import ChatList from "../pages/Chat/ChatExpert/ChatList";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
	return (
		// <NavigationContainer>
		<Tab.Navigator
			initialRouteName="Home"
			// headerShown={false}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === "Home") {
						[iconName, color, size] = focused
							? ['home', '#fff', 30]
							: ['home-outline', 'grey', 21];						
					} else if (route.name === "Shop") {
						[iconName, color, size] = focused
							? ['cart', '#fff', 30]
							: ['cart-outline', 'grey', 21];	
					} else if (route.name === "Chat") {
						[iconName, color, size] = focused
							? ['chatbubble-sharp', '#fff', 30]
							: ['chatbubble-outline', 'grey', 21];	
					} else if (route.name === "Edu") {
						[iconName, color, size] = focused
							? ['book', '#fff', 30]
							: ['book-outline', 'grey', 21];	
					} else if (route.name === "Podcast") {
						[iconName, color, size] = focused
							? ['headset', '#fff', 30]
							: ['headset-outline', 'grey', 21];	
					}
					// You can return any React element here, including custom icons
					return <Ionicons name={iconName} size={size} color={color}  />;
				},
				headerShown: false,
				tabBarActiveTintColor: "#867edb",
				tabBarInactiveTintColor: "plum",
				headerBackgroundContainerStyle: "transparent",
				tabBarLabelStyle: {
					// fontWeight: "bold",
					fontSize: 0,
					// paddingBottom: 5
				},
				tabBarStyle: {
					backgroundColor: "plum",
					color: 'plum',
					height: 65,
					paddingBottom: 10,
				},
				// tabBarActiveBackgroundColor: 'green'
			})}
		>
			<Tab.Screen
				name="Chat"
				component={Chat}
			/>
			<Tab.Screen
				name="Shop"
				component={Shop}
			/>
			<Tab.Screen
				name="Home"
				component={Home}
			/>
			<Tab.Screen
				name="Edu"
				component={Edu}
			/>
			<Tab.Screen
				name="Podcast"
				component={PodcastList}
			/>
		</Tab.Navigator>
		// </NavigationContainer>
	);
};

export default TabNavigator;
