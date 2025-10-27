// import { BasicColors } from "@/assets/colors/basic-colors";
// import { ThemeColors } from "@/assets/colors/theme-colors";
// import { Icons } from "@/assets/images/images_directories";
// import { IconButtonStyle } from "@/assets/styles/icon-button-style";
// import { TextButtonStyle } from "@/assets/styles/text-button-style";
// import { TextStyle } from "@/assets/styles/text-style";
// import { RouteProp, useRoute } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useNavigation } from "expo-router";
// import React, { useState } from "react";
// import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { RootParams } from "../_layout";
// import { useUserContext } from "../contexts/user";



// type NavigationProps = NativeStackNavigationProp<RootParams, "ProductDetailPage">;
// type RouteProps = RouteProp<RootParams, "ProductDetailPage">;
// type HeadSectionProps = {
//     navigation: NavigationProps;
// };
// type BottomSectionProps = {
//     navigation: NavigationProps;
// };

// export default function ProductDetailPage() {
//     const navigation = useNavigation<NavigationProps>();

//     return (
//         <View style={{
//             flex: 1,
//             flexDirection: "column", justifyContent: "flex-start",
//             backgroundColor: BasicColors.white, padding: 10
//         }}>
//             <HeadSection navigation={navigation} />
//             <BodySection />
//             <BottomSection navigation={navigation} />
//         </View>
//     );
// };

// function HeadSection(props: HeadSectionProps) {
//     return (
//         <View style={{
//             flexDirection: "row", justifyContent: "flex-start", alignItems: "center",
//             marginVertical: 10
//         }}>
//             <TouchableOpacity children={
//                 <Image
//                     style={{ width: 30, height: 30 }}
//                     source={Icons.back} />
//             }
//                 onPress={() => props.navigation.goBack()} />
//         </View>
//     );
// };

// function BodySection() {
//     const route = useRoute<RouteProps>();

//     return (
//         <ScrollView
//             contentContainerStyle={{ padding: 10, flexDirection: "column", justifyContent: "flex-start", backgroundColor: ThemeColors.blueGrotto, borderRadius: 30 }}>
//             <Image
//                 style={{
//                     width: 200, height: 200,
//                     borderColor: ThemeColors.blueGreen, borderWidth: 2, borderRadius: 10,
//                     alignSelf: "center", marginVertical: 10
//                 }}
//                 source={{ uri: "http://localhost:5097/Images/Products/" + route.params.product._image }} />
//             <Text
//                 style={[TextStyle.title, { marginVertical: 10 }]}
//                 children={route.params.product._name} />
//             <Text
//                 style={TextStyle.title}
//                 children={`Category: ${route.params.product._category?._name}`} />
//             <Text
//                 style={[TextStyle.title, { marginVertical: 10 }]}
//                 children={`Price: ${route.params.product._price}$`} />
//             <Text
//                 style={TextStyle.title}
//                 children={`Description: ${route.params.product._description}`} />
//         </ScrollView>
//     );
// };

// function BottomSection(props: BottomSectionProps) {
//     const { isLogged } = useUserContext()
//     const [productQuantityValue, setProductQuantityValue] = useState("1");

//     return (
//         <View>
//             {
//                 !isLogged ?
//                     <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//                         <Text
//                             style={TextStyle.bold}
//                             children="Login to buy this product" />
//                         <TouchableOpacity
//                             style={[TextButtonStyle.container, { marginVertical: 10 }]}
//                             children={
//                                 <Text
//                                     style={TextButtonStyle.text}
//                                     children="LOGIN" />
//                             }
//                             onPress={() => props.navigation.navigate("LoginPage")} />
//                     </View>
//                     :
//                     <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//                         <View style={{
//                             flexDirection: "row", justifyContent: "center", alignItems: "center",
//                             marginHorizontal: 10
//                         }}>
//                             <TouchableOpacity
//                                 style={[
//                                     IconButtonStyle.container15x,
//                                     { backgroundColor: ThemeColors.babyBlue, borderColor: ThemeColors.blueGreen }
//                                 ]}
//                                 children={
//                                     <Image
//                                         style={[IconButtonStyle.icon15x, { tintColor: ThemeColors.blueGrotto }]}
//                                         source={Icons.minus} />
//                                 }
//                                 onPress={() => {
//                                     const value = parseInt(productQuantityValue);
//                                     !(value == 1) ?
//                                         setProductQuantityValue((value - 1).toString())
//                                         :
//                                         null
//                                 }} />
//                             <TextInput
//                                 style={{ width: 25, textAlign: "center" }}
//                                 inputMode="numeric"
//                                 autoCapitalize="none"
//                                 value={productQuantityValue}
//                                 onChangeText={(newValue) => setProductQuantityValue(newValue)}
//                                 onEndEditing={(event) => {
//                                     const newValue = event.nativeEvent.text;
//                                     !(newValue == "" || parseInt(newValue) <= 0) ?
//                                         setProductQuantityValue(newValue)
//                                         :
//                                         setProductQuantityValue("1")
//                                 }} />
//                             <TouchableOpacity
//                                 style={[
//                                     IconButtonStyle.container15x,
//                                     { backgroundColor: ThemeColors.babyBlue, borderColor: ThemeColors.blueGreen }
//                                 ]}
//                                 children={
//                                     <Image
//                                         style={[IconButtonStyle.icon15x, { tintColor: ThemeColors.blueGrotto }]}
//                                         source={Icons.plus} />
//                                 }
//                                 onPress={() => {
//                                     const value = parseInt(productQuantityValue);
//                                     setProductQuantityValue((value + 1).toString())
//                                 }
//                                 } />
//                         </View>
//                         <TouchableOpacity
//                             style={[
//                                 TextButtonStyle.container,
//                                 { justifyContent: "flex-end", marginHorizontal: 10 }]}
//                             children={
//                                 <Text
//                                     style={TextButtonStyle.text}
//                                     children="ADD TO CART" />
//                             } />
//                     </View>
//             }
//         </View>
//     );
// };

import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from "react-native";
import { RootNavigationProps, RootParams } from "../_layout";
import { container_styles } from "../utils/styles/container_style";
import { IconButton } from "react-native-paper";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Image_URL } from "@/data/api_url";
import { ThemeColors } from "@/assets/colors/theme-colors";

type RouteProps = RouteProp<RootParams, "ProductDetailPage">;
type HeadSectionProps = {
    navigation: RootNavigationProps;
};
type BodySectionProps = {
    route: RouteProps;
};

export function ProductDetailPage() {
    const navigation = useNavigation<RootNavigationProps>();
    const route = useRoute<RouteProps>();

    return (
        <KeyboardAvoidingView
            style={container_styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <ScrollView>
                <HeadSection navigation={navigation} />
                <BodySection route={route}/>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

function HeadSection(props: HeadSectionProps) {
    return (
        <View style={[container_styles.head_container, { justifyContent: "center" }]}>
            <IconButton icon="keyboard-backspace" size={hp(5)}
                onPress={() => props.navigation.goBack()} />
        </View>
    );
};

function BodySection(props:BodySectionProps) {
    return (
        <View style={container_styles.body_container}>
            <View style={sub_styles.product_image_container}>
                <Image source={{ uri: Image_URL + props.route.params.product._image }}
                    style={sub_styles.product_image} />
            </View>
        </View>
    );
};

const sub_styles = StyleSheet.create({
    product_image_container: {
        padding: 10,
        alignSelf: "center",
        alignItems: "center",
        width:wp(99),
        backgroundColor: ThemeColors.blueGreen,
        borderWidth: 3,
        borderRadius: 15,
        borderColor:ThemeColors.blueGrotto
    },
    product_image: {
        width: wp(20),
        height: wp(20)
    }
});