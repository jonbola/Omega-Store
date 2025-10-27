import Account from "@/data/models/account";
import { UserProvider } from "@/data/providers/user";
import { NavigationIndependentTree, NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoginPage from "./pages/login";
import { PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import SignUpPage from "./pages/signup";
import { DrawerParams, UserLayout } from "./pages/user-layout";
import { SearchPage } from "./pages/search";
import { ProductDetailPage } from "./pages/product_detail";
import Product from "@/data/models/product";

export type RootParams = {
  UserLayout: NavigatorScreenParams<DrawerParams> & { account: Account | null; };
  LogInPage: undefined;
  SignUpPage: undefined;
  SearchPage: { searchText: string };
  ProductDetailPage: { product: Product };
};
export type RootNavigationProps = NativeStackNavigationProp<RootParams>;

export default function RootLayout() {
  const Stack = createNativeStackNavigator<RootParams>();

  return (
    <UserProvider>
      <PaperProvider settings={{ icon: (props) => <MaterialCommunityIcons {...props} /> }}>
        <NavigationIndependentTree>
          <Stack.Navigator initialRouteName="UserLayout" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="UserLayout" component={UserLayout} initialParams={{ account: null }} />
            <Stack.Screen name="LogInPage" component={LoginPage} />
            <Stack.Screen name="SignUpPage" component={SignUpPage} />
            <Stack.Screen name="SearchPage" component={SearchPage} initialParams={{ searchText: "" }} />
            <Stack.Screen name="ProductDetailPage" component={ProductDetailPage} />
          </Stack.Navigator>
        </NavigationIndependentTree>
      </PaperProvider>
    </UserProvider>
  );
};