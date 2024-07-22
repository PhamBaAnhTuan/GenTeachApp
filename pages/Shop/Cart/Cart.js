import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";
import { useRoute } from "@react-navigation/native";
import { TitleField } from "../../../Components/Components";
import { AntDesign, Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const itemPrice = 9;

const Cart = ({ navigation }) => {
    // Params
    const route = useRoute();
    // const cart = route.params?.cart;
    // Set icon
    const [iconName, setIconName] = useState('checkbox-blank-outline');
    const [isChecked, setIsChecked] = useState(false);
    const onPressIcon = () => {
        setIconName(iconName === 'checkbox-blank-outline' ? 'checkbox-marked' : 'checkbox-blank-outline');
        setIsChecked(isChecked === false ? true : false);
    };
    // Set count
    const [count, setCount] = useState(1);
    const plusCount = () => {
        setCount(count + 1);
    };
    const subtractCount = () => {
        setCount(count > 1 ? count - 1 : count);
    };
    const totalPrice = count * itemPrice;

    return (
        <SafeAreaView style={styles.safeView}>
            <LinearGradient
                colors={["plum", "#66ffff",]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
                // style={{ height: "100%", width: "100%",}}
                start={{ x: 0, y: 0.3 }}
                end={{ x: 0.5, y: 0.7 }}
            >

                <View style={styles.navbarTop} >
                    <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity><Entypo name="dots-three-vertical" size={22} color="black" /></TouchableOpacity>
                </View>

                <ScrollView style={{ height: '83%' }} >

                    {/* item container */}
                    {/* {cart.map((item, index) => ( */}
                        <View style={styles.itemContainer} >

                            <TitleField titleText='Durex' />

                            {/* item in4 */}
                            <View style={styles.itemWrap} >
                                <TouchableOpacity onPress={onPressIcon} >
                                    <MaterialCommunityIcons name={iconName} size={24} color="black" />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.itemImgContainer} >
                                    <Image source={require('../../../assets/item/item1.jpg')} resizeMode="contain" style={{ height: 70, width: 70 }} />
                                </TouchableOpacity>

                                <View style={styles.itemNameContainerRight}>
                                    {/* Item name container */}
                                    <View style={styles.itemNameContainer} >
                                        <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'plum' }} >
                                            {itemPrice}$
                                        </Text>
                                        <Text style={{ fontSize: 13, fontWeight: 'bold' }} >
                                            {/* {item.name} */}
                                        </Text>
                                        <Text style={{ fontSize: 10, width: '100%', textAlign: "justify" }} >
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </Text>
                                    </View>

                                    {/* Amount btn */}
                                    {/* <> */}
                                    {isChecked === true
                                        ? (<View style={styles.amountBtn} >
                                            <TouchableOpacity onPress={subtractCount} ><Entypo name="minus" size={20} color="black" /></TouchableOpacity>
                                            <Text style={{ width: 20, textAlign: 'center' }} >{count}</Text>
                                            <TouchableOpacity onPress={plusCount} ><Entypo name="plus" size={20} color="black" /></TouchableOpacity>
                                        </View>)
                                        : <View style={styles.amountBtnHidden} ></View>
                                    }
                                    {/* </> */}
                                </View>
                            </View>

                        </View>
                    {/* ))} */}

                </ScrollView>

                <View style={styles.navbarBotContainer} >

                    {isChecked === false
                        ? (<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Total:
                        </Text>)
                        : (<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Total: {totalPrice}$
                        </Text>)
                    }

                    <TouchableOpacity  >
                        <LinearGradient
                            colors={["#3AABBB", "#B689E2"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.buyBtn}
                        >
                            <Text
                                style={{
                                    // fontSize: 15,
                                    fontWeight: "bold",
                                }}
                            >
                                Buy now
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>

            </LinearGradient>
        </SafeAreaView>
    );
};

export default Cart;
