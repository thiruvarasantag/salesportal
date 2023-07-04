


import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Modal, Linking } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const FilterModal = (props) => {

    const [value, setValue] = useState(null);

    const handlePress = async () => {
        // Open the custom settings if the app has one
        console.log("lINKING")
        props.setModalVisible(!props.modalVisible)
        Linking.openURL("https://www.geappliances.com/appliance/GE-6-2-cu-ft-capacity-aluminized-alloy-drum-electric-dryer-GTX22EASKWW").catch(err => console.error("Couldn't load page", err));
    };


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}

            onRequestClose={() => {
                //   Alert.alert('Modal has been closed.');
                props.setModalVisible(!props.modalVisible);
            }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
                <View style={{
                    margin: 10,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 15,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text>AHDGSM273#90</Text>
                        <TouchableOpacity
                            onPress={() => handlePress()}
                            style={{ alignItems: 'center', marginStart: 10, justifyContent: 'center', height: 30, paddingHorizontal: 5, borderRadius: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'blue' }}>View Detail</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={0}
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }} />
                    </View>
                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={0}
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }} />
                    </View>
                    <TouchableOpacity
                        onPress={() => props.setModalVisible(!props.modalVisible)}
                        style={{ backgroundColor: '#5B6DB9', alignItems: 'center', justifyContent: 'center', height: 30, paddingHorizontal: 5, marginTop: 10, borderRadius: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default FilterModal;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 200
    },
    header: { height: 50, backgroundColor: '#0F2270' },
    headerText: { textAlign: 'center', fontWeight: 'bold', color: 'white' },
    text: { textAlign: 'center', fontWeight: '600' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, flexDirection: 'row' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' },
    dropdown: {
        height: 30,
        borderColor: '#5B6DB9',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
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
