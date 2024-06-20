import { NavigationContainer } from "@react-navigation/native";
import GetStart from "./pages/GetStart/GetStart";
import AppNavigator from "./Navigation/AppNavigator";
import TabNavigator from "./Navigation/TabNavigator";
import SignInOrSignUp from "./pages/SignInOrSignUp/SignInOrSignUp";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Profile from "./pages/Home/Profile";
import Chat from "./pages/Chat/Chat";
import ChatList, { ChatDetail1 } from "./pages/Chat/ChatList";
import ChatDetail from "./pages/Chat/ChatDetail";
import Screen1 from "./pages/Shop/Screen1";
import Screen2 from "./pages/Shop/Screen2";
import Screen3 from "./pages/Shop/Screen3";
import Shop from "./pages/Shop/Shop";
import Edu from "./pages/Edu/Edu";
import PodcastList from "./pages/PodCast/PodcastList";
import PodcastDetail from "./pages/PodCast/PodcastDetail";
import { View } from "react-native";
import ShopDetail from "./pages/Shop/Cart/ShopDetail";
import Cart from "./pages/Shop/Cart/Cart";
import { AppProvider, AuthContext } from "./Context/Context";
// import { Slot, useRouter, useSegments } from "expo-router";
import { useContext } from "react";
import EduDetail from "./pages/Edu/EduDetail";
import UpgradeAccount from "./pages/Home/UpGradeAccount/UpgradeAccount";
import UpGradeAccountDetail from "./pages/Home/UpGradeAccount/UpGradeAccountDetail";
import PlusScreen from "./pages/Home/UpGradeAccount/PlusScreen";


const App = () => {
	return (
		<AppProvider>
		    <NavigationContainer>
    			{/* <AppNavigator /> */}
				{/* <MainLayout /> */}
    			{/* <TabNavigator /> */}
    			{/* <DrawerNavigator /> */}
    			{/* <Shop /> */}
    			{/* <ChatList />*/}
		      {/* <ChatDetail /> */}
				{/* <SignInOrSignUp /> */}
				{/* <SignIn /> */}
				{/* <SignUp /> */}

				{/* <Home /> */}
				{/* <Profile /> */}
				{/* <UpgradeAccount /> */}
				{/* <UpGradeAccountDetail /> */}
				<PlusScreen />

				{/* <Chat /> */}
				{/* <ChatList /> */}
				{/* <ChatDetail /> */}
				{/* <Screen1 /> */}
				{/* <Screen2 /> */}
				{/* <Screen3 /> */}
				{/* <ShopDetail /> */}
				{/* < Cart /> */}
				{/* <Edu /> */}
				{/* <EduDetail /> */}
				{/* <PodcastList /> */}
				{/* <PodcastDetail /> */}
			</NavigationContainer>
		</AppProvider>
	);
};

export default App;
