import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { BasicColors } from "@/assets/colors/basic_colors";
import { Icons, Images } from "@/assets/resources/resource_directories";
import { blurColor, focusedColor } from "@/assets/values/componentColor";
import { RootParamsList } from "@/app/_layout";
import { iconButtonStyle, textButtonStyle, textInputStyle, textStyle } from "@/assets/values/styleSheet";

type NavigationProps = NativeStackNavigationProp<RootParamsList>;

export default function SignupPage() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={{
            flex: 1,
            backgroundColor: BasicColors.white, padding: 10
        }}>
            <KeyboardAvoidingView
                style={{ flexGrow: 1 }}
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <HeadSection />
                    <BodySection />
                    <BottomSection />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
    function HeadSection() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center", alignItems: "center"
            }}>
                <Image
                    source={Images.store_logo}
                    style={{
                        width: 100, height: 100
                    }} />
            </View>
        );
    }

    function BodySection() {
        const [usernameFieldColor, setUsernameFieldColor] = useState(blurColor);
        const [emailFieldColor, setEmailFieldColor] = useState(blurColor);
        const [passwordFieldColor, setPasswordFieldColor] = useState(blurColor);
        const [rePasswordFieldColor, setRePasswordFieldColor] = useState(blurColor);

        const hiddenEye = Icons.hidden_eye, unhiddenEye = Icons.unhidden_eye;
        const [passwordTextHidden, setPasswordTextVision] = useState(true);
        const [rePasswordTextHidden, setRePasswordTextVision] = useState(true);
        const [passwordEye, setPasswordEye] = useState(hiddenEye);
        const [rePasswordEye, setRePasswordEye] = useState(hiddenEye);
        function changeTextVision(eyeName: string) {
            switch (eyeName) {
                case "passwordEye": {
                    {
                        if (passwordTextHidden) {
                            setPasswordTextVision(false);
                            setPasswordEye(unhiddenEye);
                        }
                        else {
                            setPasswordTextVision(true);
                            setPasswordEye(hiddenEye);
                        }
                    }
                    break;
                }
                case "rePasswordEye": {
                    if (rePasswordTextHidden) {
                        setRePasswordTextVision(false);
                        setRePasswordEye(unhiddenEye);
                    }
                    else {
                        setRePasswordTextVision(true);
                        setRePasswordEye(hiddenEye);
                    }
                    break;
                }
                default:
                    return;
            }
        }

        return (
            <View style={{
                flex: 1,
                flexDirection: "column", justifyContent: "flex-start"
            }}>
                <Text
                    style={textStyle.title}
                    children="Username" />
                <TextInput
                    placeholder="Input username here"
                    placeholderTextColor={BasicColors.gray}
                    style={[textInputStyle.w250, { borderColor: usernameFieldColor }]}
                    inputMode="text"
                    autoCapitalize="none"
                    onBlur={() => setUsernameFieldColor(blurColor)}
                    onFocus={() => setUsernameFieldColor(focusedColor)} />
                <Text
                    style={[textStyle.title, { marginTop: 10 }]}
                    children="Email" />
                <TextInput
                    placeholder="Input email here"
                    placeholderTextColor={BasicColors.gray}
                    style={[textInputStyle.w250, { borderColor: emailFieldColor }]}
                    inputMode="email"
                    autoCapitalize="none"
                    onBlur={() => setEmailFieldColor(blurColor)}
                    onFocus={() => setEmailFieldColor(focusedColor)} />
                <Text
                    style={[textStyle.title, { marginTop: 10 }]}
                    children="Password" />
                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <TextInput
                        placeholder="Input password here"
                        placeholderTextColor={BasicColors.gray}
                        style={[textInputStyle.w250, { borderColor: passwordFieldColor }]}
                        inputMode="text"
                        autoCapitalize="none"
                        secureTextEntry={passwordTextHidden}
                        onBlur={() => setPasswordFieldColor(blurColor)}
                        onFocus={() => setPasswordFieldColor(focusedColor)} />
                    <TouchableOpacity
                        style={[iconButtonStyle.container30x, { marginStart: 10 }]}
                        children={
                            <Image
                                style={iconButtonStyle.icon30x}
                                source={passwordEye} />
                        }
                        onPress={() => changeTextVision("passwordEye")} />
                </View>
                <Text
                    style={[textStyle.title, { marginTop: 10 }]}
                    children="Repeat Password" />
                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <TextInput
                        placeholder="Repeat there password here"
                        placeholderTextColor={BasicColors.gray}
                        style={[textInputStyle.w250, { borderColor: rePasswordFieldColor }]}
                        inputMode="text"
                        autoCapitalize="none"
                        secureTextEntry={rePasswordTextHidden}
                        onBlur={() => setRePasswordFieldColor(blurColor)}
                        onFocus={() => setRePasswordFieldColor(focusedColor)} />
                    <TouchableOpacity
                        style={[iconButtonStyle.container30x, { marginStart: 10 }]}
                        children={
                            <Image
                                style={iconButtonStyle.icon30x}
                                source={rePasswordEye} />
                        }
                        onPress={() => changeTextVision("rePasswordEye")} />
                </View>
            </View>
        );
    }

    function BottomSection() {
        return (
            <View style={{
                flex: 3,
                flexDirection: "column", justifyContent: "flex-start",
                alignItems: "center"
            }}>
                <TouchableOpacity
                    style={textButtonStyle.container}
                    children={
                        <Text
                            style={textButtonStyle.text}
                            children="SIGN UP" />
                    }
                    onPress={() => navigation.navigate("LoginPage")} />
                <TouchableOpacity
                    style={{ marginTop: 10 }}
                    children={
                        <Text
                            style={textStyle.link}
                            children="Have an account?" />
                    }
                    onPress={() => navigation.goBack()} />
            </View>
        );
    }
}