import { StatusBarBox } from "@/assets/components/statusBarBox";
import { BasicColors } from "@/assets/colors/basic_colors";
import CustomerFrame from "./front-end/customer-pages/customer_frame";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LoginPage from "./front-end/customer-pages/login_page";
import SignupPage from "./front-end/customer-pages/signup_page";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
export default function RootLayout() {
  const Section = createNativeStackNavigator();
  // return (
  //   <NavigationContainer independent={true}>
  //     <StatusBarBox backgroundColor={BasicColors.white} />
  //     <CustomerFrame />
  //   </NavigationContainer>
  // );
  return (
    <NavigationContainer
      independent={true}>
      <StatusBarBox backgroundColor={BasicColors.white}/>
      <Section.Navigator
        initialRouteName="login_page"
        screenOptions={{ headerShown: false }}>
        <Section.Screen name="customer_frame" component={CustomerFrame} />
        <Section.Screen name="login_page" component={LoginPage} />
        <Section.Screen name="signup_page" component={SignupPage} />
      </Section.Navigator>
    </NavigationContainer>
  );
}