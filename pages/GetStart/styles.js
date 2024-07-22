import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

const styles = StyleSheet.create({
    safeView:{
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        flex: 1,
        marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
        backgroundColor: '#66ffff',
        alignItems: 'center',
    },
    bgImg:{
        height: '100%',
        width: '100%',
        // flex: 1,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startBtn:{
        height: 65,
        paddingHorizontal: 120,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;