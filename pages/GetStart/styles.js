import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    bgImg:{
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    },
    startBtn:{
        backgroundColor: '#66ffff',
        paddingHorizontal: 120,
        paddingVertical: 20,
        borderRadius: 15,
        marginTop: 500,
    }
});

export default styles;