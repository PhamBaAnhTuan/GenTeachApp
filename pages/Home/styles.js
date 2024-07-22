import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { AuthContext } from "../../Context/Context";

const styles = StyleSheet.create({
    safeView: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    gradient:{
        height: '100%',
        width: '100%',
    },


    personIcon:{
        position: 'absolute',
        right: 10,
        top: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        height: 30,
        width: 30
    },
    navbarHome: {
        height: 50,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0.2,
        // marginBottom: 20
    },

    videoContainer:{
        height: 'auto',
        width: 'auto',

    },

    navbarInterAct:{
        height: 220,
        width: 60,
        // borderWidth: 1,
        position: 'absolute',
        bottom: 35,
        right: 0,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    likeWrap:{
        height: 30,
        width: 30,
        // borderWidth: 1,
        // borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1:{
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        // paddingTop: 5
    },

    captionContainer:{
        height: 80,
        width: 300,
        // borderWidth: 1,
        position: 'absolute',
        left: 0,
        bottom: 35,
        paddingLeft: 10
    },

    in4Wrap:{
        height: '50%',
        width: 260,
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    avtWrap:{
        height: '100%',
        width: 140,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // borderWidth: 1
    },
    avt:{
        height: 40,
        width: 40,
        borderRadius: 30,
        // borderWidth: 1,
    },

    flWrap:{
        height: 25,
        width: 75,
        borderWidth: 0.7,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white'
    },

    captionWrap:{
        height: '50%',
        width: '100%',
        // borderWidth: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
    },

    musicWrap:{
        height: 30,
        width: '100%',
        // borderWidth: 1,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        // marginBottom: 5
    },
    musicBox:{
        height: '100%',
        width: 'auto',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    musicImg:{
        height: '100%',
        width: 30,
        borderWidth: 3,
        borderRadius: 7,
        borderColor: 'lightgrey',
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
        marginHorizontal: 25,
        // borderWidth: 1
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
        // borderWidth: 1
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
        marginRight: 10,
        borderWidth: 1
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
        opacity: 0.7,
        // color: 'white'
    },
    settingContainer:{
        height: 'auto',
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
        height: 'auto',
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

    containerPlus:{
        height: 350,
        marginHorizontal: 10
        // paddingHorizontal: 20
    },
    benefitText:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginHorizontal: 10
    },
    benefitPlusWrap:{
        height: '80%',
        borderRadius: 15,
        borderWidth: 1
    },

    navbarBot:{
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'plum',
        // borderWidth: 1
    },
    upGradePlusBtn:{
        height: 50,
        width: 250,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b07cff'
    },

    // Premium screen
    title3:{
        height: 30,
        width: 100,
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 10
    },
    containerPre:{
        height: 460,
        marginHorizontal: 10
        // paddingHorizontal: 20
    },
    benefitPreWrap:{
        height: '85%',
        borderRadius: 15,
        borderWidth: 1
    },
    upGradePreBtn:{
        height: 50,
        width: 250,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gold'
    },
});

export default styles;