import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
	safeView: {
		height: "100%",
		width: "100%",
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		// alignItems: "center",
		// justifyContent: "flex-start",
		// backgroundColor: 'black',
	},
	skipBtn: {
		marginRight: 30,
		marginTop: 50,
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	// Screen 1
	bgContainer1: {
		alignItems: "center",
		justifyContent: "center",
		// marginTop: 100
	},
	bgImg: {
		position: "absolute",
	},
	circleImg: {
		position: "absolute",
		// top: 100
	},
	handImg: {
		// position: "absolute",
		marginTop: 200,
		marginLeft: 150,
	},
	// Screen 2
	bgContainer2: {
		marginTop: 50,
		marginBottom: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	// Screen 3
	bgContainer3: {
		// marginTop: 50,
		marginBottom: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	discountImg: {
		// position: "absolute",
		// top: 70
		marginTop: 10,
	},
	textContainer: {
		marginLeft: 15,
		marginTop: 100,
	},
	title: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "left",
		marginBottom: 10,
	},
	text: {
		color: "white",
		fontSize: 15,
		textAlign: "auto",
		marginRight: 5,
	},
	btnContainer: {
		height: 50,
		width: 135,
		alignSelf: "flex-end",
		marginTop: 30,
		marginRight: 20,
		// borderWidth: 1,
	},
	continueBtn: {
		paddingHorizontal: 30,
		paddingVertical: 10,
		borderRadius: 15,
		alignItems: "center",
		borderWidth: 0.5,
	},
	// Shop
	banner: {
		height: 150,
		marginHorizontal: 6,
		// borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	// Tab Screen
	container: {
		height: 'auto',
		marginTop: 20,
		marginBottom: 20
	},
	cardContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginLeft: 10,
		marginBottom: 30,
	},
	// Shop detail
	navbarTop: {
		height: "7%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		// borderWidth: 1
	},

	itemImg: {
		// height: 300,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
		// borderWidth: 1
	},

	//
	nameContainer: {
		height: 450,
		paddingHorizontal: 10,
		justifyContent: 'space-evenly',
		// borderWidth: 1
	},
	
	brandContainer:{
		height: '15%',
		width: '100%',
		flexDirection: "row",
		alignItems: 'center',
      justifyContent: "space-between",
      marginTop: 10,
      paddingHorizontal: 10,
		borderRadius: 5,
		backgroundColor: 'white',
      // borderWidth: 1
	},
	brand: {
		// width: "25%",
		// marginTop: 10,
		fontWeight: "bold",
		// borderWidth: 1,
	},
	flBtn:{
		height: 25,
		width: 80,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		borderWidth: 1,
		marginLeft: 20,
		opacity: 0.7
  },
  
	item: {
		marginTop: 30,
		marginHorizontal: 10,
		fontSize: 25,
		fontWeight: "bold",
		// borderWidth: 1
	},
	priceContainer:{
		height: '22%',
      width: '100%',
      // flexDirection: "row",
      // alignItems: 'center',
      justifyContent: 'center',
      // marginTop: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: 'white',
      // borderWidth: 1
	},
	price: {
		// width: '30%',
		fontSize: 20,
		fontWeight: "bold",
		// textAlign: 'right',
		// marginTop: 20,
	},
	description: {
		// width: '70%',
		fontSize: 13,
		textAlign: "justify",
		// marginLeft: 20
	},
	voucherContainer:{
		height: '15%',
      width: '100%',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      // marginTop: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: 'white',
      // borderWidth: 1
	},
	voucherWrap:{
		width: 90,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// borderWidth: 1
	},
	discountWrap:{
		height: 22,
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'orange',
      // borderWidth: 1
	},
	cmtWrap:{
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'space-between', 
		width: 95
	},

	//
	navbarBotContainer: {
		height: "10%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: 'plum',
		// borderRadius: 15,
		// borderWidth: 1
	},
	addBtn: {
		height: 50,
		width: 150,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "plum",
		fontWeight: "bold",
		// borderWidth: 1
	},
	buyBtn: {
		height: 50,
		width: 150,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "plum",
		// borderWidth: 1
	},

	// Cart
	itemContainer: {
		height: 150,
		width: "97%",
		backgroundColor: "#fff0ff",
		borderRadius: 10,
		alignSelf: "center",
      paddingVertical: 10,
		// borderWidth: 1
	},
	itemWrap: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		// paddingHorizontal: 20,
		paddingVertical: 10,
		// borderWidth: 1
	},
	itemImgContainer: {
		borderWidth: 1,
		borderRadius: 10,
	},
    itemNameContainerRight:{
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth: 1
    },
	itemNameContainer: {
		flexDirection: "column",
		width: "60%",
		// borderWidth: 1,
	},

    amountBtn:{
        height: 25,
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 3,
        borderWidth: 0.5,
    },
    amountBtnHidden:{
        width: '1%',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
        borderWidth: 0.5,
    },
});

export default styles;
