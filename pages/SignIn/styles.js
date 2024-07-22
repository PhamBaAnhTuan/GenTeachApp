import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

const styles = StyleSheet.create({
	safeView: {
		height: Dimensions.get('screen').height,
		width: Dimensions.get('screen').width,
		flex: 1,
		// alignItems: "center",
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	},
	gradient: {
		height: "100%",
		width: "100%",
		alignItems: "center",
	},
	// Title
	signInTitleContainer:{
		height: 200,
		width: '100%',
		alignItems: "center",
		justifyContent: "center",
		// borderWidth: 1
	},
	signInTitle: {
		fontSize: 50,
		fontWeight: "bold",
		// color: 'white',
	},

	// Form
	formContainer:{
		height: 170,
		width: '100%',
		alignItems: "center",
		// justifyContent: "center",
		// borderWidth: 1
	},
	clickText: {
		fontSize: 12,
		fontWeight: "400",
		opacity: 0.7,
		textDecorationLine: 'underline',
	},

	textInput: {		
		borderWidth: 1,
		borderRadius: 30,
		height: 60,
		width: 300,
		paddingLeft: 25,
		fontSize: 15,
		fontWeight: "400",
		marginVertical: 3,
	},
	passInputContainer:{
		height: 60,
		width: 300,
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: 'space-between',
		borderWidth: 1,
		borderRadius: 30,
		fontSize: 15,
		// fontWeight: "400",
		paddingLeft: 25,
		marginVertical: 3,
	},
	passInput:{
		height: 60,
		width: 220,
		// borderWidth: 1
	},
	fgPassContainer:{
		width: '75%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// borderWidth: 1
	},

	signInBtnContainer:{
		height: 70,
		width: '100%',
		alignItems: "center",
		marginTop: 100,
		// borderWidth: 1
	},

	signInBtn: {
		// backgroundColor: "#66abcd",
		paddingHorizontal: 120,
		paddingVertical: 20,
		borderRadius: 30,
		// marginVertical: 10,
		// borderWidth: 1
	},

	orTextContainer:{
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		// marginTop: 50,
		// borderWidth: 1
	},
	icon: {
		marginHorizontal: 50,
		marginVertical: 10,
	},

	notMbText: {
		fontSize: 14,
		fontWeight: "700",
		marginTop: 15,
		color: "#000",
	},
	signUpText: {
		fontSize: 14,
		fontWeight: "bold",
		color: "plum",
		marginTop: 15,
	},
});

export default styles;
