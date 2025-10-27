import { ThemeColors } from "@/assets/colors/theme-colors";
import Product from "@/data/models/product";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { container_styles } from "../../styles/container_style";

interface MainProps {
    product: Product,
    onPress?: () => void
}
interface SearchProps {
    mode: "search",
    index?: never
};
interface DisplayProps {
    mode: "display",
    index?: never
};
interface ListProps {
    mode: "list",
    index: number
};
type CardProps = MainProps & (SearchProps | DisplayProps | ListProps)


export default function ProductCard(props: CardProps) {
    const productImageURI = `http://192.168.2.27:5097/Images/Products/${props.product._image}`;

    switch (props.mode) {
        case "search": {
            return (
                <Card style={[sub_styles.card_container, sub_styles.search_item]}
                    onPress={props.onPress}>
                    <Card.Content>
                        <Text style={sub_styles.text_normal}>{props.product._name}</Text>
                    </Card.Content>
                </Card>
            );
        }
        case "display": {
            return (
                <Card style={[sub_styles.card_container, sub_styles.search_item]}>
                    <Card.Content style={{ alignItems: "center" }}>
                        <Image source={{ uri: productImageURI }} style={{ width: 100, height: 100 }} />
                        <Text>{props.product._name}</Text>
                    </Card.Content>
                </Card>
            );
        }
        case "list": {
            return (
                <Card style={sub_styles.card_container} contentStyle={{ flexDirection: "row" }}>
                    <Card.Title title={props.index} style={sub_styles.list_title} titleStyle={{ color: "white" }} />
                    <Card.Content>
                        <Text style={{ fontSize: hp(2.5), color: ThemeColors.navyBlue }}>{props.product._name}</Text>
                        <View style={container_styles.row_container}>
                            <Text style={sub_styles.text_normal}>{props.product._category?._name}</Text>
                            <Text style={[sub_styles.text_normal, { marginStart: 20 }]}>{props.product._manufacturer?._name}</Text>
                        </View>
                        <Text style={sub_styles.text_normal}>{props.product._price}$</Text>
                    </Card.Content>
                </Card>
            );
        }
    }
    // <Card mode="outlined" style={{ marginVertical: 10, backgroundColor: ThemeColors.babyBlue }}
    //     contentStyle={{ width: wp(100), height: "auto", flexDirection: "row", padding: 5 }}
    //     onPress={() => props.setModalVisible ? (true) : null}>
    //     <Card.Title title={props.index} titleStyle={{ color: "white" }}
    //         style={{ borderRadius: 10, backgroundColor: ThemeColors.navyBlue }} />
    //     <Card.Content >
    //         <Text style={{ fontSize: hp(2.5), color: ThemeColors.navyBlue }}>{props.product._name}</Text>
    //         <View style={container_styles.row_container}>
    //             <Text style={sub_styles.text_normal}>{props.product._category?._name}</Text>
    //             <Text style={[sub_styles.text_normal, { marginStart: 20 }]}>{props.product._manufacturer?._name}</Text>
    //         </View>
    //         <Text style={sub_styles.text_normal}>{props.product._price}$</Text>
    //     </Card.Content>
    // </Card>

};

const sub_styles = StyleSheet.create({
    card_container: {
        width: wp(35),
        marginVertical: 5,
        backgroundColor: ThemeColors.babyBlue
    },
    search_item: {
        backgroundColor: ThemeColors.babyBlue,
        borderWidth: 2,
        borderColor: ThemeColors.navyBlue
    },
    list_title: {
        borderRadius: 10,
        backgroundColor: ThemeColors.navyBlue
    },
    text_normal: {
        color: ThemeColors.blueGrotto,
        fontSize: hp(2)
    },
});