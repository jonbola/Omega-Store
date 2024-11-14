import { BasicColors } from "@/assets/colors/basic_colors";
import { ThemeColors } from "@/assets/colors/theme_colors";
import { FontFamily } from "@/assets/fonts/android_fonts";
import { IconSources, ImageSources } from "@/assets/resources/resource_directories";
import { IconButton } from "@/assets/components/iconButton";
import ParentBox from "@/assets/components/parentBox";
import { TextBox } from "@/assets/components/textBox";
import { TextButton } from "@/assets/components/textButton";
import { TextField } from "@/assets/components/textField";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { navigateTo } from "@/assets/functions/navigateTo";

type LoginPageProps = {
    navigation: NativeStackNavigationProp<any>;
}

export default function LoginPage(props: LoginPageProps) {
    const blurColor = ThemeColors.blueGreen, focusedColor = ThemeColors.navyBlue;
    let [usernameFieldColor, setUsernameFieldColor] = useState(blurColor);
    let [passwordFieldColor, setPasswordFieldColor] = useState(blurColor);
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
            } case "password": {
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
            } default: {
                console.log("Error changeFieldColor function");
                break;
            }
        }
    }

    const hiddenEye = IconSources.ic_hidden_eye_110px, unhiddenEye = IconSources.ic_unhidden_eye_110px;
    let [hidden, setTextVision] = useState(true);
    let [eye, setEye] = useState(hiddenEye);
    function changeTextVision() {
        switch (hidden) {
            case true: {
                setTextVision(hidden = false);
                setEye(eye = unhiddenEye);
                break;
            }
            case false: {
                setTextVision(hidden = true);
                setEye(eye = hiddenEye);
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
                            justifyContent: "flex-start",
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
                                textColor: ThemeColors.blueGreen
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
                            text="Password"
                            textStyle={{
                                fontFamily: FontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                textColor: ThemeColors.blueGreen,
                            }}
                            align={{ margin: { marginTop: 10 } }} />
                        <ParentBox
                            alignChild={{
                                flexDirection: "row",
                                justifyContent: "flex-start",
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
                                    hideText: hidden
                                }} />
                            <IconButton
                                iconSource={eye}
                                boxStyle={{
                                    width: 30,
                                    height: 30,
                                    borderWidth: 1,
                                    borderRadius: 10
                                }}
                                function={{
                                    onPress: () => changeTextVision()
                                }}
                                align={{
                                    margin: { marginStart: 5 }
                                }} />
                        </ParentBox>
                    </ParentBox>
                    <ParentBox //Navigation section
                        alignChild={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        alignBox={{ margin: { marginVertical: 30 } }}>
                        <TextButton
                            text="LOGIN"
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
                                    pageName: "customer_frame"
                                })
                            }} />
                        <TextButton
                            text="Forget password?"
                            textStyle={{
                                fontFamily: FontFamily.roboto,
                                fontWeight: "normal",
                                fontStyle: "italic",
                                fontSize: 15,
                                decorationLine: "underline",
                                textColor: ThemeColors.navyBlue
                            }}
                            align={{ margin: { marginVertical: 5 } }} />
                        <TextButton
                            text="Don't have an account?"
                            textStyle={{
                                fontFamily: FontFamily.roboto,
                                fontWeight: "normal",
                                fontStyle: "italic",
                                fontSize: 15,
                                decorationLine: "underline",
                                textColor: ThemeColors.navyBlue
                            }}
                            align={{ margin: { marginVertical: 5 } }}
                            function={{
                                onPress: () => navigateTo({
                                    navigator: props.navigation,
                                    pageName: "signup_page"
                                })
                            }} />
                    </ParentBox>
                </ScrollView>
            </KeyboardAvoidingView>
        </ParentBox>
    );
}