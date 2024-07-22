import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
// Icons
import { AntDesign } from '@expo/vector-icons';

const PodcastCard = (props) => {
   return (
      <TouchableOpacity onPress={props.onPress} >
         <View style={styles.podcastCard}> 
            <Image
               style={styles.img}
               source={{ uri: props.img }}
            />

            <View style={styles.in4Container}>
               <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {props.name}
               </Text>

               <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
               <Text style={{ fontSize: 12 }}>
                  {props.author}
               </Text>

                  <View style={{flexDirection: 'row', paddingRight: 10, }}>
                     <Text style={{fontSize: 12}}>{props.star} </Text>
                     {props.icon}
                  </View>
               </View>
            </View>
         </View>
      </TouchableOpacity>
   )
}

export default PodcastCard

const styles = StyleSheet.create({
   podcastCard: {
      height: 210,
      width: 150,
      borderRadius: 10,
      // marginRight: 10,
      // borderWidth: 1,
      justifyContent: 'space-around',
      marginHorizontal: 5
   },
   img: {
      // alignSelf: "center",
      height: 150,
      width: 150,
      resizeMode: "cover",
      borderRadius: 10,
      // borderWidth: 1
   },

   in4Container: {
      // borderWidth: 1,
      height: 55,
      paddingLeft: 2,
      paddingTop: 5
   }
})