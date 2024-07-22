import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from '../styles';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { SettingCard, UpGradeCardPlus } from '../../../Components/Components';
// Icon
import { MaterialCommunityIcons, MaterialIcons, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';

const PlusScreen = () => {
   return (
      // <SafeAreaView style={styles.safeView}>
      <LinearGradient
         colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
         style={styles.gradient}
         start={{ x: 0, y: 0.5 }}
         end={{ x: 0.5, y: 1 }}
      >

         <ScrollView style={{ height: '90%' }} showsVerticalScrollIndicator={false}>

            <View style={styles.container1} >
               <View style={styles.wrap1} >
                  <Text style={styles.title1}>GenTeach</Text>
                  <View style={styles.title2}>
                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>PLUS</Text>
                  </View>
               </View>
               <View style={styles.wrap2}>
                  <Text style={{ textAlign: 'center' }}>Become the best user with multiple great feature. Raze your experience with Plus package</Text>
               </View>
            </View>

            <ScrollView horizontal={true} style={{ height: 200, marginHorizontal: 5 }}>

               <TouchableOpacity><UpGradeCardPlus title='Saving 25%' month='12' price='2.999.000' /></TouchableOpacity>
               <TouchableOpacity><UpGradeCardPlus title='Popular' month='1' price='299.000' /></TouchableOpacity>
               <TouchableOpacity><UpGradeCardPlus title='Saving 30%' month='6' price='1.399.000' /></TouchableOpacity>

            </ScrollView>

            <View style={styles.containerPlus}>
               <Text style={styles.benefitText}>Plus benefit</Text>

               <View style={styles.benefitPlusWrap}>
                  <SettingCard
                     onPress={null}
                     name='5 course with Experts'
                     icon={<Entypo name="documents" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Remove Advertisement'
                     icon={<MaterialCommunityIcons name="advertisements-off" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Unlimited Storage'
                     icon={<AntDesign name="clouddownloado" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Free ship 3 times'
                     icon={<FontAwesome5 name="shipping-fast" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Customize background'
                     icon={<MaterialIcons name="dashboard-customize" size={24} color="black" />}
                  />

               </View>

            </View>

         </ScrollView>

         <View style={styles.navbarBot}>
            <TouchableOpacity style={styles.upGradePlusBtn} onPress={() => ToastAndroid.show('Upgrade Plus account successfully', ToastAndroid.SHORT)}>
               <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Upgrade Account</Text>
            </TouchableOpacity>
         </View>

      </LinearGradient>
      // </SafeAreaView>
   )
}

export default PlusScreen