import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
	safeView: {
		height: "100%",
		width: "100%",
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
		height: '25%',
		width: '100%',
		alignItems: "center",
		justifyContent: "center",
		// borderWidth: 1
	},
	signInTitle: {
		fontSize: 50,
		fontWeight: "bold",
	},
	formContainer:{
		height: '30%',
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1
	},
	clickText: {
		fontSize: 12,
		fontWeight: "400",
		opacity: 0.7,
		textDecorationLine: 'underline',
	},
	// Form
	textInput: {		
		borderWidth: 1,
		borderRadius: 20,
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
		borderRadius: 20,
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
	signInBtnContainer:{
		height: '25%',
		width: '100%',
        alignItems: "center",
		justifyContent: 'center',
		// borderWidth: 1
	},
	fgPassContainer:{
		width: '75%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	signInBtn: {
		// backgroundColor: "#66abcd",
		paddingHorizontal: 120,
		paddingVertical: 20,
		borderRadius: 15,
		marginVertical: 10,
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
		fontWeight: "700",
		color: "plum",
		marginTop: 15,
	},
});

export default styles;
