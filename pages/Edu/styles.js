import { Platform, StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    safeView:{
        flex: 1,
        height: 'auto',
        width: 'auto',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    // Search container
    courseContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 5,
        marginBottom: 20
    },

    // Edu detail
    // Navbar top
    navbarTop:{
        height: '7%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginHorizontal: 20,
        // borderWidth: 1,
    },
    // Container 1
    container1:{
        height: '35%',
        backgroundColor: 'green'
    },
    detailImg:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    // container 2
    container2:{
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        // marginBottom: 10
    },
    wrap2Left:{
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
    },
    authorImg:{
        height: 50,
        width: 50,
        marginRight: 10
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
    // Container 3
    container3:{
        height: '7%',
        // backgroundColor: 'aqua',
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginBottom: 20
    },
    // navbar bot
    navbarBot:{
        height: '10%',
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    buyBtn:{
        height: 50,
		width: 150,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "plum",
		// borderWidth: 1
    },
    
});

export default styles;