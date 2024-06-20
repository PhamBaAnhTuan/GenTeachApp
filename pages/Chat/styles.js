import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    gradient:{
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeView: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
    },
    btn:{
        // backgroundColor: '#66ffff',
        paddingHorizontal: 120,
        paddingVertical: 15,
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    // Chat List
    navbarChatList: {
        height: 65,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    navbarChatDetail: {
        height: '10%',
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        // borderWidth: 1
    },
    img: {
        height: 50,
        width: 50,
        marginLeft: 20,
        borderRadius: 30
    },
    msgContainer:{
        marginHorizontal: 5
    },
    userName: {
        marginLeft: 10,
        // marginBottom: 20,
        fontSize: 15,
        fontWeight: "500",
        // color: "white"
    },
    msg:{
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
        marginHorizontal: 25
    },
    navbarLeft: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10
    },
    // Chat Detail
    chatInputContainer:{
        height: 55,
        width: 330,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: "space-evenly",
        borderWidth: 1,
        // borderColor: 'white',
        borderRadius: 15,
        marginBottom: 10
    },
    chatInput:{
        // placeholderTextColor
        fontSize: 15,
        fontWeight: "400",
        paddingLeft: 10,
        width: 240,
    }
});

export default styles;