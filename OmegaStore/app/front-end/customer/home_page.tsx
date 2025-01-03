import { DrawerActions, RouteProp, useRoute } from "@react-navigation/native";
import { BasicColors } from "@/assets/colors/basic_colors";
import { Icons, Images } from "@/assets/resources/resource_directories";
import { RootParamsList } from "@/app/_layout";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

type NavigationProps = NativeStackNavigationProp<RootParamsList, "CustomerFrame">;
type RouteProps = RouteProp<RootParamsList["CustomerFrame"], "HomePage">;

export default function HomePage() {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<RouteProps>();

    return (
        <View style={{
            flex: 1,
            backgroundColor: BasicColors.white,
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
                backgroundColor: BasicColors.white,
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
                <Image
                    source={Images.store_logo}
                    style={{ width: 70, height: 70 }}
                />
                <TouchableOpacity
                    style={{ flex: 1, alignItems: "flex-end" }}
                    children={
                        <Image
                            source={
                                !route.params.isLogged ?
                                    Icons.login
                                    :
                                    Icons.shopping_cart
                            }
                            style={{
                                width: 30, height: 30
                            }} />
                    }
                    onPress={
                        () => !route.params.isLogged ?
                            navigation.navigate("LoginPage")
                            :
                            null
                    } />
            </View>
        );
    }
}

function BodySection() {

    return (
        <View style={{ flex: 9 }}>

        </View>
    );
}