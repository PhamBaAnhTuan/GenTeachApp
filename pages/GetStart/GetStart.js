import React, { useState } from 'react';
import { Text, ImageBackground, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const GetStart = ({navigation}) => {
    const [test, setTest] = useState('SignInOrSignUp')
    return(
        <SafeAreaView style={styles.bgImg} >
            <LinearGradient
                colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
				style={{ height: "100%", width: "100%"}}
				start={{ x: 0, y: 0.4 }}
				end={{ x: 0.5, y: 1 }}
            >
                <ImageBackground source={require('../../assets/background/bg1.png')} resizeMode='contain' style={styles.bgImg} >
                    <TouchableOpacity onPress={() => navigation.navigate(test)}>
                        <LinearGradient
                            colors = {['#3aabbb', '#b689e2']}
                            start = {{x: 0, y: 0.5}}
                            end = {{x: 1, y: 0.5}}
                            style = {styles.startBtn}
                        >
                            <Text style={{fontSize: 15, fontWeight: '700'}}>Get Start</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ImageBackground>
            </LinearGradient>
        </SafeAreaView>
    );
}

export default GetStart;