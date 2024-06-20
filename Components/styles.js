import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    // Title field
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText:{
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 20
    },
    viewAllText:{
        marginRight: 20,
        // color: 'grey',
        opacity: 0.7,
        textDecorationLine: 'underline',
    },
    // Search view
    searchContainer:{
        height: '10%',
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        alignSelf:'center',
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: 'grey',
        // backgroundColor: 'grey',
        height: 50,
        width: 330,
        borderRadius: 15,
        marginTop: 10
    },
    searchInput: {
        color: "black",
        borderRadius: 25,
        width: 270,
        fontSize: 15,
        fontWeight: "400",
        paddingLeft: 15,
        marginVertical: 3,
        
    },
    // Video card
    video:{
        height: 500,
        width: '100%'
    },
    // Setting card
    settingContainer:{
        height: 1000,
        width: '95%',
        borderWidth: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 10
    },
    settingWrap:{
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingLeft: 20
        // borderWidth: 1,
    },
    wrapLeft:{
        width: 140,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // paddingHorizontal: 10
    },
    name:{
        // fontSize: 15,
        width: 170,
        marginLeft: 20,
        textAlign: 'left',
        // borderWidth: 1
    },
    // Up grade card
    plusCardContainer: {
        paddingVertical: 10
        // borderWidth: 0.5
	},
	wrap1: {
		height: 120,
		// flexDirection: "row",
		// justifyContent: "space-between",
        // borderWidth: 1
	},
	cardImg: {
		height: 100,
		width: 100,
		marginTop: 10,
		marginLeft: 10,
		// borderWidth: 1
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		textAlign: "right",
		paddingRight: 20,
		alignSelf: "flex-end",
		alignContent: "center",
		justifyContent: "center",
		// borderWidth: 1
	},
	text: {
		textAlign: "right",
		width: '95%',
		paddingRight: 20,
		alignSelf: "flex-end",
		// borderWidth: 1
	},

    // UpGradeCardSmall
    upGradeCardContainer:{
        height: 200,
        width: 160,
        borderRadius: 20,
        backgroundColor: '#332352',
        // backgroundColor: 'grey',
        borderColor: '#b07cff',
        borderWidth: 3,
        marginHorizontal: 5,
    },
    navbarLeft:{
        height: 40,
        width: 100,
        backgroundColor: '#b07cff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 16,
        borderBottomEndRadius: 19,
        // borderWidth: 0.5,
    },
    upGradeCardSaving:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    upGradeCardWrap:{
        // height: '100%',
        alignItems: 'center',
        marginTop: 20,
        // borderWidth: 1
    },
    upGradeCardMonth:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#935cff',
        paddingTop: 10,
        // paddingHorizontal: 10,
        // borderWidth: 1
    },
    upGradeCardPrice:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        // paddingTop: 10,
        // paddingHorizontal: 10,
        // alignSelf: 'center',
        // borderWidth: 1
    }
});

export default styles;