import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React from 'react';
// icons
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export const ItemShopDetail = (props) => {
    return (
        <>
            {/* img item */}
            <View style={styles.itemImg}>
                <Image source={{ uri: props.img }} resizeMode='contain' style={{ height: 345, width: 345, borderRadius: 15 }} />
            </View>

            {/* item in4 */}
            <Text style={styles.itemName} >
                {props.name}
            </Text>

            <View style={styles.nameContainer} >

                <View style={styles.brandContainer}>
                    <TouchableOpacity >
                        <Text style={styles.price} >
                            {props.brand}
                            {props.author}
                        </Text >
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.flBtn} onPress={props.handleFollow} >
                        <Text style={{ color: '#fff0ff', fontSize: 11 }} >{props.follow}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.priceContainer} >
                    <Text style={styles.price} >
                        {props.price}$
                    </Text>

                    <Text style={styles.description} >
                        {props.description}
                    </Text>
                </View>

                <TouchableOpacity style={styles.voucherContainer}>
                    <Text style={styles.price} >Voucher</Text>

                    <View style={styles.voucherWrap}>
                        <View style={styles.discountWrap}>
                            <Text style={{ fontSize: 10 }}>discount {props.discount}%</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.voucherContainer} >
                    <Text style={styles.price} >Rate</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 35, marginRight: 7 }}>
                        <Text style={{ color: 'white', fontSize: 15, marginRight: 3 }}>{props.rate}</Text>
                        <Ionicons name="star" size={15} color="gold" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.voucherContainer} >
                    <Text style={styles.price} >Comment</Text>
                    <View style={styles.cmtWrap}>
                        <Text style={{ fontSize: 12, color: '#fff0ff' }}>20+ Comment</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    // Item detail
    itemImg: {
        // height: 300,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        // borderWidth: 1
    },

    //
    nameContainer: {
        height: 'auto',
        paddingHorizontal: 7,
        justifyContent: 'space-evenly',
        // borderWidth: 1,
        marginTop: 10
    },

    brandContainer: {
        height: 50,
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        // marginTop: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#2e373c',
        // borderWidth: 1
    },
    // brand: {
    //     fontWeight: "bold",
    //     color: '#fff0ff'
    // },
    flBtn: {
        height: 25,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff0ff',
        marginLeft: 20,
        opacity: 0.7
    },

    itemName: {
        marginTop: 20,
        marginHorizontal: 15,
        fontSize: 25,
        fontWeight: "bold",
        // borderWidth: 1
    },
    priceContainer: {
        height: 'auto',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#2e373c',
        //   borderWidth: 1,
        paddingTop: 5,
        marginTop: 5
    },
    price: {
        width: 220,
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff0ff',
        // borderWidth: 1,
        //   paddingTop: 5
    },
    description: {
        fontSize: 13,
        textAlign: "justify",
        color: '#fff0ff',
        paddingBottom: 5
    },

    voucherContainer: {
        height: 50,
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#2e373c',
        // borderWidth: 1,
        marginTop: 5
    },
    voucherWrap: {
        width: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth: 1
    },
    discountWrap: {
        height: 22,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        // borderWidth: 1
    },
    cmtWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 95
    },
})