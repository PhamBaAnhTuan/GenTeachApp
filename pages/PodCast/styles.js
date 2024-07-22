import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    safeView:{
        height: '100%',
        width: '100%',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    // Podcast list
    podcastContainer:{
        // marginTop: 20,
        paddingLeft: 5,
        marginBottom: 10,
        // borderWidth: 1
    },
    // Podcast card
    // podcastCard:{
    //     height: 210,
    //     width: 150,
    //     // backgroundColor: 'grey',
    //     borderRadius: 10,
    //     margin: 10,
    //     marginLeft: 10,
    //     // borderWidth: 1,
    //     alignItems: 'center',
    // },
    // podcastImg:{
    //     alignSelf: 'center',
    //     height: 100,
    //     width: 50,
    //     resizeMode: 'contain',
    //     marginLeft: 20
    // },
    podcastNameWrap:{
        marginLeft: 5,
        marginTop: 10
    },
    podcastName:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    podcastAuth:{
        fontSize: 12
    },

    // Podcast Detail
    navbarTop:{
        height: '7%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginHorizontal: 20,
        // borderWidth: 1,
    },
    podcastImg:{
        height: 330,
        width: 330,
        alignSelf: 'center',
        justifyContent: 'center',
        // flex: 1,
        borderRadius: 15
    },
    // Podcast name, author
    titleContainer:{
        height: "15%",
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        // borderWidth: 1
    },
    podcastTitle:{
        // width: 230,
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        // borderWidth: 1
    },
    podcastAuth:{
        fontSize: 14,        
        alignSelf: 'center',
        textAlign: 'center',
    },
    // Timeline
    timeLine:{
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginHorizontal: 20,
        // borderWidth: 1,
    },
    // Navbar Controller
    navbarControl:{
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // borderWidth: 1
    }
});

export default styles;