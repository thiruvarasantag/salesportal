import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image, Linking } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { IMAGES } from '../components/ProductCard';
import DropdownComponent from '../components/DropDown';
import ImageModal from '../components/ImageModal';
import { ProductList } from './ProductList';

const TableList = (props) => {

  const tableHead = ['Category', 'Vendor', 'Image', 'Model #', 'Description', 'Price', 'Status & Availability', 'How many?'];
  const widthArr = [140, 180, 80, 120, 250, 100, 120, 150];
  const tableData = [
    ['Accessory', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Air Conditioner', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Dishwasher', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Dryer', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Hoods / Microwave', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Icemaker', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Range Electric', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Range Gas', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Refrigerator', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Stack Laundry', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Stacking Kit Laundry', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Standard Laundry', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Washer', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Washer', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Washer', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Accessory', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Air Conditioner', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Dishwasher', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Dryer', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Hoods / Microwave', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Icemaker', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Range Electric', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Range Gas', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Refrigerator', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Stack Laundry', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Stacking Kit Laundry', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Standard Laundry', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Washer', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],
    ['Washer', 'ELECTROLUX APPLIANCES', 'image', 'AHDGSM273#90', 'This is what you came for, hell no Im done with you', 524, 'Available', "add"],

  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    console.log("useEffect")
  }, []);

  useEffect(() => {
    console.log("modalVisible")
  }, [modalVisible]);


  const handlePress = async () => {
    // Open the custom settings if the app has one
    console.log("lINKING")
    setModalVisible(!modalVisible)
    Linking.openURL("https://www.geappliances.com/appliance/GE-6-2-cu-ft-capacity-aluminized-alloy-drum-electric-dryer-GTX22EASKWW").catch(err => console.error("Couldn't load page", err));
  };

  const element = (data, index) => (
    // <TouchableOpacity onPress={() => { console.log("element", index) }}>
    //   <View style={styles.btn}>
    //     <Text style={styles.btnText}>button</Text>
    //   </View>
    // </TouchableOpacity>
    <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
      <DropdownComponent data={[{ label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' }]} />
      <TouchableOpacity style={{ backgroundColor: '#5B6DB9', alignItems: 'center', justifyContent: 'center', height: 30, paddingHorizontal: 5, borderRadius: 5 }}>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  const tableImage = (data, index) => (
    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => {
      setModalVisible(!modalVisible);
      console.log("tableImage", data)
    }}>
      <Image style={{
        width: 25, height: 25, shadowColor: "black",
        shadowOffset: {
          width: -10,
          height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
      }} source={{ uri: IMAGES[index] }} />
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20}}>
          <TouchableOpacity
            onPress={() => 
              setShowList(!showList)
              // props.navigation.navigate('ProductList')
            }
            style={{ backgroundColor: '#5B6DB9', alignItems: 'center', justifyContent: 'center', height: 30, width: 100, paddingHorizontal: 5, marginHorizontal: 10, borderRadius: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>{showList ? "TableView" : "ListView"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
                onPress={() =>
                    props.navigation.navigate('Filter')
                    // setFilterModalVisible(!filterModalVisible)
                }
                style={{ alignSelf: 'center', flexDirection: 'row', height: 30, paddingHorizontal: 10, borderRadius: 5 }}>
                <MaterialCommunityIcons name="filter-outline" color={'blue'} size={25} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }}>Filters</Text>
            </TouchableOpacity>
          </View>
     {showList ? <ProductList/> : <ScrollView horizontal={true} >
        
        <View style={{ borderWidth: 1, borderColor: 'black' }}>
          
          
          <Table>
            <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.headerText} />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: 'grey' }}>
              {
                tableData.map((rowData, index) => {
                  return (
                    <TableWrapper key={index} style={[styles.row]}>
                      {
                        rowData.map((cellData, cellIndex) => (
                          <Cell style={{ width: widthArr[cellIndex] }} key={cellIndex} data={cellIndex === 2 ? tableImage(rowData, index) : cellIndex === 7 ? element(cellData, index) : cellData} textStyle={styles.text} />
                        ))
                      }
                    </TableWrapper>
                  )
                })
              }
            </Table>
          </ScrollView>
        </View>

      </ScrollView> }
      <ImageModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </View>
  )
}

export default TableList;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff', },
  header: { height: 50, backgroundColor: '#0F2270' },
  headerText: { textAlign: 'center', fontWeight: 'bold', color: 'white' },
  text: { textAlign: 'center', fontWeight: '600' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, flexDirection: 'row' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});
