import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
// Icons
import { AntDesign, Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const Buy = ({ navigation }) => {
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={{ flex: 1 }}
            start={{ x: 0.3, y: 0.3 }}
            end={{ x: 1, y: 1 }}
         >

            <View style={styles.header}>

               <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                  <AntDesign name="arrowleft" size={24} color="black" />
               </TouchableOpacity>

               <Text style={styles.headerTitle}>Buy</Text>

            </View>

            <View style={styles.container1}>
            </View>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default Buy;

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   },


   header:{
      height: 50,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 5
   },
   backIcon:{
      height: 35,
      width: 35,
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   headerTitle:{
      fontSize: 15,
      fontWeight: 'bold',
      // alignSelf: 'center',
      justifyContent: 'center',
      paddingRight: 160
   }
})