import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../styles';
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';

const ShopDetail = ({ navigation }) => {
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
                    <View style={{ flexDirection: 'row', width: 65, justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')} ><Feather name="shopping-cart" size={22} color="black" /></TouchableOpacity>
                        <TouchableOpacity><Entypo name="dots-three-vertical" size={22} color="black" /></TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{ height: '83%' }} >
                    {/* img item */}
                    <View style={styles.itemImg}>
                        <Image source={require('../../../assets/item/item1.jpg')} resizeMode='center' style={{ borderRadius: 15 }} />
                    </View>

                    <View style={{ height: 1, width: 300, backgroundColor: 'black', alignSelf: 'center' }}></View>

                    {/* item in4 */}
                    <View style={styles.nameContainer} >
                        <Text style={styles.price} >
                            16$
                        </Text>
                        <TouchableOpacity >
                            <Text style={styles.brand} >
                                Durex play
                            </Text >
                        </TouchableOpacity>
                        <Text style={styles.item} >
                            Durex Strawberry
                        </Text>
                        <Text style={styles.description} >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>

                    {/* <View style={{height: 1, width: 300, backgroundColor: 'black', alignSelf: 'center'}}></View> */}
                </ScrollView>

                <View style={styles.navbarBotContainer} >

                    <TouchableOpacity >
                        <LinearGradient
                            colors={["#3AABBB", "#B689E2"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.addBtn}
                        >
                            <Text
                                style={{
                                    // fontSize: 15,
                                    fontWeight: "bold",
                                }}
                            >
                                Add to cart
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

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
}

export default ShopDetail;
