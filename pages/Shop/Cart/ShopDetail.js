import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import styles from '../styles';
// Route get params
import { useRoute } from "@react-navigation/native";
// Icon
import { AntDesign, Feather, Entypo, MaterialIcons, Octicons, Ionicons } from '@expo/vector-icons';
// Component
import {ItemShopDetail} from '../../../Components/ItemShopDetail';

const ShopDetail = ({ navigation }) => {

    // Handle follow
    const [follow, setFollow] = useState('Follow');
    const handleFollow = () => {
        follow === 'Follow' 
		? (setFollow('Following'), ToastAndroid.show('Following',ToastAndroid.SHORT)) 
		: (setFollow('Follow'), ToastAndroid.show('Unfollowed',ToastAndroid.SHORT));
    }
    // Handle add to cart
    const [cart, setCart] = useState([]);
    const addToCart = (selectedItem) => {
        setCart([...cart, selectedItem]);
        ToastAndroid.show('Added to cart', ToastAndroid.SHORT);
        // const data = cart.map(x => x.name);
        console.log(cart);
    };
    // Handle buy now
    const handleBuyNow = () => {
        ToastAndroid.show('Buying...', ToastAndroid.SHORT);
        navigation.navigate('Payment', { items: cart });
    }
    // Handle remove item from cart
    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id!== itemId));
        ToastAndroid.show('Removed from cart', ToastAndroid.SHORT);
    }
    // Handle increase quantity
    const increaseQuantity = (itemId) => {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex!== -1) {
            cart[itemIndex].quantity++;
            setCart([...cart]);
        }
    }
    // const handleAdd = () => {
    //     ToastAndroid.show('Added to cart', ToastAndroid.SHORT);
    // }
    // Params
    const route = useRoute();
    const selectedItem = route.params?.selectedItem;
    const data = () => {
        console.log('selected item: ', selectedItem);
    }

    return (
        <SafeAreaView style={styles.safeView}>
            <LinearGradient
                colors={["plum", "#66ffff",]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
                style={{ flex: 1}}
                start={{ x: 0.3, y: 0.3 }}
                end={{ x: 1, y: 1 }}
            >

                <View style={styles.navbarTop} >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', width: 65, justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart', {cart})} ><Feather name="shopping-cart" size={22} color="black" /></TouchableOpacity>
                        <TouchableOpacity><Entypo name="dots-three-vertical" size={22} color="black" /></TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{ height: '83%' }} showsVerticalScrollIndicator={false} >
                    <ItemShopDetail img={selectedItem.img}
                        name={selectedItem.name}
                        handleFollow={handleFollow}
                        follow={follow}
                        brand={selectedItem.brand || selectedItem.author}
                        price={selectedItem.price}
                        description={selectedItem.description}
                        discount={selectedItem.discount}
                        rate={selectedItem.rate}
                    />
                </ScrollView>

                <View style={styles.navbarBotContainer} >

                    <TouchableOpacity onPress={addToCart} >
                        <LinearGradient
                            colors={["#3AABBB", "#B689E2"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.addBtn}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontWeight: "bold",
                                    fontSize: 13
                                }}
                            >
                                Add to cart
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Buy')} >
                        <LinearGradient
                            colors={["#3AABBB", "#B689E2"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.buyBtn}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontWeight: "bold",
                                    fontSize: 13
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
