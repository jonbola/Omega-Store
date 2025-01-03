import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "./home_page";
import SearchPage from "./search_page";
import BookmarkPage from "./bookmark_page";
import AccountPage from "./account_page";
import { Image } from "react-native";
import { Icons } from "@/assets/resources/resource_directories";
import { RootParamsList } from "@/app/_layout";
import { RouteProp, useRoute } from "@react-navigation/native";

type RouteProps = RouteProp<RootParamsList, "CustomerFrame">;

export default function CustomerFrame() {
    const Drawer = createDrawerNavigator<RootParamsList["CustomerFrame"]>();
    const route = useRoute<RouteProps>();

    return (
        <Drawer.Navigator
            initialRouteName="HomePage"
            backBehavior="history"
            screenOptions={({ route }) => ({
                drawerStyle: { width: 200 },
                headerShown: false,
                drawerIcon: () => {
                    let iconPath;
                    switch (route.name) {
                        case "HomePage": {
                            iconPath = Icons.home;
                            break;
                        }
                        case "SearchPage": {
                            iconPath = Icons.search;
                            break;
                        }
                        case "BookmarkPage": {
                            iconPath = Icons.bookmark;
                            break;
                        }
                        case "AccountPage": {
                            iconPath = Icons.user;
                            break;
                        }
                        default: {
                            return;
                        }
                    }
                    return (
                        <Image
                            source={iconPath}
                            style={{ width: 30, height: 30 }} />
                    )
                }
            })}>
            <Drawer.Screen
                options={{ drawerLabel: "Home" }}
                name="HomePage"
                component={HomePage}
                initialParams={{ isLogged: route.params.HomePage.isLogged }} />
            <Drawer.Screen
                options={{ drawerLabel: "Search" }}
                name="SearchPage"
                component={SearchPage} />
            <Drawer.Screen
                options={{ drawerLabel: "Bookmark" }}
                name="BookmarkPage"
                component={BookmarkPage}
                initialParams={{ isLogged: route.params.BookmarkPage.isLogged }} />
            <Drawer.Screen
                options={{ drawerLabel: "Account" }}
                name="AccountPage"
                component={AccountPage} />
        </Drawer.Navigator>
    );
}