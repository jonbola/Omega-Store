import CustomerFrame from "./front-end/customer/customer_frame";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import LoginPage from "./front-end/customer/login_page";
import SignupPage from "./front-end/customer/signup_page";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestArea from "./front-end/test_area";

export default function RootLayout() {
  const Section = createNativeStackNavigator();

  return (
    <NavigationIndependentTree>
      <Section.Navigator
        initialRouteName="frame"
        screenOptions={{ headerShown: false }}>
        <Section.Screen name="frame">
          {props => <CustomerFrame isLogged={false} />}
        </Section.Screen>
        <Section.Screen name="login">
          {props => <LoginPage />}
        </Section.Screen>
        <Section.Screen name="signup">
          {props => <SignupPage />}
        </Section.Screen>
        <Section.Screen name="test">
          {props => <TestArea />}
        </Section.Screen>
      </Section.Navigator>
    </NavigationIndependentTree>
  );
}