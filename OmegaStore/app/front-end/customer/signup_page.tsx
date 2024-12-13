import { IconButton } from "@/assets/components/iconButton";
import { TextBox } from "@/assets/components/textBox";
import { TextButton } from "@/assets/components/textButton";
import { TextField } from "@/assets/components/textField";
import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { BasicColors } from "@/assets/colors/basic_colors";
import { IconSources, ImageSources } from "@/assets/resources/resource_directories";
import { AndroidFontFamily } from "@/assets/fonts/androidFontFamily";
import { blurFieldColor, buttonBackgroundColor, buttonBorderColor, buttonTextColor, focusedFieldColor, linkTextColor, normalTextColor } from "@/assets/values/componentColor";
import Container from "@/assets/components/container";

type SignupPageProps = {
}

export default function SignupPage(props: SignupPageProps) {
    return (
        <Container
            containerStyle={{
                height: "100%",
                backgroundColor: BasicColors.white,
            }}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView>
                    <HeadSection />
                    <BodySection />
                    <BottomSection />
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
}

function HeadSection() {
    return (
        <Container //Logo section
            containerStyle={{ margin: { marginVertical: 30 } }}>
            <Image
                source={ImageSources.img_store_logo}
                style={{
                    width: 100,
                    height: 100,
                    alignSelf: "center"
                }} />
        </Container>
    );
}

function BodySection() {
    const blurColor = blurFieldColor, focusedColor = focusedFieldColor;
    const [usernameFieldColor, setUsernameFieldColor] = useState(blurColor);
    const [emailFieldColor, setEmailFieldColor] = useState(blurColor);
    const [passwordFieldColor, setPasswordFieldColor] = useState(blurColor);
    const [rePasswordFieldColor, setRePasswordFieldColor] = useState(blurColor);

    const hiddenEye = IconSources.ic_hidden_eye, unhiddenEye = IconSources.ic_unhidden_eye;
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
        <Container //Input section
            containerStyle={{ margin: { marginHorizontal: 10 } }}
            childrenStyle={{
                flexDirection: "column",
                justifyContent: "flex-start"
            }}>
            <TextBox
                text="Username"
                textStyle={{
                    fontFamily: AndroidFontFamily.roboto,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontSize: 20,
                    color: normalTextColor,
                }} />
            <TextField
                placeHolderText="Input username here"
                placeHolderStyle={{ color: BasicColors.gray }}
                containerStyle={{
                    width: 250,
                    height: 40,
                    backgroundColor: BasicColors.white,
                    borderWidth: 1.5,
                    borderColor: usernameFieldColor,
                    borderRadius: 10,
                    padding: { paddingLeft: 10 }
                }}
                function={{
                    inputMode: "text",
                    onFocus: () => setUsernameFieldColor(focusedColor),
                    onBlur: () => setUsernameFieldColor(blurColor),
                    autoCapitalize: "none",
                }} />
            <TextBox
                text="Email"
                textStyle={{
                    fontFamily: AndroidFontFamily.roboto,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontSize: 20,
                    color: normalTextColor,
                }}
                containerStyle={{ margin: { marginTop: 10 } }} />
            <TextField
                placeHolderText="Input email here"
                placeHolderStyle={{ color: BasicColors.gray }}
                containerStyle={{
                    width: 250,
                    height: 40,
                    backgroundColor: BasicColors.white,
                    borderWidth: 1.5,
                    borderColor: emailFieldColor,
                    borderRadius: 10,
                    padding: { paddingLeft: 10 }
                }}
                function={{
                    inputMode: "email",
                    onFocus: () => setEmailFieldColor(focusedColor),
                    onBlur: () => setEmailFieldColor(blurColor),
                    autoCapitalize: "none",
                }} />
            <TextBox
                text="Password"
                textStyle={{
                    fontFamily: AndroidFontFamily.roboto,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontSize: 20,
                    color: normalTextColor,
                }}
                containerStyle={{ margin: { marginTop: 10 } }} />
            <Container
                childrenStyle={{
                    flexDirection: "row",
                    justifyContent: "flex-start"
                }}>
                <TextField
                    placeHolderText="Input password here"
                    placeHolderStyle={{ color: BasicColors.gray }}
                    containerStyle={{
                        width: 250,
                        height: 40,
                        backgroundColor: BasicColors.white,
                        borderWidth: 1.5,
                        borderColor: passwordFieldColor,
                        borderRadius: 10,
                        padding: { paddingLeft: 10 }
                    }}
                    function={{
                        inputMode: "text",
                        onFocus: () => setPasswordFieldColor(focusedColor),
                        onBlur: () => setPasswordFieldColor(blurColor),
                        autoCapitalize: "none",
                        hideText: passwordTextHidden
                    }} />
                <IconButton
                    iconSource={passwordEye}
                    iconStyle={{
                        width: 30,
                        height: 30
                    }}
                    containerStyle={{
                        width: 32,
                        height: 32,
                        borderWidth: 1,
                        borderRadius: 10,
                        margin: {
                            marginStart: 10,
                            marginTop: 4
                        }
                    }}
                    function={{ onPress: () => changeTextVision("passwordEye") }} />
            </Container>
            <TextBox
                text="Repeat Password"
                textStyle={{
                    fontFamily: AndroidFontFamily.roboto,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontSize: 20,
                    color: normalTextColor,
                }}
                containerStyle={{ margin: { marginTop: 10 } }} />
            <Container
                childrenStyle={{
                    flexDirection: "row",
                    justifyContent: "flex-start"
                }}>
                <TextField
                    placeHolderText="Repeat the password here"
                    placeHolderStyle={{ color: BasicColors.gray }}
                    containerStyle={{
                        width: 250,
                        height: 40,
                        backgroundColor: BasicColors.white,
                        borderWidth: 1.5,
                        borderColor: rePasswordFieldColor,
                        borderRadius: 10,
                        padding: { paddingLeft: 10 }
                    }}
                    function={{
                        inputMode: "text",
                        onFocus: () => setRePasswordFieldColor(focusedColor),
                        onBlur: () => setRePasswordFieldColor(blurColor),
                        autoCapitalize: "none",
                        hideText: rePasswordTextHidden
                    }} />
                <IconButton
                    iconSource={rePasswordEye}
                    iconStyle={{
                        width: 30,
                        height: 30
                    }}
                    containerStyle={{
                        width: 32,
                        height: 32,
                        borderWidth: 1,
                        borderRadius: 10,
                        margin: {
                            marginStart: 10,
                            marginTop: 4
                        }
                    }}
                    function={{ onPress: () => changeTextVision("rePasswordEye") }} />
            </Container>
        </Container>
    );
}

function BottomSection() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <Container //Function section
            containerStyle={{ margin: { marginVertical: 30 } }}
            childrenStyle={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <TextButton
                text="SIGN UP"
                textStyle={{
                    color: buttonTextColor,
                    fontFamily: AndroidFontFamily.roboto,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontSize: 15
                }}
                containerStyle={{
                    width: 80,
                    height: 40,
                    backgroundColor: buttonBackgroundColor,
                    borderWidth: 1.5,
                    borderColor: buttonBorderColor,
                    borderRadius: 10
                }}
                function={{
                    onPress: () => navigation.navigate("login")
                }} />
            <TextButton
                text="Have an account?"
                textStyle={{
                    fontFamily: AndroidFontFamily.roboto,
                    fontWeight: "normal",
                    fontStyle: "italic",
                    fontSize: 15,
                    textDecorationLine: "underline",
                    color: linkTextColor
                }}
                containerStyle={{ margin: { marginVertical: 5 } }}
                function={{ onPress: () => navigation.goBack() }} />
        </Container>
    );
}