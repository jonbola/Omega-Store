import CustomerFrame from "./front-end/customer/customer_frame";
import { NavigationIndependentTree } from "@react-navigation/native";
import LoginPage from "./front-end/customer/login_page";
import SignupPage from "./front-end/customer/signup_page";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminFrame from "./front-end/admin/admin_frame";
import AccountDetailManagerPage from "./front-end/admin/account_detail_manager_page";
import CategoryDetailManagerPage from "./front-end/admin/category_detail_manager_page";
import CreateAccountPage from "./front-end/admin/create_account_page";
import ProductDetailManagerPage from "./front-end/admin/product_detail_manager_page";
import ProductDetailPage from "./front-end/customer/product_detail_page";
import Product from "./back-end/models/product";

export type RootParamsList = {
  CustomerFrame: {
    HomePage: { isLogged: boolean };
    SearchPage: undefined;
    BookmarkPage: { isLogged: boolean };
    AccountPage: undefined;
  };
  AdminFrame: {
    AccountManagerPage: undefined;
    ProductManagerPage: undefined;
    CategoryManagerPage: undefined;
  };
  LoginPage: undefined;
  SignupPage: undefined;
  ProductDetailPage: { product: Product };
  CreateAccountPage: undefined;
  AccountDetailManagerPage: undefined;
  ProductDetailManagerPage: undefined;
  CategoryDetailManagerPage: undefined;
}

export default function RootLayout() {
  const Section = createNativeStackNavigator<RootParamsList>();

  return (
    <NavigationIndependentTree>
      <Section.Navigator
        initialRouteName="CustomerFrame"
        screenOptions={{ headerShown: false }}>
        <Section.Screen
          name="CustomerFrame"
          component={CustomerFrame}
          initialParams={{
            HomePage: { isLogged: false },
            BookmarkPage: { isLogged: false }
          }} />
        <Section.Screen
          name="AdminFrame"
          component={AdminFrame} />
        <Section.Screen
          name="LoginPage"
          component={LoginPage} />
        <Section.Screen
          name="SignupPage"
          component={SignupPage} />
        <Section.Screen
          name="ProductDetailPage"
          component={ProductDetailPage} />
        <Section.Screen
          name="CreateAccountPage"
          component={CreateAccountPage} />
        <Section.Screen
          name="AccountDetailManagerPage"
          component={AccountDetailManagerPage} />
        <Section.Screen
          name="ProductDetailManagerPage"
          component={ProductDetailManagerPage} />
        <Section.Screen
          name="CategoryDetailManagerPage"
          component={CategoryDetailManagerPage} />
      </Section.Navigator>
    </NavigationIndependentTree>
  );
}