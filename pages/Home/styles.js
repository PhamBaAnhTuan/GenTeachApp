import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    safeView: {
        height: '100%',
        width: '100%',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    gradient:{
        height: '100%',
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    navbarHome: {
        height: '7%',
        width: '100%',
        // marginTop: 15,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        // borderWidth: 1
    },

    img: {
        height: 60,
        width: 60,
        marginLeft: 20
    },
    welcomeText: {
        position: "absolute",
        left: 90,
        top: 20,
        fontSize: 17,
        fontWeight: "700",
    },
    navbarRight: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 25
    },
    // sign out btn
    signOutBtn: {
        paddingHorizontal: 30,
		paddingVertical: 10,
		borderRadius: 10,
		// marginVertical: 10,
    },
    // Profile
    navbarProfile:{
        height: '7%',
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderWidth: 1
    },
    navbarProfileRight:{
        flexDirection: 'row',
    },
    profileImgContainer:{
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        // borderWidth: 1
    },
    profileImg:{
        height: 80,
        width: 80,
        marginRight: 10
    },
    in4Container:{
        height: '10%',
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginBottom: 20
    },
    textWrap:{
        alignItems: 'center',
    },
    number:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    text:{
        fontSize: 12,
        opacity: 0.7
    },
    settingContainer:{
        height: 390,
        width: '95%',
        // backgroundColor: '#f1eef5',
        borderWidth: 0.5,
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 10
    },
    // 
    moreContainer:{
        height: 223,
        width: '95%',
        marginTop: 20,
        borderWidth: 0.5,
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 10
    },
    // Up grade account
    container:{
        height: '100%',
        width: '95%',
        alignSelf: 'center',
        // paddingTop: 10,
        // borderWidth: 1
    },
    // Up grade account Detail

    // Plus screen
    container1:{
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1
    },
    wrap1:{
        width: 270,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        // borderWidth: 1
    },
    title1:{
        fontSize: 40,
        fontWeight: 'bold'
    },
    title2:{
        height: 30,
        width: 80,
        backgroundColor: '#a85cff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    wrap2:{
        height: 60,
        paddingHorizontal: 30
    },

    container2:{
        height: 400,
        marginHorizontal: 10
        // paddingHorizontal: 20
    },
    benefitText:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    },
    benefitWrap:{
        height: '70%',
        borderRadius: 15,
        borderWidth: 1
    },

    navbarBot:{
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },
    upGradeBtn:{
        height: 60,
        width: 300,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b07cff'
    }
});

export default styles;