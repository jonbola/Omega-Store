import { RootParamsList } from "@/app/_layout";
import { BasicColors } from "@/assets/colors/basic_colors";
import { ThemeColors } from "@/assets/colors/theme_colors";
import { Icons } from "@/assets/resources/resource_directories";
import { iconButtonStyle, textButtonStyle, textStyle } from "@/assets/values/styleSheet";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

type NavigationProps = NativeStackNavigationProp<RootParamsList, "ProductDetailPage">;
type RouteProps = RouteProp<RootParamsList, "ProductDetailPage">;

export default function ProductDetailPage() {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<RouteProps>();

    return (
        <View style={{
            flex: 1,
            flexDirection: "column", justifyContent: "flex-start",
            backgroundColor: BasicColors.white, padding: 10
        }}>
            <HeadSection />
            <BodySection />
            <BottomSection />
        </View>
    );

    function HeadSection() {
        return (
            <View style={{
                flexDirection: "row", justifyContent: "flex-start", alignItems: "center",
                marginVertical: 10
            }}>
                <TouchableOpacity children={
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={Icons.back} />
                }
                    onPress={() => navigation.goBack()} />
            </View>
        );
    }

    function BodySection() {
        return (
            <ScrollView
                contentContainerStyle={{ flexDirection: "column", justifyContent: "flex-start" }}>
                <Image
                    style={{
                        width: 200, height: 200,
                        borderColor: ThemeColors.blueGreen, borderWidth: 2, borderRadius: 10,
                        alignSelf: "center", marginVertical: 10
                    }}
                    source={route.params.product._image} />
                <Text
                    style={[textStyle.header, { marginVertical: 10 }]}
                    children={route.params.product._name} />
                <Text
                    style={textStyle.title}
                    children={`Category: ${route.params.product._category}`} />
                <Text
                    style={[textStyle.title, { marginVertical: 10 }]}
                    children={`Price: ${route.params.product._price}`} />
                <Text
                    style={textStyle.title}
                    children={`Description: ${route.params.product._description}`} />
            </ScrollView>
        );
    }

    function BottomSection() {
        const [productQuantityValue, setProductQuantityValue] = useState("1");

        return (
            <View>
                {
                    !route.params.isLogged ?
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Text
                                style={textStyle.bold}
                                children="Login to buy this product" />
                            <TouchableOpacity
                                style={[textButtonStyle.container, { marginVertical: 10 }]}
                                children={
                                    <Text
                                        style={textButtonStyle.text}
                                        children="LOGIN" />
                                }
                                onPress={() => navigation.navigate("LoginPage")} />
                        </View>
                        :
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <View style={{
                                flexDirection: "row", justifyContent: "center", alignItems: "center",
                                marginHorizontal: 10
                            }}>
                                <TouchableOpacity
                                    style={[
                                        iconButtonStyle.container15x,
                                        { backgroundColor: ThemeColors.babyBlue, borderColor: ThemeColors.blueGreen }
                                    ]}
                                    children={
                                        <Image
                                            style={[iconButtonStyle.icon15x, { tintColor: ThemeColors.blueGrotto }]}
                                            source={Icons.minus} />
                                    }
                                    onPress={() => {
                                        const value = parseInt(productQuantityValue);
                                        !(value == 1) ?
                                            setProductQuantityValue((value - 1).toString())
                                            :
                                            null
                                    }} />
                                <TextInput
                                    style={{ width: 25, textAlign: "center" }}
                                    inputMode="numeric"
                                    autoCapitalize="none"
                                    value={productQuantityValue}
                                    onChangeText={(newValue) => setProductQuantityValue(newValue)}
                                    onEndEditing={(event) => {
                                        const newValue = event.nativeEvent.text;
                                        !(newValue == "" || parseInt(newValue) <= 0) ?
                                            setProductQuantityValue(newValue)
                                            :
                                            setProductQuantityValue("1")
                                    }} />
                                <TouchableOpacity
                                    style={[
                                        iconButtonStyle.container15x,
                                        { backgroundColor: ThemeColors.babyBlue, borderColor: ThemeColors.blueGreen }
                                    ]}
                                    children={
                                        <Image
                                            style={[iconButtonStyle.icon15x, { tintColor: ThemeColors.blueGrotto }]}
                                            source={Icons.plus} />
                                    }
                                    onPress={() => {
                                        const value = parseInt(productQuantityValue);
                                        setProductQuantityValue((value + 1).toString())
                                    }
                                    } />
                            </View>
                            <TouchableOpacity
                                style={[
                                    textButtonStyle.container,
                                    { justifyContent: "flex-end", marginHorizontal: 10 }]}
                                children={
                                    <Text
                                        style={textButtonStyle.text}
                                        children="ADD TO CART" />
                                } />
                        </View>
                }
            </View>
        );
    }
}