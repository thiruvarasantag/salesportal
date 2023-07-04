import React from "react";
import { ActivityIndicator, Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Tooltip, lightColors } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropdownComponent from "./DropDown";


export const IMAGES = [
    "https://live.staticflickr.com/7391/10080598166_20a4d76b28_b.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Wonderful_Nature_Beauty.jpg",
    "https://as1.ftcdn.net/v2/jpg/01/58/26/12/1000_F_158261289_N5lBvRZ580Bur1zXaRhru2lECRlJvdO8.jpg",
    "https://as1.ftcdn.net/v2/jpg/00/62/24/12/1000_F_62241227_ada9cnHUCc7Zf6p4Tv08wGB29OGkq3KG.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/Natural_Beauty_Of_Khyber_Pakhtoonkhwa_-_Morning_Picture.jpg",
    "https://i0.hippopx.com/photos/641/915/627/nature-landscape-clouds-netherlands-preview.jpg",
    "https://pixahive.com/wp-content/uploads/2020/08/How-far-I8217ll-go-20012-pixahive.jpg",
    "https://snappygoat.com/b/33b66672ea3139a9620f922dc1adbd43ba5b7882",
    "https://i0.hippopx.com/photos/795/998/487/mountain-sunset-top-cloud-preview.jpg",
    "https://live.staticflickr.com/7523/16160296879_cef7c0a0f1_b.jpg",
    "https://live.staticflickr.com/643/31476196404_96401c3ba2_b.jpg",
    "https://cdn.pixabay.com/photo/2017/06/25/08/19/flower-2439994_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/03/22/05/58/nature-4955920_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073__340.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cc/Sunrise_Beauty_of_Nature.jpg",
    "https://cdn.pixabay.com/photo/2016/10/27/12/52/nature-1774821_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/01/14/09/50/mountain-5916355_1280.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/47/Magical_Nature_beauty_of_AMANGONDA.jpg",
    "https://cdn.pixabay.com/photo/2020/01/14/18/29/nature-4765883_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/08/07/02/23/nature-4389571_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/12/23/08/47/flowers-4714147_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cf/Nature%27s_Beauty_Rishikesh.jpg",
    "https://cdn.pixabay.com/photo/2020/04/02/05/22/colors-in-nature-4993483_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/03/03/17/37/spring-4899298_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/03/10/19/27/nature-4920006_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/04/25/12/03/the-rose-5090527_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204__340.jpg",
    "https://cdn.pixabay.com/photo/2017/02/21/18/20/lake-2086945_1280.jpg",
];

const ControlledTooltip = (props) => {
    const [open, setOpen] = React.useState(false);
    return (
        <Tooltip
            visible={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            {...props}
        />
    );
};

const ProductCard = ({ item, index, modalVisible, setModalVisible }) => {
    const [loading, setLoading] = React.useState(false);

    return (
        <View style={{ flexDirection: 'row' }}>
             <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => {
      setModalVisible(!modalVisible);
      console.log("tableImage", index)
    }}>
            <Image
                style={{
                    width: 95, height: 95, shadowColor: "black",
                    shadowOffset: {
                        width: -10,
                        height: 9,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 5,
                }}
                source={{ uri: IMAGES[index] }} onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
            /></TouchableOpacity>
            {loading && <ActivityIndicator color="green" size="large" />}
            <View>
                <Text style={styles.item}>{`${item.category} / #${item.model}`}</Text>
                <Text style={styles.item}>{"Vendor: " + item.vendor}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.item}>{"$" + item.price}</Text>
                    <ControlledTooltip
                        containerStyle={{ width: 145, height: 130 }}
                        backgroundColor={lightColors.primary1}
                        popover={<Text>{item.description}</Text>}>
                        <MaterialCommunityIcons name="information-outline" color={'#5B6DB9'} size={25} />
                    </ControlledTooltip>
                    <DropdownComponent data={[{ label: '1', value: '1' },
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                    { label: '4', value: '4' },
                    { label: '5', value: '5' }]} />
                    <TouchableOpacity style={{ backgroundColor: '#5B6DB9', alignItems: 'center', justifyContent: 'center', height: 30, paddingHorizontal: 8, borderRadius: 5}}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white'}}>Add to Cart</Text>
                    </TouchableOpacity>
                    {/* <Button title="Add to Cart" color={"#5B6DB9"}/> */}
                </View>

            </View>
        </View>
    );
}

//styles to see the data more clearly

const styles = StyleSheet.create({
    item: {
        padding: 5,
        fontSize: 15,
        // marginTop: 5,
    },
});

export default ProductCard;
