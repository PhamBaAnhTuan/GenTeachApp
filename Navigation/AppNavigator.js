import { createStackNavigator } from "@react-navigation/stack";
import GetStart from "../pages/GetStart/GetStart";
import SignInOrSignUp from "../pages/SignInOrSignUp/SignInOrSignUp";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import TabNavigator from "../Navigation/TabNavigator";

import Chat from "../pages/Chat/Chat";
import ChatList, { ChatDetail1, MyProvider } from "../pages/Chat/ChatList";
import ChatDetail from "../pages/Chat/ChatDetail";

import Screen1 from "../pages/Shop/Screen1";
import Screen2 from "../pages/Shop/Screen2";
import Screen3 from "../pages/Shop/Screen3";
import Shop from "../pages/Shop/Shop";

import Home from "../pages/Home/Home";
import Edu from "../pages/Edu/Edu";
import PodcastList from "../pages/PodCast/PodcastList";
import ShopDetail from "../pages/Shop/Cart/ShopDetail";
import Cart from "../pages/Shop/Cart/Cart";
import { AppProvider } from "../Context/Context";
import PodcastDetail from "../pages/PodCast/PodcastDetail";
import EduDetail from "../pages/Edu/EduDetail";
import Profile from "../pages/Home/Profile";

const Stack = createStackNavigator();

const AppNavigator = ({ navigation }) => {
	return (
		// <NavigationContainer>
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GetStart">
			<Stack.Screen name="GetStart" component={GetStart} />
			
			<Stack.Screen name="SignInOrSignUp" component={SignInOrSignUp} />
			<Stack.Screen name="SignIn" component={SignIn} />
			<Stack.Screen name="SignUp" component={SignUp} />

			<Stack.Screen name="TabNavigator" component={TabNavigator} />

			<Stack.Screen name="Chat" component={Chat} />
			<Stack.Screen name="ChatList" component={ChatList} />
			<Stack.Screen name="ChatDetail" component={ChatDetail} />

			<Stack.Screen name="Screen1" component={Screen1} />
			<Stack.Screen name="Screen2" component={Screen2} />
			<Stack.Screen name="Screen3" component={Screen3} />
			<Stack.Screen name="Shop" component={Shop} />
			<Stack.Screen name="ShopDetail" component={ShopDetail} />
			<Stack.Screen name="Cart" component={Cart} />

			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />

			<Stack.Screen name="Edu" component={Edu} />
			<Stack.Screen name="EduDetail" component={EduDetail} />
			
			<Stack.Screen name="PodcastList" component={PodcastList} />
			<Stack.Screen name="PodcastDetail" component={PodcastDetail} />
			<Stack.Screen name="AppProvider" component={AppProvider} />
		</Stack.Navigator>
		//</NavigationContainer>
	);
};

export default AppNavigator;
