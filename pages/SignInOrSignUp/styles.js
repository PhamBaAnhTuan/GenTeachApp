import { StyleSheet, Platform, StatusBar } from "react-native"

const styles = StyleSheet.create({
    safeView:{
        height: '80%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    gradient: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
    title:{
        fontSize: 26,
        fontWeight: '700',
    },
    content:{
        textAlign: 'center',
        width: 330,
        fontSize: 17,
        fontWeight: '300',
        marginTop: 10,
        // marginVertical: 30
    },
    container:{
        marginTop: 400
    },
    btn:{
        backgroundColor: '#66ffff',
        paddingHorizontal: 120,
        paddingVertical: 15,
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    text:{
        fontSize: 19,
        fontWeight: '700', 
        color: '#fff'
    }
})

export default styles;