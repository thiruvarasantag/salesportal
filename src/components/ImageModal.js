


import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Modal, Image, Linking } from 'react-native';
import { IMAGES } from './ProductCard';

const ImageModal = (props) => {


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

                    <Image style={{
                        width: 105, height: 105, shadowColor: "black",
                        shadowOffset: {
                            width: -10,
                            height: 5,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        elevation: 5,
                        marginTop: 10
                    }} source={{ uri: IMAGES[0] }} />
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

export default ImageModal;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', },
    header: { height: 50, backgroundColor: '#0F2270' },
    headerText: { textAlign: 'center', fontWeight: 'bold', color: 'white' },
    text: { textAlign: 'center', fontWeight: '600' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, flexDirection: 'row' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});
