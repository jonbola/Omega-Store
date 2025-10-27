import React from "react";
import HomePage from "./home";
import BookmarkPage from "./bookmark";
import InfoPage from "./info";
import { Icon } from "react-native-paper";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Account from "@/data/models/account";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootParams } from "../_layout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeColors } from "@/assets/colors/theme-colors";

export type DrawerParams = {
    HomePage: undefined;
    BookmarkPage: undefined;
    InfoPage: { account: Account | null };
};
export type DrawerNavigationProps = NativeStackNavigationProp<DrawerParams>;
type RouteProps = RouteProp<RootParams, "UserLayout">;

export function UserLayout() {
    const route = useRoute<RouteProps>();
    const Tab = createBottomTabNavigator<DrawerParams>();

    return (
        <Tab.Navigator initialRouteName="HomePage" backBehavior="history" screenOptions={({ route }) => ({
            headerShown: false, animation: "shift", tabBarStyle: {
                padding: 10, height: "auto", backgroundColor: ThemeColors.babyBlue,
                borderTopWidth: 3, borderColor: ThemeColors.navyBlue
            },
            tabBarActiveBackgroundColor: ThemeColors.blueGreen, tabBarInactiveTintColor: ThemeColors.blueGrotto,
            tabBarLabelPosition: "below-icon", tabBarLabelStyle: { fontSize: hp(2) },
            tabBarIcon: () => {
                let iconName;

                switch (route.name) {
                    case "HomePage": {
                        iconName = "home-outline";
                        break;
                    }
                    case "BookmarkPage": {
                        iconName = "bookmark-multiple-outline";
                        break;
                    }
                    case "InfoPage": {
                        iconName = "account-outline";
                        break;
                    }
                }

                return <Icon source={iconName} size={wp(2)} />
            }
        })}>
            <Tab.Screen options={{ tabBarLabel: "Home" }} name="HomePage" component={HomePage} />
            <Tab.Screen options={{ tabBarLabel: "Bookmark" }} name="BookmarkPage" component={BookmarkPage} />
            <Tab.Screen options={{ tabBarLabel: "Info" }} name="InfoPage" component={InfoPage} />
        </Tab.Navigator>
    );
}

const sub_styles = StyleSheet.create({

});