import { ThemeColors } from "@/assets/colors/theme-colors";
import { TextStyle } from "@/assets/styles/text-style";
import Product from "@/data/models/product";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { RootParams } from "../_layout";

type ProductCartProps = {
    index: number;
    product: Product;
}

type NavigationProps = NativeStackNavigationProp<RootParams>;

export default function ProductCard(cardProps: ProductCartProps) {
    const navigation = useNavigation<NavigationProps>();

    return (
        <TouchableOpacity
            children={
                <View style={{
                    flexDirection: "row", justifyContent: "flex-start", alignItems: "center",
                    height: 75, backgroundColor: ThemeColors.navyBlue,
                    marginVertical: 5
                }}>
                    <View style={{
                        width: 30,
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Text
                            style={TextStyle.normal}
                            children={cardProps.index} />
                    </View>
                    <Image
                        style={{
                            width: 50, height: 50,
                            marginEnd: 10
                        }}
                        source={{ uri: "http://localhost:5097/Images/Products/" + cardProps.product._image }} />
                    <View style={{
                        flex: 2,
                        flexDirection: "column", justifyContent: "flex-start"
                    }}>
                        <Text
                            style={TextStyle.normal}
                            children={cardProps.product._name} />
                        <Text
                            style={TextStyle.normal}
                            children={cardProps.product._price + "$"} />
                    </View>
                </View>
            }
            onPress={() => null} />
    );
}