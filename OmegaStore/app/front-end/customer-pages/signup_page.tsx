import { BasicColors } from "@/assets/colors/basic_colors";
import { ThemeColors } from "@/assets/colors/theme_colors";
import { FontFamily } from "@/assets/fonts/android_fonts";
import { IconSources, ImageSources } from "@/assets/resources/resource_directories";
import { IconButton } from "@/assets/components/iconButton";
import ParentBox from "@/assets/components/parentBox";
import { TextBox } from "@/assets/components/textBox";
import { TextButton } from "@/assets/components/textButton";
import { TextField } from "@/assets/components/textField";
import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, ToastAndroid } from "react-native";
import { navigateTo } from "@/assets/functions/navigateTo";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type SignupPageProps = {
    navigation: NativeStackNavigationProp<any>;
}

export default function SignupPage(props: SignupPageProps) {
    const blurColor = ThemeColors.blueGreen, focusedColor = ThemeColors.navyBlue;
    let [usernameFieldColor, setUsernameFieldColor] = useState(blurColor);
    let [emailFieldColor, setEmailFieldColor] = useState(blurColor);
    let [passwordFieldColor, setPasswordFieldColor] = useState(blurColor);
    let [repeatPasswordFieldColor, setRepeatPasswordFieldColor] = useState(blurColor);
    function changeFieldColor(fieldName: string) {
        switch (fieldName) {
            case "username": {
                switch (usernameFieldColor) {
                    case blurColor: {
                        setUsernameFieldColor(usernameFieldColor = focusedColor);
                        break;
                    }
                    case focusedColor: {
                        setUsernameFieldColor(usernameFieldColor = blurColor);
                        break;
                    }
                }
                break;
            }
            case "email": {
                switch (emailFieldColor) {
                    case blurColor: {
                        setEmailFieldColor(emailFieldColor = focusedColor);
                        break;
                    }
                    case focusedColor: {
                        setEmailFieldColor(emailFieldColor = blurColor);
                        break;
                    }
                }
                break;
            }
            case "password": {
                switch (passwordFieldColor) {
                    case blurColor: {
                        setPasswordFieldColor(passwordFieldColor = focusedColor);
                        break;
                    }
                    case focusedColor: {
                        setPasswordFieldColor(passwordFieldColor = blurColor);
                        break;
                    }
                }
                break;
            }
            case "rePassword": {
                switch (repeatPasswordFieldColor) {
                    case blurColor: {
                        setRepeatPasswordFieldColor(repeatPasswordFieldColor = focusedColor);
                        break;
                    }
                    case focusedColor: {
                        setRepeatPasswordFieldColor(repeatPasswordFieldColor = blurColor);
                        break;
                    }
                }
                break;
            } default: {
                console.log("Error changeFieldColor function");
                break;
            }
        }
    }

    const hiddenEye = IconSources.ic_hidden_eye_110px, unhiddenEye = IconSources.ic_unhidden_eye_110px;
    let [passwordTextHidden, setPasswordTextVision] = useState(true);
    let [rePasswordTextHidden, setRePasswordTextVision] = useState(true);
    let [passwordEye, setPasswordEye] = useState(hiddenEye);
    let [rePasswordEye, setRePasswordEye] = useState(hiddenEye);
    function changeTextVision(eyeName: string) {
        switch (eyeName) {
            case "passwordEye": {
                {
                    switch (passwordTextHidden) {
                        case true: {
                            setPasswordTextVision(passwordTextHidden = false);
                            setPasswordEye(passwordEye = unhiddenEye);
                            break;
                        }
                        case false: {
                            setPasswordTextVision(passwordTextHidden = true);
                            setPasswordEye(passwordEye = hiddenEye);
                            break;
                        }
                    }
                }
                break;
            }
            case "rePasswordEye": {
                switch (rePasswordTextHidden) {
                    case true: {
                        setRePasswordTextVision(rePasswordTextHidden = false);
                        setRePasswordEye(rePasswordEye = unhiddenEye);
                        break;
                    }
                    case false: {
                        setRePasswordTextVision(rePasswordTextHidden = true);
                        setRePasswordEye(rePasswordEye = hiddenEye);
                        break;
                    }
                }
                break;
            }
        }
    }

    return (
        <ParentBox
            boxStyle={{
                height: "100%",
                backgroundColor: BasicColors.white
            }}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView>
                    <ParentBox //Logo section
                        alignBox={{
                            margin: { marginVertical: 30 }
                        }}>
                        <Image
                            source={ImageSources.img_store_logo_550px}
                            style={{
                                width: 100,
                                height: 100,
                                alignSelf: "center"
                            }} />
                    </ParentBox>
                    <ParentBox //Input section
                        alignChild={{
                            flexDirection: "column",
                            justifyContent: "flex-start"
                        }}
                        alignBox={{
                            margin: { marginHorizontal: 10 }
                        }}>
                        <TextBox
                            text="Username"
                            textStyle={{
                                fontFamily: FontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                textColor: ThemeColors.blueGreen,
                            }} />
                        <TextField
                            placeHolderStyle={{
                                placeHolderText: "Input username here",
                                placeHolderTextColor: BasicColors.gray,
                                padding: { paddingLeft: 10 }
                            }}
                            boxStyle={{
                                width: 250,
                                height: 30,
                                backgroundColor: BasicColors.white,
                                borderWidth: 1.5,
                                borderColor: usernameFieldColor,
                                borderRadius: 10
                            }}
                            function={{
                                onFocus: () => changeFieldColor("username"),
                                onBlur: () => changeFieldColor("username"),
                                autoCapitalize: "none",
                            }} />
                        <TextBox
                            text="Email"
                            textStyle={{
                                fontFamily: FontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                textColor: ThemeColors.blueGreen,
                            }}
                            align={{
                                margin: { marginTop: 10 }
                            }} />
                        <TextField
                            placeHolderStyle={{
                                placeHolderText: "Input email here",
                                placeHolderTextColor: BasicColors.gray,
                                padding: { paddingLeft: 10 }
                            }}
                            boxStyle={{
                                width: 250,
                                height: 30,
                                backgroundColor: BasicColors.white,
                                borderWidth: 1.5,
                                borderColor: emailFieldColor,
                                borderRadius: 10
                            }}
                            function={{
                                onFocus: () => changeFieldColor("email"),
                                onBlur: () => changeFieldColor("email"),
                                autoCapitalize: "none",
                            }} />
                        <TextBox
                            text="Password"
                            textStyle={{
                                fontFamily: FontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                textColor: ThemeColors.blueGreen,
                            }}
                            align={{
                                margin: { marginTop: 10 }
                            }} />
                        <ParentBox
                            alignChild={{
                                flexDirection: "row",
                                justifyContent: "flex-start"
                            }}>
                            <TextField
                                placeHolderStyle={{
                                    placeHolderText: "Input password here",
                                    placeHolderTextColor: BasicColors.gray,
                                    padding: { paddingLeft: 10 }
                                }}
                                boxStyle={{
                                    width: 250,
                                    height: 30,
                                    backgroundColor: BasicColors.white,
                                    borderWidth: 1.5,
                                    borderColor: passwordFieldColor,
                                    borderRadius: 10
                                }}
                                function={{
                                    onFocus: () => changeFieldColor("password"),
                                    onBlur: () => changeFieldColor("password"),
                                    autoCapitalize: "none",
                                    hideText: passwordTextHidden
                                }} />
                            <IconButton
                                iconSource={passwordEye}
                                boxStyle={{
                                    width: 30,
                                    height: 30,
                                    borderWidth: 1,
                                    borderRadius: 10
                                }}
                                align={{
                                    margin: { marginStart: 10 }
                                }}
                                function={{ onPress: () => changeTextVision("passwordEye") }} />
                        </ParentBox>
                        <TextBox
                            text="Repeat Password"
                            textStyle={{
                                fontFamily: FontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                textColor: ThemeColors.blueGreen,
                            }}
                            align={{
                                margin: { marginTop: 10 }
                            }} />
                        <ParentBox
                            alignChild={{
                                flexDirection: "row",
                                justifyContent: "flex-start"
                            }}>
                            <TextField
                                placeHolderStyle={{
                                    placeHolderText: "Repeat the password here",
                                    placeHolderTextColor: BasicColors.gray,
                                    padding: { paddingLeft: 10 },
                                }}
                                boxStyle={{
                                    width: 250,
                                    height: 30,
                                    backgroundColor: BasicColors.white,
                                    borderWidth: 1.5,
                                    borderColor: repeatPasswordFieldColor,
                                    borderRadius: 10
                                }}
                                function={{
                                    onFocus: () => changeFieldColor("rePassword"),
                                    onBlur: () => changeFieldColor("rePassword"),
                                    autoCapitalize: "none",
                                    hideText: rePasswordTextHidden
                                }} />
                            <IconButton
                                iconSource={rePasswordEye}
                                boxStyle={{
                                    width: 30,
                                    height: 30,
                                    borderWidth: 1,
                                    borderRadius: 10
                                }}
                                align={{
                                    margin: { marginStart: 10 }
                                }}
                                function={{ onPress: () => changeTextVision("rePasswordEye") }} />
                        </ParentBox>
                    </ParentBox>
                    <ParentBox
                        alignChild={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        alignBox={{
                            margin: { marginVertical: 30 }
                        }}>
                        <TextButton text="SIGN UP"
                            textStyle={{
                                textColor: ThemeColors.blueGrotto,
                                fontFamily: FontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 15
                            }}
                            boxStyle={{
                                width: 80,
                                height: 40,
                                backgroundColor: ThemeColors.babyBlue,
                                borderWidth: 1.5,
                                borderColor: ThemeColors.blueGreen,
                                borderRadius: 10
                            }}
                            function={{
                                onPress: () => navigateTo({
                                    navigator: props.navigation,
                                    pageName: "login_page"
                                })
                            }} />
                        <TextButton
                            text="Have an account?"
                            textStyle={{
                                fontFamily: FontFamily.roboto,
                                fontWeight: "normal",
                                fontStyle: "italic",
                                fontSize: 15,
                                decorationLine: "underline",
                                textColor: ThemeColors.navyBlue
                            }}
                            align={{
                                margin: { marginVertical: 5 }
                            }}
                            function={{
                                onPress: () => navigateTo({
                                    navigator: props.navigation,
                                    pageName: "login_page"
                                })
                            }} />
                    </ParentBox>
                </ScrollView>
            </KeyboardAvoidingView>
        </ParentBox>
    );
}