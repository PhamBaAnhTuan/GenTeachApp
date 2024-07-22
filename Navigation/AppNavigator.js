import { createStackNavigator } from "@react-navigation/stack";
import { AppProvider } from "../Context/Context";

import GetStart from "../pages/GetStart/GetStart";
import SignInOrSignUp from "../pages/SignInOrSignUp/SignInOrSignUp";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

import TabNavigator from "../Navigation/TabNavigator";

import Chat from "../pages/Chat/Chat";
import ChatList from "../pages/Chat/ChatExpert/ChatList";
import ChatDetail from "../pages/Chat/ChatExpert/ChatDetail";
import ChatAI from "../pages/Chat/ChatAI/ChatAI";
import ExpertIn4 from "../pages/Chat/ChatExpert/ExpertIn4";
import ExpertProfile from "../pages/Chat/ChatExpert/ExpertProfile/ExpertProfile";

import Shop from "../pages/Shop/Shop";
import ShopDetail from "../pages/Shop/Cart/ShopDetail";
import Cart from "../pages/Shop/Cart/Cart";
import Buy from "../pages/Shop/Cart/Buy";

import Home from "../pages/Home/Home";
import Profile from "../pages/Home/Profile";
import UpGradeAccountDetail from "../pages/Home/UpGradeAccount/UpGradeAccountDetail";

import Edu from "../pages/Edu/Edu";
import EduDetail from "../pages/Edu/EduDetail";

import PodcastList from "../pages/PodCast/PodcastList";
import PodcastDetail from "../pages/PodCast/PodcastDetail";

const Stack = createStackNavigator();

const AppNavigator = ({ navigation }) => {
	return (
		// <NavigationContainer>
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GetStart">
			<Stack.Screen name="AppProvider" component={AppProvider} />

			<Stack.Screen name="GetStart" component={GetStart} />

			<Stack.Screen name="SignInOrSignUp" component={SignInOrSignUp} />
			<Stack.Screen name="SignIn" component={SignIn} />
			<Stack.Screen name="SignUp" component={SignUp} />

			<Stack.Screen name="TabNavigator" component={TabNavigator} />

			<Stack.Screen name="Chat" component={Chat} />
			<Stack.Screen name="ChatAI" component={ChatAI} />
			<Stack.Screen name="ChatList" component={ChatList} />
			<Stack.Screen name="ChatDetail" component={ChatDetail} />
			<Stack.Screen name="ExpertIn4" component={ExpertIn4} />
			<Stack.Screen name="ExpertProfile" component={ExpertProfile} />

			<Stack.Screen name="Shop" component={Shop} />
			<Stack.Screen name="ShopDetail" component={ShopDetail} />
			<Stack.Screen name="Cart" component={Cart} />
			<Stack.Screen name="Buy" component={Buy} />

			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="UpGradeAccountDetail" component={UpGradeAccountDetail} />

			<Stack.Screen name="Edu" component={Edu} />
			<Stack.Screen name="EduDetail" component={EduDetail} />

			<Stack.Screen name="PodcastList" component={PodcastList} />
			<Stack.Screen name="PodcastDetail" component={PodcastDetail} />
		</Stack.Navigator>
		//</NavigationContainer>
	);
};

export default AppNavigator;
