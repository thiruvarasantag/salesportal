


import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const CategoryData = [
    { label: 'Accessory', value: '1' },
    { label: 'Air Conditioner', value: '2' },
    { label: 'Dishwasher', value: '3' },
    { label: 'Dryer', value: '4' },
    { label: 'Hoods / Microwave', value: '5' },
    { label: 'Icemaker', value: '6' },
    { label: 'Range Electric', value: '7' },
    { label: 'Range Gas', value: '8' },
    { label: 'Refrigerator', value: '9' },
    { label: 'Stack Laundry', value: '10' },
    { label: 'Stacking Kit Laundry', value: '11' },
    { label: 'Standard Laundry', value: '12' },
    { label: 'Washere', value: '13' },
];

const ColorData = [{ label: 'Bisque', value: '1' },
{ label: 'Black', value: '2' },
{ label: 'Stainless', value: '3' },
{ label: 'White', value: '4' },];

const VendorData = [{ label: 'ELECTROLUX APPLIANCES', value: '1' },
{ label: 'FRIGIDAIRE', value: '2' },
{ label: 'GE', value: '3' },
{ label: 'GENERAL ELECTRIC/HOT PNT', value: '4' },
{ label: 'LG', value: '5' },
{ label: 'R & B WHOLESALE DISTR.INC', value: '6' },
{ label: 'WHIRLPOOL CORPORATION', value: '7' },];

const SortPrice = [{ label: 'Low to High', value: '1' },
{ label: 'High to Low', value: '2' }];

const FilterScreen = (props) => {

    const [sortPrice, setSortPrice] = useState(null);
    const [category, setCategory] = useState(null);
    const [color, setColor] = useState(null);
    const [vendor, setVendor] = useState(null);

    const handlePress = async () => {
        // Open the custom settings if the app has one
        console.log("lINKING")
        props.navigation.goBack();
    };

    const renderLabel = (label) => {

        return (
            <Text style={[styles.label && { color: 'blue' }]}>
                {label}
            </Text>
        );
    };


    return (

        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'space-between'
        }}>
            <View style={{
                borderRadius: 20,
                margin: 10
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {/* <Text>AHDGSM273#90</Text> */}
                    <TouchableOpacity
                        onPress={() => handlePress()}
                        style={{ alignItems: 'center', marginStart: 10, justifyContent: 'center', height: 30, paddingHorizontal: 5, borderRadius: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'blue' }}>Reset All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.container}>
                        {renderLabel('Category')}
                        <Dropdown
                            style={[styles.dropdown]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={CategoryData}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={'Select Category'}
                            searchPlaceholder="Search..."
                            value={category}
                            onChange={item => {
                                setCategory(item.value);
                            }} />
                    </View>
                    <View style={[styles.container, { width: 150 }]}>
                        {renderLabel('Color')}
                        <Dropdown
                            style={[styles.dropdown]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={ColorData}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={'Select Color'}
                            searchPlaceholder="Search..."
                            value={color}
                            onChange={item => {
                                setColor(item.value);
                            }} />
                    </View>
                </View>
                <View style={[styles.container, { width: 300 }]}>
                    {renderLabel('Vendor')}
                    <Dropdown
                        style={[styles.dropdown]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={VendorData}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Select Vendor'}
                        searchPlaceholder="Search..."
                        value={vendor}
                        onChange={item => {
                            setVendor(item.value);
                        }} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                <View style={[styles.container]}>
                    {renderLabel('Model #')}
                    <TextInput placeholder='Model #' style={[styles.dropdown, { fontSize: 16, marginHorizontal: 5, width: 200, height: 40 }]} />
                </View>
                <View style={[styles.container, { width: 150 }]}>
                        {renderLabel('Sort By Price')}
                        <Dropdown
                            style={[styles.dropdown]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={SortPrice}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={'Sort By'}
                            searchPlaceholder="Search..."
                            value={sortPrice}
                            onChange={item => {
                                setSortPrice(item.value);
                            }} />
                    </View>
                    </View>
                
            </View>

            <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={{ backgroundColor: '#5B6DB9', alignItems: 'center', justifyContent: 'center', height: 40, margin:25, borderRadius: 5 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>Apply</Text>
                </TouchableOpacity>
        </View>
    )
}

export default FilterScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 220
    },
    header: { height: 50, backgroundColor: '#0F2270' },
    headerText: { textAlign: 'center', fontWeight: 'bold', color: 'white' },
    text: { textAlign: 'center', fontWeight: '600' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, flexDirection: 'row' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' },
    dropdown: {
        height: 40,
        borderColor: '#0F2270',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        fontWeight: 'bold',
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
