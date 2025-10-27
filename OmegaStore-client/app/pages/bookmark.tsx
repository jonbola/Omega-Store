// import { Icons } from "@/assets/images/images_directories";
// import { TextButtonStyle } from "@/assets/styles/text-button-style";
// import { TextStyle } from "@/assets/styles/text-style";
// import { DrawerActions } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useNavigation } from "expo-router";
// import React from "react";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import { RootParams } from "../_layout";
// import { UserProvider, useUserContext } from "../contexts/user";

// type NavigationProps = NativeStackNavigationProp<RootParams>;
// type HeadSectionProps = {
//     navigation: NavigationProps;
// };
// type BodySectionProps = {
//     navigation: NavigationProps;
// };

// export default function BookmarkPage() {
//     const navigation = useNavigation<NavigationProps>();

//     return (
//         <UserProvider>
//             <View style={{
//                 flex: 1,
//                 flexDirection: "column", justifyContent: "flex-start",
//                 padding: 10
//             }}>
//                 <HeadSection navigation={navigation} />
//                 <BodySection navigation={navigation} />
//             </View>
//         </UserProvider>
//     );
// };

// function HeadSection(props: HeadSectionProps) {
//     return (
//         <View style={{
//             flex: 1,
//             flexDirection: "row", alignItems: "center"
//         }}>
//             <TouchableOpacity
//                 style={{ flex: 1 }}
//                 children={
//                     <Image
//                         source={Icons.drawer}
//                         style={{ width: 20, height: 20 }} />
//                 }
//                 onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer)} />
//             <Text
//                 style={TextStyle.header}
//                 children="BOOKMARK" />
//             <View style={{
//                 flex: 1,
//                 width: 20, height: 20
//             }} />
//         </View>
//     );
// };

// function BodySection(props: BodySectionProps) {
//     const { isLogged } = useUserContext()

//     return (
//         <View style={{ flex: 9 }}>
//             {
//                 !isLogged ?
//                     <View style={{
//                         flex: 9,
//                         flexDirection: "column", justifyContent: "center", alignItems: "center"
//                     }}>
//                         <Text
//                             style={[
//                                 TextStyle.title, {
//                                     textAlign: "center", marginVertical: 10
//                                 }]}
//                             children="Login to access this feature" />
//                         <TouchableOpacity
//                             style={TextButtonStyle.container}
//                             children={
//                                 <Text
//                                     style={TextButtonStyle.text}
//                                     children="LOGIN" />
//                             }
//                             onPress={() => props.navigation.navigate("LoginPage")} />
//                     </View>
//                     :
//                     null
//             }
//         </View>
//     );
// };

import React from "react";
import { View } from "react-native";

export default function BookmarkPage() {
    return (
        <View>

        </View>
    );
};