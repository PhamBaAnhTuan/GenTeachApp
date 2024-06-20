import React from 'react';
import styles from '../styles';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Icons
import { Ionicons, Fontisto, Entypo } from "@expo/vector-icons";
import { UpGradeCard } from '../../../Components/Components';

const UpgradeAccount = () => {
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
            style={styles.gradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0.5, y: 1 }} >

            <View style={styles.navbarProfile}>

               <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="arrow-back-outline" size={24} color="black" />
               </TouchableOpacity>

               <View style={styles.navbarProfileRight}>
                  <TouchableOpacity>
                     <Entypo name="dots-three-vertical" size={20} color="black" />
                  </TouchableOpacity>
               </View>

            </View>
            

            <View style={styles.container}>

               <View style={{marginLeft: 10, marginVertical: 40}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>Upgrade your account</Text>
               </View>

               <TouchableOpacity>
                  <View style={{backgroundColor: '#935cff', borderRadius: 15, marginBottom: 20,}} >
                     <UpGradeCard
                        title='Vip'
                        src={require('../../../assets/Icon/vip.png')}
                        contain="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                     />
                  </View>
               </TouchableOpacity>

               <TouchableOpacity>
                  <View style={{backgroundColor: 'goldenrod', borderRadius: 15, marginBottom: 20,}} >
                     <UpGradeCard
                        title='Premium'
                        src={require('../../../assets/Icon/premium.png')}
                        contain="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                     />
                  </View>
               </TouchableOpacity>
            </View>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default UpgradeAccount