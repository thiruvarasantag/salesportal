import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ProductCard from "../components/ProductCard";
import ImageModal from "../components/ImageModal";
import FilterModal from "../components/FilterModal";

const persons = [
    {
        id: '1',
        category: 'Accessory',
        vendor: 'ELECTROLUX APPLIANCES',
        model: 'AHDGSM273#90',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '2',
        category: 'Air Conditioner',
        vendor: 'FRIGIDAIRE',
        model: 'A37UJDHOW0D',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '3',
        category: 'Dishwasher',
        vendor: 'GE',
        model: 'D151WHDJS2',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '4',
        category: 'Dryer',
        vendor: 'GENERAL ELECTRIC/HOT PNT',
        model: 'DPWB839DH',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '5',
        category: 'Hoods / Microwave',
        vendor: 'LG',
        model: 'M1CR03473',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '6',
        category: 'Icemaker',
        vendor: 'R & B WHOLESALE DISTR.INC',
        model: 'INDK635KLE',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '7',
        category: 'Range Electric',
        vendor: 'WHIRLPOOL CORPORATION',
        model: 'EYEI783HDG',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '8',
        category: 'Range Gas',
        vendor: 'ELECTROLUX APPLIANCES',
        model: 'TGD93KL93N',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '9',
        category: 'Refrigerator',
        vendor: 'FRIGIDAIRE',
        model: 'DKOW07DGFH3',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'

    },
    {
        id: '10',
        category: 'Stack Laundry',
        vendor: 'GE',
        model: 'WWBCSKDJ6IO9',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },

    {
        id: '11',
        category: 'Stacking Kit Laundry',
        vendor: 'GENERAL ELECTRIC/HOT PNT',
        model: 'ETNBD86#75',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '12',
        category: 'Standard Laundry',
        vendor: 'LG',
        model: 'JKD68EGD',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '13',
        category: 'Washer',
        vendor: 'LG',
        model: 'DJD8BD93J',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '14',
        category: 'Washer',
        vendor: 'R & B WHOLESALE DISTR.INC',
        model: 'GT90XJKL90',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
    {
        id: '15',
        category: 'Washer',
        vendor: 'WHIRLPOOL CORPORATION',
        model: 'JK9KSL0ML4',
        description: 'JSkS djndksnwidn jbndjks ndjnd djndjnd djnjdn jjawmskjsb hdgjhg dgqgwd ajsdbb',
        price: 585,
        status: 'Available'
    },
];

export const ProductList = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [filterModalVisible, setFilterModalVisible] = useState(false);

    const myItemSeparator = () => {
        return <View style={{ height: 1, backgroundColor: "grey", marginHorizontal: 10 }} />;
    };

    const myListEmpty = () => {
        return (
            <View style={{ alignItems: "center" }}>
                <Text style={styles.item}>No data found</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* <TouchableOpacity
                onPress={() =>
                    props.navigation.navigate('Filter')
                    // setFilterModalVisible(!filterModalVisible)
                }
                style={{ alignSelf: 'flex-end', flexDirection: 'row', height: 30, paddingHorizontal: 10, borderRadius: 5 }}>
                <MaterialCommunityIcons name="filter-outline" color={'blue'} size={25} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }}>Filters</Text>
            </TouchableOpacity> */}
            <FlatList
                data={persons}
                renderItem={({ item, index }) => <ProductCard item={item} index={index} modalVisible={modalVisible} setModalVisible={setModalVisible} />}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={myItemSeparator}
                ListEmptyComponent={myListEmpty}
            />
            <ImageModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            {/* <FilterModal modalVisible={filterModalVisible} setModalVisible={setFilterModalVisible}/> */}
        </SafeAreaView>
    );
}

//styles to see the data more clearly

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: 'white'
    },
    item: {
        padding: 20,
        fontSize: 15,
        marginTop: 5,
    },
});
