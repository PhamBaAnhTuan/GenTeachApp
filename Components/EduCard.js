import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react';
// Icon
import { MaterialIcons, Feather } from "@expo/vector-icons";

const EduCard = (props) => {
   return (
      <View
         style={styles.cardContainer}
      // key={props.index}
      >
         <TouchableOpacity
            style={{ height: "90%" }}
            onPress={props.onPress}
         >
            <Image // img container
               style={styles.imgContainer}
               source={props.src}
            />

            <View style={styles.nameContainer} >
               <Text style={{ fontSize: 12 }}>{props.author}</Text>
               <Text
                  style={{ fontSize: 14, fontWeight: "bold" }} >
                  {props.name}
               </Text>
            </View>
         </TouchableOpacity>

         <View // price container
            style={styles.priceContainer}
         >
            <TouchableOpacity>
               <Feather
                  name="shopping-cart"
                  size={18}
                  color="black"
               />
            </TouchableOpacity>
            <Text
               style={{
                  fontSize: 15,
                  fontWeight: "bold",
               }}
            >
               {props.price}$
            </Text>
            <TouchableOpacity>
               <MaterialIcons
                  name="favorite-border"
                  size={18}
                  color="black"
               />
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default EduCard

const styles = StyleSheet.create({
   cardContainer: {
      height: 230,
      width: 180,
      borderRadius: 10,
      // marginLeft: 10,
      // borderWidth: 1,
      // paddingHorizontal: 5
   },
   imgContainer: {
      alignSelf: "center",
      height: 170,
      width: 170,
      resizeMode: "cover",
      borderRadius: 15,
      // marginTop: 5
   },
   nameContainer: {
      // marginLeft: 5,
      marginTop: 2,
      alignSelf: "center",
      alignItems: "center",
   },
   priceContainer: {
      height: 20,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: 3,
      // borderWidth: 1
   }
})