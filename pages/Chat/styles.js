import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
        // backgroundColor: 'white',
    },
    gradient: {
        height: '100%',
        width: '100%',
        flex: 1,
    },

    // Chat
    btn: {
        // backgroundColor: '#66ffff',
        paddingHorizontal: 120,
        paddingVertical: 15,
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
    },

    titleContainer: {
        // borderWidth: 1,
        height: 100,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingVertical: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        // color: 'white'
    },

    container1: {
        height: 260,
        width: 'auto',
        // borderWidth: 1,
        paddingHorizontal: 10
    },

    titleWrap: {
        height: '15%',
        width: '100%',
        // borderWidth: 1,
        justifyContent: 'center'
    },
    text1: {
        fontSize: 15,
        fontWeight: 'bold',
        // color: 'white'
    },

    cardWrap: {
        height: '85%',
        width: 'auto',
        // borderWidth: 1,
    },

    aiContainer: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        padding: 5,
        borderWidth: 0.5,
        borderRadius: 50
    },
    aiText: {
        height: 'auto',
        width: 'auto',
        paddingHorizontal: 7,
        paddingVertical: 2,
        position: 'absolute',
        bottom: 60,
        right: 70,
        // borderWidth: 0.5,
        borderRadius: 10,
        borderBottomRightRadius: 0,
        backgroundColor: 'lightgray',
        fontSize: 13,
        fontWeight: 'bold',
        // textAlignVertical: 'center'
    },

    // Chat List
    navbarChatList: {
        height: 65,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    navbarChatDetail: {
        // flex: 1,
        height: 60,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        // borderWidth: 1
    },
    img: {
        height: 45,
        width: 45,
        marginLeft: 20,
        borderRadius: 30
    },
    msgContainer: {
        marginLeft: 5,
        // borderWidth: 1
    },
    userName: {
        marginLeft: 10,
        // borderWidth: 1,
        fontSize: 15,
        fontWeight: "500",
        // color: "white"
    },
    msg: {
        marginLeft: 10,
        opacity: 0.6,
        fontSize: 13,
        // color: "white"
    },
    navbarRight: {
        flexDirection: "row",
        alignItems: "center",
        // alignContent: "space-between",
        // justifyContent: "space-between",
        marginHorizontal: 10
    },
    navbarLeft: {
        flexDirection: "row",
        alignItems: "center",
        // marginHorizontal: 5
    },

    // Chat Detail
    chatContainer: {
        borderWidth: 1
    },
    chatWrap: {
        height: 40,
        width: 'auto',
        // borderWidth: 1,
        flexDirection: 'row-reverse',
        paddingRight: 10,
        marginVertical: 2
    },
    chatText: {
        height: '100%',
        width: 'auto',
        backgroundColor: 'grey',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 13,
        fontWeight: 'bold',
        // borderWidth: 1
    },

    chatInputContainer: {
        height: 70,
        justifyContent: 'center'
    },
    chatInputWrap: {
        height: 55,
        width: 330,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: "space-evenly",
        borderWidth: 1,
        // borderColor: 'white',
        borderRadius: 30,
    },
    chatInput: {
        // placeholderTextColor
        fontSize: 15,
        fontWeight: "400",
        paddingHorizontal: 5,
        width: 240,
    }
});

export default styles;