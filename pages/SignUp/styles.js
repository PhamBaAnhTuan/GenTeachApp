import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
	safeView: {
		height: "100%",
		width: "100%",
		flex: 1,
		alignItems: "center",
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	},
	gradient: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		// justifyContent: "center",
	},
	// Title
	signUpTitleContainer: {
		height: 200,
		width: '100%',
		alignItems: "center",
		justifyContent: "center",
		// borderWidth: 1
	},
	signUpTitle: {
		fontSize: 50,
		fontWeight: "bold",
	},

	// Form
	formContainer: {
		height: 200,
		width: '100%',
		alignItems: "center",
		justifyContent: "center",
		// borderWidth: 1
	},
	textInput: {
		borderWidth: 1,
		borderRadius: 30,
		height: 60,
		width: 300,
		fontSize: 15,
		// fontWeight: "400",
		paddingLeft: 25,
		marginVertical: 3,
		// color: "white",
	},
	passInputContainer: {
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
	passInput: {
		height: 60,
		width: 220,
		// borderWidth: 1
	},

	signUpBtnContainer: {
		height: 70,
		width: '100%',
		alignItems: "center",
		marginTop: 100,
		// borderWidth: 1
	},
	signUpBtn: {
		paddingHorizontal: 120,
		paddingVertical: 20,
		borderRadius: 30,
		// marginVertical: 10,
	},

	// Or text
	orContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		// marginTop: 50,
		// borderWidth: 1
	},

	// Icon
	icon: {
		marginHorizontal: 50,
		marginVertical: 10,
	},
	notMbText: {
		fontSize: 14,
		fontWeight: "700",
		marginTop: 15,
	},
	signInText: {
		fontSize: 14,
		fontWeight: "bold",
		color: "plum",
		marginTop: 15,
	},
});

export default styles;
