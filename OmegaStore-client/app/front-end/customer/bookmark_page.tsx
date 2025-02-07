import { RootParamsList } from "@/app/_layout";
import { Icons } from "@/assets/resources/resource_directories";
import { textButtonStyle, textStyle } from "@/assets/values/styleSheet";
import { DrawerActions, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity, View } from "react-native";

type NavigationProps = NativeStackNavigationProp<RootParamsList>;
type RouteProps = RouteProp<RootParamsList, "CustomerFrame">;

export default function BookmarkPage() {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<RouteProps>();

    return (
        <View style={{
            flex: 1,
            flexDirection: "column", justifyContent: "flex-start",
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
                <Text
                    style={textStyle.header}
                    children="BOOKMARK" />
                <View style={{
                    flex: 1,
                    width: 20, height: 20
                }} />
            </View>
        );
    }

    function BodySection() {
        return (
            <View style={{ flex: 9 }}>
                {
                    !route.params.isLogged ?
                        <View style={{
                            flex: 9,
                            flexDirection: "column", justifyContent: "center", alignItems: "center"
                        }}>
                            <Text
                                style={[
                                    textStyle.title, {
                                        textAlign: "center", marginVertical: 10
                                    }]}
                                children="Login to access this feature" />
                            <TouchableOpacity
                                style={textButtonStyle.container}
                                children={
                                    <Text
                                        style={textButtonStyle.text}
                                        children="LOGIN" />
                                }
                                onPress={() => navigation.navigate("LoginPage")} />
                        </View>
                        :
                        null
                }
            </View>
        );
    }
}