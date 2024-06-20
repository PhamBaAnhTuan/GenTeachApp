import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { SettingCard, UpGradeCardSmall } from '../../../Components/Components';
// Icon
import { MaterialCommunityIcons, MaterialIcons, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';

const PlusScreen = () => {
  return (
   <SafeAreaView style={styles.safeView}>
      <LinearGradient
         colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
         style={styles.gradient}
         start={{ x: 0, y: 0.5 }}
         end={{ x: 0.5, y: 1 }}
      >

         <ScrollView style={{height: '90%'}} >

            <View style={styles.container1} >
               <View style={styles.wrap1} >
                  <Text style={styles.title1}>GenTeach</Text>
                  <View style={styles.title2}>
                     <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>PLUS</Text>
                  </View>
               </View>
               <View style={styles.wrap2}>
                  <Text style={{textAlign: 'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
               </View>
            </View>

            <ScrollView horizontal={true} style={{height: 200, marginHorizontal: 5 }}>

                  <TouchableOpacity><UpGradeCardSmall title='Saving 25%' month='12' price='199' /></TouchableOpacity>
                  <TouchableOpacity><UpGradeCardSmall title='Popular' month='1' price='19' /></TouchableOpacity>
                  <TouchableOpacity><UpGradeCardSmall title='Saving 30%' month='6' price='99' /></TouchableOpacity>

            </ScrollView>

            <View style={styles.container2}>
               <Text style={styles.benefitText}>Plus benefit</Text>

               <View style={styles.benefitWrap}>
                  <TouchableOpacity>
                     <SettingCard 
                     name='Remove Advertisement'
                     icon={ <MaterialCommunityIcons name="advertisements-off" size={24} color="black" /> }
                     />
                  </TouchableOpacity>

                  <TouchableOpacity>
                     <SettingCard 
                     name='Unlimited Storage'
                     icon={ <AntDesign name="clouddownloado" size={24} color="black" /> }
                     />
                  </TouchableOpacity>

                  <TouchableOpacity>
                     <SettingCard 
                     name='Free ship 3 times'
                     icon={ <FontAwesome5 name="shipping-fast" size={24} color="black" /> }
                     />
                  </TouchableOpacity>

                  <TouchableOpacity>
                     <SettingCard 
                     name='Customize background'
                     icon={ <MaterialIcons name="dashboard-customize" size={24} color="black" /> }
                     />
                  </TouchableOpacity>

                  <TouchableOpacity>
                     <SettingCard 
                     name='Post 3 posts per week'
                     icon={ <Entypo name="documents" size={24} color="black" /> }
                     />
                  </TouchableOpacity>
               </View>

            </View>

         </ScrollView>

         <View style={styles.navbarBot}>
            <TouchableOpacity style={styles.upGradeBtn}>
               <Text style={{fontSize: 15, fontWeight: 'bold'}}>Upgrade Account</Text>
            </TouchableOpacity>
         </View>

      </LinearGradient>
   </SafeAreaView>
  )
}

export default PlusScreen