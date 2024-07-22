import { useContext, useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	SafeAreaView,
	View,
	TextInput,
	Button,
	Image,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
	Alert,
	ToastAndroid
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { Entypo, Feather } from '@expo/vector-icons';
// Firebase
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";
// Fire store
import { doc, setDoc } from "firebase/firestore";
// Context
import { AuthContext } from "../../Context/Context";
import {Loading} from "../../Components/Animation";

const SignUp = ({ navigation }) => {

	const { isLoading, setIsLoading } = useContext(AuthContext);
	const auth = FIREBASE_AUTH;
    const db = FIREBASE_FIRESTORE;

	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleUserNameChange = (text) => setUserName(text);
	const handleEmailChange = (text) => setEmail(text);
	const handlePasswordChange = (text) => setPassword(text);

	// Sign Up Function
	const signUpMethod = async () => {
		if(!userName && !email && !password) {
			ToastAndroid.show('Please enter full name, email and password', ToastAndroid.SHORT);
			return;
		}if(!userName){
			ToastAndroid.show('Please enter full name', ToastAndroid.SHORT);
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
			const response = await createUserWithEmailAndPassword( auth, email, password);
			setIsLoading(false);
			
			console.log("User signed up success:", 'email:', response?.user?.email);
			navigation.replace("TabNavigator");
			// Show notification
			ToastAndroid.show('Signed up successfully', ToastAndroid.SHORT);
			ToastAndroid.show('Signed in successfully', ToastAndroid.SHORT);

			await setDoc(doc(db, 'user', response?.user?.uid), {
				userId: response?.user?.uid,
				userName,
				email,
				password,
			});
			console.log('Store user in4 success');

		} catch (error) {
			let msg = error.message;
			if(msg.includes('(auth/invalid-email)')) {msg = 'Invalid email!'}
			if(msg.includes('(auth/email-already-in-use)')) {msg = 'Email already in use!'}	
			if(msg.includes('(auth/missing-email)')){msg = 'Please enter your email'}	
			if(msg.includes('(auth/missing-password)')){msg = 'Please enter your password'}
			if(msg.includes('(auth/weak-password)')) {msg = 'Invalid password!\nPassword required 6 characters'}
			// console.error(msg);
			Alert.alert('Invalid sign up', msg);
			setIsLoading(false);
		}
		
	};

	// Handle Icon
	const [icon, setIcon] = useState('eye');
	const [isHide, setIsHide] = useState(true);

	const onPressIcon = () => {
		setIcon(icon === 'eye'? 'eye-off' : 'eye');
		setIsHide(!isHide);
	}

	return (
		<SafeAreaView style={styles.safeView}>
			<LinearGradient
				colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={styles.gradient}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			>
				{/* <Image style={styles.logo} source={require('../assets/Logo/Spotify.png')}></Image> */}
				<View style={styles.signUpTitleContainer}><Text style={styles.signUpTitle}>Sign Up</Text></View>

				{/* Input */}
				<KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
					<TextInput
						value={userName}
						onChangeText={handleUserNameChange}
						style={styles.textInput}
						keyboardType="default"
						placeholder="Full name"
					></TextInput>

					<TextInput
						value={email}
						onChangeText={handleEmailChange}
						style={styles.textInput}
						keyboardType="email-address"
						placeholder="Email"
					></TextInput>

					<View style={styles.passInputContainer}>
						<TextInput
							value={password}
							onChangeText={handlePasswordChange}
							style={styles.passInput}
							keyboardType="default"
							placeholder="Password"
							secureTextEntry={isHide}
						/>
						<TouchableOpacity style={{marginRight: 20}} onPress={onPressIcon} ><Feather name={icon} size={23} color="black" /></TouchableOpacity>
					</View>

				</KeyboardAvoidingView>

				<View style={styles.signUpBtnContainer}>

				{isLoading
				? ( <Loading size={200} /> )

				: ( <TouchableOpacity // Signup Btn
						onPress={signUpMethod}
					>
						<LinearGradient
							colors={["#3AABBB", "#B689E2"]}
							start={{ x: 0, y: 0.5 }}
							end={{ x: 1, y: 0.5 }}
							style={styles.signUpBtn}
						>
							<Text
								style={{
									fontSize: 15,
									fontWeight: "700",
									color: "white",
								}}
							>
								Sign Up
							</Text>
						</LinearGradient>
					</TouchableOpacity>
				)}
				</View>

				<View // Other method
					style={styles.orContainer}
				>
					<View
						style={{ height: 1, width: 130, backgroundColor: "black",}} ></View>

					<Text
						style={{ paddingHorizontal: 10, fontSize: 15,}}
					>
						Or
					</Text>

					<View
						style={{ height: 1, width: 130, backgroundColor: "black",}} ></View>
					</View>

				{/* Another Sign In */}
				<View
					style={{
						flexDirection: "row",
						alignItems: "space-between",
					}}
				>
					<TouchableOpacity onPress={() => alert("Google")}>
						<Image
							style={styles.icon}
							source={require("../../assets/Icon/google.png")}
						></Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => alert("Apple")}>
						<Image
							style={styles.icon}
							source={require("../../assets/Icon/apple.png")}
						></Image>
					</TouchableOpacity>
				</View>

				{/* Other method */}
				<View style={{ flexDirection: "row", marginTop: 30 }}>
					<Text style={styles.notMbText}>Have an account? </Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("SignIn")}
					>
						<Text style={styles.signInText}>Sign In</Text>
					</TouchableOpacity>
				</View>

			</LinearGradient>
		</SafeAreaView>
	);
};

export default SignUp;
