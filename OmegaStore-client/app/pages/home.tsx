import React, { useState } from "react";
import Product from "@/data/models/product";
import { ProductProvider, useProductContext } from "@/data/providers/product";
import { useUserContext } from "@/data/providers/user";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from "react-native";
import { IconButton, Searchbar, Text } from "react-native-paper";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RootNavigationProps, RootParams } from "../_layout";
import ProductCard from "../utils/components/cards/product";
import { container_styles } from "../utils/styles/container_style";
import { ThemeColors } from "@/assets/colors/theme-colors";
import { filterProductList } from "../utils/functions/filterProductList";
import { topSaleProductList } from "../utils/functions/topSaleProductList";
import { Image_URL } from "@/data/api_url";

type RouteProps = RouteProp<RootParams>;
type HeadSectionProps = {
    navigation: RootNavigationProps;
    isLogged: boolean;
};
type BodySectionProps = {
    route: RouteProps;
};

export default function HomePage() {
    const navigation = useNavigation<RootNavigationProps>();
    const route = useRoute<RouteProps>();
    const { isLogged } = useUserContext();

    return (
        <ProductProvider>
            <KeyboardAvoidingView
                style={container_styles.container}
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView>
                    <HeadSection navigation={navigation} isLogged={isLogged} />
                    <BodySection route={route} />
                </ScrollView>
            </KeyboardAvoidingView>
        </ProductProvider>
    );
};

function HeadSection(props: HeadSectionProps) {
    const [searchText, setSearchText] = useState<string>("");
    const filteredProductList = filterProductList(searchText);
    const { productList } = useProductContext();

    return (
        <View style={[container_styles.head_container, { justifyContent: "center" }]}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: wp(100) }}>
                <View style={{ width: wp(5) }} />
                <Searchbar placeholder="Search for product" placeholderTextColor={ThemeColors.navyBlue} icon="keyboard" iconColor={ThemeColors.navyBlue} clearIcon="close"
                    traileringIcon="magnify" traileringIconColor={ThemeColors.navyBlue} onTraileringIconPress={() => props.navigation.navigate("SearchPage", { searchText: searchText })}
                    value={searchText} onChangeText={(newText) => setSearchText(newText)}
                    style={sub_styles.searchContainer}
                    onSubmitEditing={() => props.navigation.navigate("SearchPage", { searchText: searchText })} />
                {props.isLogged ?
                    <IconButton icon="cart-outline" size={hp(5)}
                        onPress={() => null} />
                    :
                    <IconButton icon="login" size={hp(5)}
                        onPress={() => props.navigation.navigate("LogInPage")} />}
            </View>
            {searchText ?
                productList.length ?
                    <FlatList data={filteredProductList} keyExtractor={(item) => item._id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <ProductCard mode="search" product={item}
                                    onPress={() => props.navigation.navigate("ProductDetailPage", { product: item })} />
                            );
                        }}
                        style={sub_styles.searchItemContainer} />
                    : <View style={[sub_styles.searchItemContainer, { width: wp(35) }]}>
                        <Text style={{ fontSize: hp(2.5) }}>There are no items at the moment. Please try again later</Text>
                    </View>
                : null}
        </View>
    );
};

function BodySection(props: BodySectionProps) {
    const top5SaleProductList = topSaleProductList(5);

    return (
        <View style={container_styles.body_container}>
            <View style={[sub_styles.topSaleContainer, { flexDirection: "column" }]}>
                <Text style={sub_styles.topSaleTitle}>TOP SALE</Text>
                <FlatList horizontal={true} data={top5SaleProductList} keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <ProductCard mode="display" product={item}/>
                        );
                    }} />
            </View>
        </View>
    );
};

const sub_styles = StyleSheet.create({
    sub_head_container: {
        flexDirection: "row", alignItems: "center"
    },
    searchContainer: {
        width: wp(40), backgroundColor: ThemeColors.blueGreen,
        borderWidth: 2, borderColor: ThemeColors.navyBlue
    },
    searchItemContainer: {
        padding: 10, position: "absolute", zIndex: 999, top: hp(9), maxWidth: wp(40),
        backgroundColor: ThemeColors.blueGreen, borderWidth: 3, borderRadius: 15, borderColor: ThemeColors.navyBlue
    },
    topSaleContainer: {
        padding: 10,
        backgroundColor: ThemeColors.blueGreen,
        borderWidth: 3, borderRadius: 15, borderColor: ThemeColors.blueGrotto
    },
    topSaleTitle: {
        fontSize: hp(3), fontWeight: "bold", color: ThemeColors.navyBlue
    }
});