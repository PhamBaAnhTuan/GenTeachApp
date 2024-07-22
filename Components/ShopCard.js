import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react';
// Icon
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { ColorContext } from '../Context/Context';

const ShopCard = (props) => {
   const { bgcItemCard, textColorItemCard } = useContext(ColorContext);
   return (
      <View style={styles.container} >
         <TouchableOpacity onPress={props.onPress} >

            {/* Item name container */}
            <View style={styles.nameContainer} >
               <Text style={{ fontSize: 11, color: textColorItemCard }}>
                  {props.brand}
               </Text>

               <Text style={{ fontSize: 13, fontWeight: "500", color: textColorItemCard, textAlign: 'center' }} >
                  {props.name}
               </Text>
            </View>

            <Image // img
               style={styles.img}
               source={{ uri: props.img }}
            />
         </TouchableOpacity>

         <View style={styles.priceContainer} >
            <TouchableOpacity>
               <Feather
                  name="shopping-cart"
                  size={18}
                  color={textColorItemCard}
               />
            </TouchableOpacity>
            <Text
               style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: textColorItemCard
               }}
            >
               {props.price}$
            </Text>
            <TouchableOpacity
            // onPress={onPressIcon}
            >
               <MaterialIcons
                  name="favorite-border"
                  size={18}
                  color={textColorItemCard}
               />
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default ShopCard

const styles = StyleSheet.create({
   container: {
      height: 210,
      width: 160,
      backgroundColor: '#2e373c',
      borderRadius: 15,
      margin: 7,
      alignItems: 'center',
      justifyContent: "center",
      // paddingVertical: 5,
      // borderWidth: 1
   },

   nameContainer: {
      alignItems: "center",
      height: 'auto',
      // borderWidth: 1,
      // marginTop: 5
   },

   img: {
      marginTop: 10,
      height: 120,
      width: 120,
      resizeMode: "cover",
      alignSelf: "center",
      borderRadius: 10,
   },


   priceContainer: {
      height: 30,
      width: "100%",
      // marginTop: 5,
      // marginBottom: 30,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-around",
      // borderWidth: 1
   },


})