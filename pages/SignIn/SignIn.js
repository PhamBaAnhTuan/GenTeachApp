import { useContext, useState, createContext, useRef, useEffect } from "react";
import {
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	ImageBackground,
	Image,
	TextInput,
	KeyboardAvoidingView,
	Alert,
	ToastAndroid
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
// Icons
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
// Firebase
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../../Firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "@firebase/auth";
// Fire store
import { doc, getDoc } from "firebase/firestore";
// Context
import { AuthContext } from "../../Context/Context";
// Component
import {Loading} from "../../Components/Animation";
// Router
import { useRouter } from "expo-router";

const SignIn = ({ navigation }) => {

	// const router = useRouter();

	const { isSignedIn, setIsSignedIn, user, setUser, isLoading, setIsLoading } = useContext(AuthContext);
	const auth = FIREBASE_AUTH;
	const db = FIREBASE_FIRESTORE;

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleEmailChange = (text) => setEmail(text);
	const handlePasswordChange = (text) => setPassword(text)

	// Sign in method
	const signInMethod = async () => {
		if(!email && !password) {
			ToastAndroid.show('Please enter email and password', ToastAndroid.SHORT);
			return;
		}if(!email){
			ToastAndroid.show('Please enter email', ToastAndroid.SHORT);
			return;
		}if(!password){
			ToastAndroid.show('Please enter password', ToastAndroid.SHORT);
			return;
		}
		try {
			setIsLoading(true);
			const response = await signInWithEmailAndPassword(auth, email, password);
			setIsLoading(false);

			setUser(response?.user);
			console.log('User signed in', response?.user.email);
			
			navigation.replace('TabNavigator');
			// Show notification
			ToastAndroid.show('Signed in successfully', ToastAndroid.SHORT);
			// router.replace('TabNavigator');
			setIsSignedIn(true);
			console.log('is signed in:', isSignedIn);

			setEmail('');
			setPassword('');

			// Get user data
			try {
				const userRef = doc(db, "user", response?.user?.uid);
				const docSnap = await getDoc(userRef);
				const data = docSnap.data();

				if (docSnap.exists()) {
					console.log("User data:", data);
					setUser(data);
				} else {
					console.log("No such document!");
				}
			} catch (error) {
				console.error('Fetch user error:', error);
			}

		} catch (error) {
			let msg = error.message;
			if (msg.includes('(auth/invalid-email)')) { msg = 'Invalid email!' }
			if (msg.includes('(auth/missing-password)')) { msg = 'Please enter your password' }
			if (msg.includes('(auth/invalid-credential)')) { msg = 'Invalid email or password!' }
			Alert.alert('Invalid sign in', msg);
			setIsLoading(false);
		}
	};

	// Handle icon eye
	const [icon, setIcon] = useState("eye");
	const [isHide, setIsHide] = useState(true);

	const handleIconEye = () => {
		setIcon(icon === "eye" ? "eye-off" : "eye");
		setIsHide(!isHide);
	};
	// Handle checkbox icon
	const [check, setCheck] = useState("checkbox-blank-outline");
	
	const handleIconCheckbox = () => {
		setCheck(check === "checkbox-blank-outline"? "checkbox-marked" : "checkbox-blank-outline");
	}

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={styles.gradient}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				<View style={styles.signInTitleContainer}>
					<Text style={styles.signInTitle}>Sign In</Text>
				</View>

				<KeyboardAvoidingView
					behavior="padding"
					style={styles.formContainer}
				>
					<View style={{ flexDirection: "row", marginVertical: 10 }}>
						<Text>If you need any support </Text>
						<TouchableOpacity
							onPress={() =>
								Alert.alert("Support", "Access GenTeach.com for more!")
							}
						>
							<Text style={styles.clickText}>Click here</Text>
						</TouchableOpacity>
					</View>

					<TextInput
						value={email}
						onChangeText={handleEmailChange}
						keyboardType="email-address"
						style={styles.textInput}
						placeholder="Email"
					/>

					<View style={styles.passInputContainer}>
						<TextInput
							value={password}
							onChangeText={handlePasswordChange}
							secureTextEntry={isHide}
							style={styles.passInput}
							placeholder="Password"
						/>
						<TouchableOpacity
							style={{ marginRight: 20 }}
							onPress={handleIconEye}
						>
							<Feather name={icon} size={23} color="black" />
						</TouchableOpacity>
					</View>

				</KeyboardAvoidingView>

				<View style={styles.fgPassContainer}>
						<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={handleIconCheckbox}>
							<MaterialCommunityIcons name={check} size={24} color="black" />
							<Text style={{fontSize: 12}}>Remember me</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => Alert.alert("Forgot password?", "Access Genteach.com/help for more!")} >
							<Text style={{ fontSize: 12 }} >Forgot password?</Text>
						</TouchableOpacity>
					</View>

				<View style={styles.signInBtnContainer}>
					{isLoading
						? (<Loading size={200} />)

						: (<TouchableOpacity // Signin Btn
							onPress={signInMethod}
						>
							<LinearGradient
								colors={["#3AABBB", "#B689E2"]}
								start={{ x: 0, y: 0.5 }}
								end={{ x: 1, y: 0.5 }}
								style={styles.signInBtn}
							>
								<Text
									style={{
										fontSize: 15,
										fontWeight: "bold",
										color: 'white'
									}}
								>
									Sign In
								</Text>
							</LinearGradient>
						</TouchableOpacity>
						)}
				</View>

				<View // Other method
					style={styles.orTextContainer}
				>
					<View
						style={{
							height: 0.7,
							width: 125,
							backgroundColor: "black",
						}}
					></View>

					<Text style={{ paddingHorizontal: 10, fontSize: 15 }}>
						Or
					</Text>

					<View
						style={{
							height: 0.7,
							width: 125,
							backgroundColor: "black",
						}}
					></View>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "space-between",
						// marginVertical: 40,
						// borderWidth: 1
					}}
				>
					<TouchableOpacity onPress={null}>
						<Image
							style={styles.icon}
							source={require("../../assets/Icon/google.png")}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => alert("Apple")}>
						<Image
							style={styles.icon}
							source={require("../../assets/Icon/apple.png")}
						/>
					</TouchableOpacity>
				</View>

				<View style={{ flexDirection: "row", marginTop: 30,  }}>
					<Text style={styles.notMbText}>Not a member? </Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("SignUp")}
					>
						<Text style={styles.signUpText}>Sign Up</Text>
					</TouchableOpacity>
				</View>

			</LinearGradient>
		</SafeAreaView>
	);
};

export default SignIn;
