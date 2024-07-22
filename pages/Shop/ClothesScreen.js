import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageSlider } from "react-native-image-slider-banner";
// Component
import { CardItem, TitleField } from "../../Components/Components";
import ShopCard from "../../Components/ShopCard";
// Icon
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
// Context
import { ColorContext, ItemContext } from "../../Context/Context";

const ToolScreen = ({ navigation }) => {
  // Context
  const { bgcItemCard, textColorItemCard } = useContext(ColorContext);
  const { tee, pant, sneaker } = useContext(ItemContext);

  return (
    <LinearGradient
      colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
      style={{ height: "100%" }}
      start={{ x: 0, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          <View style={{ marginBottom: 20 }}>
            <TitleField titleText="Tee" />
            <View >
              <ScrollView horizontal={true}>
                {tee.map((item, index) => (
                  <ShopCard
                    key={index}
                    onPress={() => navigation.navigate('ShopDetail', { selectedItem: tee[index] })}
                    brand={item.brand}
                    name={item.name}
                    img={item.img}
                    price={item.price}
                  />
                ))}
              </ScrollView>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <TitleField titleText="Pant" />

            <View >
              <ScrollView horizontal={true}>
                {pant.map((item, index) => (
                  <ShopCard
                    key={index}
                    onPress={() => navigation.navigate('ShopDetail', { selectedItem: pant[index] })}
                    brand={item.brand}
                    name={item.name}
                    img={item.img}
                    price={item.price}
                  />
                ))}
              </ScrollView>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <TitleField titleText="Sneaker" />

            <View >
              <ScrollView horizontal={true}>
                {sneaker.map((item, index) => (
                  <ShopCard
                    key={index}
                    onPress={() => navigation.navigate('ShopDetail', { selectedItem: sneaker[index] })}
                    brand={item.brand}
                    name={item.name}
                    img={item.img}
                    price={item.price}
                  />
                ))}
              </ScrollView>
            </View>
          </View>

        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ToolScreen;