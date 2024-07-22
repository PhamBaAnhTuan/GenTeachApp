import { Dimensions, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// Icons
import { AntDesign, Ionicons, Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
// Components
import { SettingCard } from '../../../Components/Components';
import { useRoute } from '@react-navigation/native';


export const Item = (props) => {
   return (
      <TouchableOpacity style={styles.item} onPress={props.onPress}>
         {props.icon}
         <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: 'bold' }}>{props.name}</Text>
      </TouchableOpacity>
   )
};

const ExpertIn4 = ({ navigation }) => {
   const route = useRoute();
   const selectedExpert = route.params?.selectedExpert;

   const [theme, setTheme] = useState('light theme');
   const toggleTheme = () => {
      setTheme(theme === 'light theme' ? 'dark theme' : 'light theme');
      ToastAndroid.show(`Set ${theme} successfully`, ToastAndroid.SHORT);
   };

   const [notice, setNotice] = useState('Turn off');
   const [icon, setIcon] = useState('notifications-outline');
   const toggleNotice = () => {
      setNotice(notice === 'Turn off' ? 'Turn on' : 'Turn off');
      setIcon(icon === 'notifications-outline' ? 'notifications-off-outline' : 'notifications-outline');
      ToastAndroid.show(`${notice} notification`, ToastAndroid.SHORT);
   };

   return (
      <LinearGradient
         colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
         style={styles.container}
         start={{ x: 0, y: 0.5 }}
         end={{ x: 1, y: 1 }}
      >
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.navbarChatDetail} >
               <View style={styles.navbarLeft}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                     <AntDesign name="arrowleft" size={25} color="black" style={{ marginLeft: 15 }} />
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.container1}>
               <Image style={styles.avt} source={{ uri: selectedExpert.img }} />
               <Text style={styles.name}>{selectedExpert.name}</Text>
               <Text > {selectedExpert.role} </Text>
            </View>

            <View style={styles.container2}>
               <Item
                  onPress={() => navigation.navigate('ExpertProfile', {selectedExpert})}
                  icon={<Ionicons name="person-outline" size={24} color="black" />}
                  name='Personal Profile'
               />
               <Item
                  onPress={null}
                  icon={<Feather name="search" size={24} color="black" />}
                  name='Search'
               />
               <Item
                  onPress={toggleNotice}
                  icon={<Ionicons name={icon} size={24} color="black" />}
                  name='Notifications'
               />
               <Item
                  onPress={null}
                  icon={<Entypo name="dots-three-horizontal" size={24} color="black" />}
                  name='Modifications'
               />
            </View>

            <View style={styles.container3}>
               <SettingCard
                  onPress={toggleTheme}
                  name='Theme'
                  icon={<MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />}
               />
               <SettingCard
                  name='Privacy & Safety'
                  icon={<Feather name="lock" size={24} color="black" />}
               />
            </View>
         </ScrollView>
      </LinearGradient>
   )
}

export default ExpertIn4

const styles = StyleSheet.create({
   container: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
      // backgroundColor: 'white',
   },

   navbarChatDetail: {
      height: 50,
      width: '100%',
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      // borderWidth: 1
   },

   container1: {
      height: 170,
      width: 'auto',
      alignItems: "center",
      justifyContent: 'center',
      // borderWidth: 1
   },
   avt: {
      height: 90,
      width: 90,
      // borderWidth: 1,
      marginBottom: 10,
      borderRadius: 50
   },
   name: {
      fontSize: 20,
      fontWeight: 'bold',
      // borderWidth: 1
   },

   container2: {
      height: 80,
      width: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // borderWidth: 1
   },
   item: {
      height: 'auto',
      width: 80,
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   container3: {
      height: 'auto',
      width: '98%',
      borderWidth: 0.7,
      alignSelf: 'center',
      borderRadius: 10
   }
})