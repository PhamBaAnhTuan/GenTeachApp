import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Title field
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    titleText: {
        fontSize: 17,
        fontWeight: 'bold',
        // marginLeft: 20
    },
    viewAllText: {
        // marginRight: 20,
        // color: 'grey',
        opacity: 0.7,
        textDecorationLine: 'underline',
    },
    // Search view
    searchContainer: {
        height: '10%',
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: 'grey',
        // backgroundColor: 'grey',
        height: 50,
        width: 330,
        borderRadius: 30,
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
    video: {
        height: 500,
        width: '100%'
    },

    // Setting card
    settingContainer: {
        height: 1000,
        width: '95%',
        borderWidth: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 10
    },
    settingWrap: {
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20
        // borderWidth: 1,
    },
    wrapLeft: {
        width: 140,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // paddingHorizontal: 10
    },
    name: {
        // fontSize: 15,
        width: 170,
        marginLeft: 20,
        textAlign: 'left',
        // borderWidth: 1
    },

    // Up grade card
    cardContainer: {
        paddingVertical: 10,
        marginHorizontal: 5,
        borderWidth: 0.5,
        // backgroundColor: 'grey',
        borderRadius: 30
    },
    cardImg: {
        height: 100,
        width: 100,
        marginTop: 10,
        marginLeft: 10,
        // borderWidth: 1
    },
    title: {
        fontSize: 30,
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

    // UpGradeCardPlus
    plusCardContainer: {
        height: 200,
        width: 160,
        borderRadius: 20,
        backgroundColor: '#332352',
        // backgroundColor: 'grey',
        borderColor: '#b07cff',
        borderWidth: 3,
        marginHorizontal: 5,
    },
    navbarPlus: {
        height: 40,
        width: 100,
        backgroundColor: '#b07cff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 16,
        borderBottomEndRadius: 19,
        // borderWidth: 0.5,
    },
    plusCardSaving: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    plusCardWrap: {
        // height: '100%',
        alignItems: 'center',
        marginTop: 20,
        // borderWidth: 1
    },
    plusCardMonth: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#b07cff',
        paddingTop: 10,
        // paddingHorizontal: 10,
        // borderWidth: 1
    },
    plusCardPrice: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        // paddingTop: 10,
        // paddingHorizontal: 10,
        // alignSelf: 'center',
        // borderWidth: 1
    },

    // UpGradeCardPremium
    premiumCardContainer: {
        height: 200,
        width: 160,
        borderRadius: 20,
        backgroundColor: 'goldenrod',
        // backgroundColor: 'grey',
        borderColor: 'gold',
        borderWidth: 3,
        marginHorizontal: 5,
    },
    navbarPremium: {
        height: 40,
        width: 100,
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 16,
        borderBottomEndRadius: 19,
        // borderWidth: 0.5,
    },
    premiumCardSaving: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    premiumCardWrap: {
        // height: '100%',
        alignItems: 'center',
        marginTop: 20,
        // borderWidth: 1
    },
    premiumCardMonth: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gold',
        paddingTop: 10,
        // paddingHorizontal: 10,
        // borderWidth: 1
    },
    premiumCardPrice: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        // paddingTop: 10,
        // paddingHorizontal: 10,
        // alignSelf: 'center',
        // borderWidth: 1
    },

    
});

export default styles;