import { RootParamsList } from "@/app/_layout";
import { Icons } from "@/assets/resources/resource_directories";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";
import AccountManagerPage from "./account_manager_page";
import CategoryManagerPage from "./category_manager_page";
import ProductManagerPage from "./product_manager_page";

type DrawerParamsList = {
    AccountManagerPage: undefined;
    ProductManagerPage: undefined;
    CategoryManagerPage: undefined;
}

export default function AdminFrame() {
    const Drawer = createDrawerNavigator<DrawerParamsList>();

    return (
        <Drawer.Navigator
            initialRouteName="AccountManagerPage"
            backBehavior="history"
            screenOptions={({ route }) => ({
                drawerStyle: { width: 200 },
                headerShown: false,
                drawerIcon: () => {
                    let iconPath;
                    switch (route.name) {
                        case "AccountManagerPage": {
                            iconPath = Icons.home;
                            break;
                        }
                        case "ProductManagerPage": {
                            iconPath = Icons.search;
                            break;
                        }
                        case "CategoryManagerPage": {
                            iconPath = Icons.bookmark;
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
                options={{ drawerLabel: "Account" }}
                name="AccountManagerPage"
                component={AccountManagerPage} />
            <Drawer.Screen
                options={{ drawerLabel: "Product" }}
                name="ProductManagerPage"
                component={ProductManagerPage} />
            <Drawer.Screen
                options={{ drawerLabel: "Category" }}
                name="CategoryManagerPage"
                component={CategoryManagerPage} />
        </Drawer.Navigator>
    );
}