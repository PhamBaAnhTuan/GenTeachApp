import { Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Icons
import { AntDesign, FontAwesome, MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';
// Components
import Post from './Post';
import Course from './Course';
import Podcast from './Podcast';
// Context
import { useRoute } from '@react-navigation/native';

const TopTab = createMaterialTopTabNavigator();

const ExpertProfile = ({ navigation }) => {
   const route = useRoute();
   const selectedExpert = route.params?.selectedExpert;
   // Handle follow
   const [follow, setFollow] = useState('Follow');
   const handleFollow = () => {
      follow === 'Follow'
         ? (setFollow('Following'), ToastAndroid.show('Following', ToastAndroid.SHORT))
         : (setFollow('Follow'), ToastAndroid.show('Unfollowed', ToastAndroid.SHORT));
   }
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
            style={styles.gradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >

            <View style={styles.header} >
               <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name="arrowleft" size={25} color="black" />
               </TouchableOpacity>

               <TouchableOpacity>
                  <Fontisto name='bell' size={23} color="black" />
               </TouchableOpacity>
            </View>

            <View style={styles.container1}>
               <Image
                  style={styles.img1}
                  source={{ uri: selectedExpert.img }}
                  resizeMode="cover"
               />

               <View style={styles.wrap1}>
                  <Text style={styles.expertName}>{selectedExpert.name}</Text>
                  <Text style={{ opacity: 0.5 }}>{selectedExpert.role}</Text>
               </View>
            </View>

            <View style={styles.container2}>
               <View style={styles.textWrap}>
                  <Text style={styles.number}>1999</Text>
                  <Text style={styles.text}>Follower</Text>
               </View>

               <View style={styles.textWrap}>
                  <Text style={styles.number}>99</Text>
                  <Text style={styles.text}>Following</Text>
               </View>

               <View style={styles.textWrap}>
                  <Text style={styles.number}>12</Text>
                  <Text style={styles.text}>Course</Text>
               </View>
            </View>

            <View style={styles.container3}>
               <TouchableOpacity style={styles.followBtn} onPress={handleFollow}>
                  <Text style={styles.text3}>{follow}</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.followBtn} onPress={() => navigation.replace('ChatDetail', { selectedExpert })}>
                  <Text style={styles.text3}>Chat</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.followBtn}>
                  <Text style={styles.text3}>Email</Text>
               </TouchableOpacity>
            </View>

            <TopTab.Navigator
               screenOptions={{
                  tabBarLabelStyle: {
                     fontSize: 10,
                     fontWeight: 'bold',
                  },
                  tabBarShowLabel: false,
                  // tabBarShowIcon: false,
                  swipeEnabled: true,
                  tabBarStyle: {
                     backgroundColor: "plum",
                     marginTop: 20,
                  },
               }}
            >
               <TopTab.Screen name="Post" component={Post} options={{
                  tabBarIcon: ({ focused, size }) =>
                     <AntDesign name="appstore-o" size={24} color={focused ? 'white' : 'black'} />
               }} />
               <TopTab.Screen name="Course" component={Course} options={{
                  tabBarIcon: ({ focused, size }) =>
                     <AntDesign name="book" size={24} color={focused ? 'white' : 'black'} />
               }} />
               <TopTab.Screen name="Podcast" component={Podcast} options={{
                  tabBarIcon: ({ focused, size }) =>
                     <Ionicons name="cart-outline" size={24} color={focused ? 'white' : 'black'} />
               }} />
            </TopTab.Navigator>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default ExpertProfile;

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
   },
   gradient: {
      flex: 1,
   },


   header: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20
   },


   container1: {
      height: 'auto',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      // borderWidth: 1,
      // marginTop: 10
   },

   img1: {
      height: 70,
      width: 70,
      marginLeft: 30,
      borderRadius: 50
   },

   wrap1: {
      marginLeft: 20
   },
   expertName: {
      fontSize: 20,
      fontWeight: 'bold',
      // marginLeft: 10
   },


   container2: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingVertical: 10,
      marginVertical: 15
   },

   textWrap: {
      height: '100%',
      width: 100,
      // borderWidth: 1,
      alignItems: 'center',
   },
   number: {
      fontSize: 20,
      fontWeight: 'bold',
      // marginLeft: 10
   },
   text: {
      fontSize: 12,
   },


   container3: {
      height: 30,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      // marginBottom: 10
   },

   followBtn: {
      height: '100%',
      width: 100,
      // borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
   },
   text3: {
      fontSize: 12,
      fontWeight: 'bold',
   }
})