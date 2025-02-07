import { productList } from "@/assets/values/valueList";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icons } from "@/assets/resources/resource_directories";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamsList } from "@/app/_layout";
import { textInputStyle, textStyle } from "@/assets/values/styleSheet";
import ProductCard from "../product_card";
import Product from "@/app/back-end/models/product";
import { ThemeColors } from "@/assets/colors/theme_colors";
import { useState } from "react";
import { blurColor, focusedColor } from "@/assets/values/componentColor";

type NavigationProps = NativeStackNavigationProp<RootParamsList, "CustomerFrame">;

export default function SearchPage() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={{
            flex: 1,
            flexDirection: "column", justifyContent: "flex-start",
            padding: 10
        }}>
            <HeadSection />
            <BodySection />
        </View>
    );

    function HeadSection() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "row", alignItems: "center"
            }}>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    children={
                        <Image
                            source={Icons.drawer}
                            style={{ width: 20, height: 20 }} />
                    }
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} />
                <Text
                    style={textStyle.header}
                    children="SEARCH" />
                <View style={{
                    flex: 1,
                    width: 20, height: 20
                }} />
            </View>
        );
    }

    function BodySection() {
        const [searchFieldColor, setSearchFieldColor] = useState(blurColor)
        const [searchValue, setSearchValue] = useState("");
        const filteredProductList = productList.filter(product => product.name
            .toLowerCase().includes(searchValue.toLowerCase()))
            .map((product, index) => ({ ...product, index: index + 1 }));

        return (
            <View style={{
                flex: 9,
                flexDirection: "column", justifyContent: "flex-start"
            }}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <TextInput
                        placeholder="Search products here..."
                        style={[
                            textInputStyle.maxWidth,
                            { flex: 1, borderColor: searchFieldColor, marginVertical: 10 }]}
                        inputMode="text"
                        autoCapitalize="words"
                        value={searchValue}
                        onChangeText={(newValue) => setSearchValue(newValue)}
                        onFocus={() => setSearchFieldColor(focusedColor)}
                        onBlur={() => setSearchFieldColor(blurColor)} />
                    {searchValue.length > 0 ?
                        <TouchableOpacity
                            style={{ position: "absolute", right: 15 }}
                            children={
                                <Image
                                    style={{ width: 15, height: 15 }}
                                    source={Icons.cancel} />
                            }
                            onPress={() => setSearchValue("")} />
                        :
                        null
                    }
                </View>
                <FlatList
                    style={{ backgroundColor: ThemeColors.blueGrotto }}
                    data={filteredProductList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        const product = new Product(item.id, item.image, item.name, "", item.price, "", 0);
                        return (
                            <ProductCard
                                isAdmin={false}
                                index={item.index}
                                product={product} />
                        );
                    }}
                />
            </View>
        );
    }
}