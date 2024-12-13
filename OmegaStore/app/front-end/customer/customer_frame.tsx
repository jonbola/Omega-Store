import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeFragment from "./home_fragment";
import SearchFragment from "./search_fragment";
import BookmarkFragment from "./bookmark_fragment";
import AccountFragment from "./account_fragment";
import { Image } from "react-native";
import { IconSources } from "@/assets/resources/resource_directories";
import { useNavigation } from "@react-navigation/native";

type CustomerFrameProps = {
    isLogged: boolean;
}

export default function CustomerFrame(frameProps: CustomerFrameProps) {
    const Drawer = createDrawerNavigator();
    const navigation = useNavigation();

    return (
        <Drawer.Navigator
            initialRouteName="home"
            backBehavior="history"
            screenOptions={({ route }) => ({
                drawerStyle:{width:200},
                headerShown: false,
                drawerIcon: () => {
                    let iconPath;
                    switch (route.name) {
                        case "home": {
                            iconPath = IconSources.ic_home;
                            break;
                        }
                        case "search": {
                            iconPath = IconSources.ic_search;
                            break;
                        }
                        case "bookmark": {
                            iconPath = IconSources.ic_bookmark;
                            break;
                        }
                        case "account": {
                            iconPath = IconSources.ic_user;
                            break;
                        }
                        default: {
                            return;
                        }
                    }
                    return (
                        <Image
                            source={iconPath}
                            style={{
                                width: 30,
                                height: 30
                            }} />
                    )
                }
            })}>
            <Drawer.Screen
                options={{ drawerLabel: "Home"}}
                name="home">
                {props => <HomeFragment isLogged={frameProps.isLogged} />}
            </Drawer.Screen>
            <Drawer.Screen
                options={{ drawerLabel: "Search" }}
                name="search">
                {props => <SearchFragment />}
            </Drawer.Screen>
            <Drawer.Screen
                options={{ drawerLabel: "Bookmark" }}
                name="bookmark">
                {props => <BookmarkFragment />}
            </Drawer.Screen>
            <Drawer.Screen
                options={{ drawerLabel: "Account" }}
                name="account">
                {props => <AccountFragment />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
}