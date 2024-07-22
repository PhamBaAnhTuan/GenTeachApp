import { NavigationContainer } from "@react-navigation/native";
import { AppProvider, AuthContext } from "./Context/Context";

import AppNavigator from "./Navigation/AppNavigator";
import TabNavigator from "./Navigation/TabNavigator";

import GetStart from "./pages/GetStart/GetStart";
import SignInOrSignUp from "./pages/SignInOrSignUp/SignInOrSignUp";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import Home from "./pages/Home/Home";
import Profile from "./pages/Home/Profile";
import UpGradeAccountDetail from "./pages/Home/UpGradeAccount/UpGradeAccountDetail";
import PlusScreen from "./pages/Home/UpGradeAccount/PlusScreen";
import PremiumScreen from "./pages/Home/UpGradeAccount/PremiumScreen";

import Chat from "./pages/Chat/Chat";
import ChatList from "./pages/Chat/ChatExpert/ChatList";
import ChatDetail from "./pages/Chat/ChatExpert/ChatDetail";
import ChatAI from "./pages/Chat/ChatAI/ChatAI";
import ExpertIn4 from "./pages/Chat/ChatExpert/ExpertIn4";
import ExpertProfile from "./pages/Chat/ChatExpert/ExpertProfile/ExpertProfile";

import Shop from "./pages/Shop/Shop";
import ShopDetail from "./pages/Shop/Cart/ShopDetail";
import Cart from "./pages/Shop/Cart/Cart";

import Edu from "./pages/Edu/Edu";
import EduDetail from "./pages/Edu/EduDetail";

import PodcastList from "./pages/PodCast/PodcastList";
import PodcastDetail from "./pages/PodCast/PodcastDetail";


const App = () => {
	return (
		<AppProvider>
		    <NavigationContainer>
    			<AppNavigator />
    			{/* <TabNavigator /> */}
    			{/* <DrawerNavigator /> */}

				{/* <SignInOrSignUp /> */}
				{/* <SignIn /> */}
				{/* <SignUp /> */}

				{/* <Chat /> */}
				{/* <ChatAI /> */}
				{/* <ChatList /> */}
				{/* <ChatDetail /> */}
				{/* <ExpertIn4 /> */}
				{/* <ExpertProfile /> */}

    			{/* <Shop /> */}
				{/* <Screen1 /> */}
				{/* <Screen2 /> */}
				{/* <Screen3 /> */}
				{/* <ShopDetail /> */}
				{/* <Cart /> */}

				{/* <Home /> */}
				{/* <Profile /> */}
				{/* <UpGradeAccount /> */}
				{/* <UpGradeAccountDetail /> */}
				{/* <PlusScreen /> */}
				{/* <PremiumScreen /> */}

				{/* <Edu /> */}
				{/* <EduDetail /> */}
				
				{/* <PodcastList /> */}
				{/* <PodcastDetail /> */}
			</NavigationContainer>
		</AppProvider>
	);
};

export default App;
