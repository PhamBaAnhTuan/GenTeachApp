import {useState, useEffect} from "react";
import { SafeAreaView, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";

const SignInOrSignUp = ({navigation}) => {
    return(
        <SafeAreaView style={styles.safeView}>
        <LinearGradient
            colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
            style={styles.gradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0.5, y: 1 }}
            >
            <ImageBackground source={require('../../assets/background/bg2.png')} resizeMode="contain" style={styles.safeView}>
                
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
                        <LinearGradient colors={['#3AABBB', '#B689E2']} 
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }} 
                            style={styles.btn}
                        >
                            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                        <LinearGradient colors={['#3AABBB', '#B689E2']} 
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }} 
                            style={styles.btn}
                        >
                            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </LinearGradient>
            </SafeAreaView>
    );
}

export default SignInOrSignUp;