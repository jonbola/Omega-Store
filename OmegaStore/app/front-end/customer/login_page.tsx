import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { BasicColors } from "@/assets/colors/basic_colors";
import { Icons, Images } from "@/assets/resources/resource_directories";
import { blurColor, focusedColor } from "@/assets/values/componentColor";
import { RootParamsList } from "@/app/_layout";
import React from "react";
import { iconButtonStyle, textButtonStyle, textInputStyle, textStyle } from "@/assets/values/styleSheet";

type NavigationProps = NativeStackNavigationProp<RootParamsList, "LoginPage">;
type RouteProps = RouteProp<RootParamsList, "LoginPage">;

export default function LoginPage() {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<RouteProps>();

    return (
        <View style={{ flex: 1, backgroundColor: BasicColors.white }}>
            <KeyboardAvoidingView
                style={{ flexGrow: 1 }}
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <HeadSection />
                    <BodySection />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );

    function HeadSection() {
        return (
            <View style={{
                flex: 2,
                justifyContent: "center", alignItems: "center"
            }}>
                <Image
                    source={Images.store_logo}
                    style={{ width: 100, height: 100 }} />
            </View>
        );
    }

    function BodySection() {
        const [usernameValue, setUsernameValue] = useState("");
        const [passwordValue, setPasswordValue] = useState("");
        const [usernameFieldColor, setUsernameFieldColor] = useState(blurColor);
        const [passwordFieldColor, setPasswordFieldColor] = useState(blurColor);
        const hiddenEye = Icons.hidden_eye, unhiddenEye = Icons.unhidden_eye;
        const [hidden, setTextVision] = useState(true);
        const [eye, setEye] = useState(hiddenEye);
        function changeTextVision() {
            if (!hidden) {
                setTextVision(true);
                setEye(hiddenEye);
            }
            else {
                setTextVision(false);
                setEye(unhiddenEye);
            }
        }

        return (
            <View style={{
                flex: 8, padding: 10,
                flexDirection: "column", justifyContent: "flex-start"
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: "column", justifyContent: "flex-start"
                }}>
                    <Text
                        children="Username"
                        style={textStyle.title} />
                    <TextInput
                        placeholder="Input username here"
                        style={[textInputStyle.w250, { borderColor: usernameFieldColor }]}
                        inputMode="text"
                        autoCapitalize="none"
                        value={usernameValue}
                        onChangeText={(newValue) => setUsernameValue(newValue)}
                        onFocus={() => setUsernameFieldColor(focusedColor)}
                        onBlur={() => setUsernameFieldColor(blurColor)}
                    />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: "column", justifyContent: "flex-start"
                }} >
                    <Text
                        children="Password"
                        style={textStyle.title} />
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <TextInput
                            placeholder="Input password here"
                            style={[textInputStyle.w250, { borderColor: passwordFieldColor }]}
                            inputMode="text"
                            autoCapitalize="none"
                            secureTextEntry={hidden}
                            value={passwordValue}
                            onChangeText={(newValue) => setPasswordValue(newValue)}
                            onFocus={() => setPasswordFieldColor(focusedColor)}
                            onBlur={() => setPasswordFieldColor(blurColor)} />
                        <TouchableOpacity
                            style={[iconButtonStyle.container30x, { marginStart: 10 }]}
                            children={
                                <Image
                                    source={eye}
                                    style={iconButtonStyle.icon30x} />
                            }
                            onPress={() => changeTextVision()} />
                    </View>
                </View>
                {BottomSection(usernameValue, passwordValue)}
            </View>
        );
    }

    function BottomSection(username: string, password: string) {
        return (
            <View style={{
                flex: 8, alignItems: "center",
                flexDirection: "column", justifyContent: "flex-start"
            }}>
                <TouchableOpacity
                    style={[textButtonStyle.container, { width: 100, height: 50 }]}
                    children={
                        <Text
                            style={textButtonStyle.text}
                            children="LOGIN" />
                    }
                    onPress={() => {
                        if (username != "admin" && password != "admin123") {
                            navigation.navigate("CustomerFrame", {
                                HomePage: { isLogged: true },
                                SearchPage: undefined,
                                BookmarkPage: { isLogged: true },
                                AccountPage: undefined
                            })
                        }
                        else {
                            navigation.navigate("AdminFrame", {
                                AccountManagerPage: undefined,
                                ProductManagerPage: undefined,
                                CategoryManagerPage: undefined
                            })
                        }
                    }} />
                <TouchableOpacity
                    style={{ marginTop: 10 }}
                    children={
                        <Text style={textStyle.link}
                            children="Forget password?"
                            onPress={() => null} />
                    } />
                <TouchableOpacity
                    style={{ marginTop: 10 }}
                    children={
                        <Text
                            style={textStyle.link}
                            children="Don't have an account?" />
                    }
                    onPress={() => navigation.navigate("SignupPage")} />
            </View>
        );
    }
}