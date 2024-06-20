import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles';
import { LinearGradient } from 'expo-linear-gradient';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Icon
import { Ionicons, Entypo } from '@expo/vector-icons';

const TopTab = createMaterialTopTabNavigator();

const UpGradeAccountDetail = () => {
  return (
   <SafeAreaView style={styles.safeView}>
      <LinearGradient
         colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
         style={styles.gradient}
         start={{ x: 0, y: 0.5 }}
         end={{ x: 0.5, y: 1 }}
      >

         <View style={{ height: "90%" }}>
            <TopTab.Navigator
               screenOptions={{
                  // tabBarActiveTintColor: "#e91e63",
                  tabBarLabelStyle: { fontWeight: 'bold' },
                  swipeEnabled: false,
                  tabBarStyle: {
                     backgroundColor: "plum",
                  },
               }}
            >
               <TopTab.Screen name="Plus" component={PlusScreen} />
               <TopTab.Screen name="Premium" component={PremiumScreen} />
            </TopTab.Navigator>
         </View>

      </LinearGradient>
   </SafeAreaView>
  )
}

export default UpGradeAccountDetail