import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeFragment from "./home_fragment";
import SearchFragment from "./search_fragment";
import BookmarkFragment from "./bookmark_fragment";
import AccountFragment from "./account_fragment";
import { BottomTabIcon } from "@/assets/components/bottomTabIcon";
import { IconSources } from "@/assets/resources/resource_directories"; import { ThemeColors } from "@/assets/colors/theme_colors";

export default function CustomerFrame() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="home_page"
            backBehavior="history"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabelPosition: "below-icon",
                tabBarIcon: () => {
                    let iconPath;
                    if (route.name == "home_page") {
                        iconPath = IconSources.ic_home_200px;
                    }
                    else if (route.name == "search_page") {
                        iconPath = IconSources.ic_search_200px;
                    }
                    else if (route.name == "bookmark_page") {
                        iconPath = IconSources.ic_bookmark_225px;
                    }
                    else {
                        iconPath = IconSources.ic_user_200px;
                    }
                    return (
                        <BottomTabIcon source={iconPath} />
                    );
                },
                tabBarStyle: { backgroundColor: ThemeColors.blueGreen },
                tabBarActiveTintColor: ThemeColors.navyBlue,
                tabBarInactiveTintColor: ThemeColors.blueGrotto,
            })
            }>
            <Tab.Screen
                options={{
                    tabBarLabel: "Home"
                }}
                name="home_page"
                component={HomeFragment} />
            <Tab.Screen
                options={{
                    tabBarLabel: "Search"
                }}
                name="search_page"
                component={SearchFragment} />
            <Tab.Screen options={{
                tabBarLabel: "Bookmark"
            }}
                name="bookmark_page"
                component={BookmarkFragment} />
            <Tab.Screen options={{
                tabBarLabel: "Account"
            }}
                name="account_page"
                component={AccountFragment} />
        </Tab.Navigator>
    );
}