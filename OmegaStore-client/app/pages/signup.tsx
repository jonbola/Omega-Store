import React, { useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { RootNavigationProps } from "../_layout";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from "react-native";
import { container_styles } from "../utils/styles/container_style";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, IconButton, Text, TextInput } from "react-native-paper";
import { Icons } from "@/assets/images/img-directories";
import { text_styles } from "../utils/styles/text_style";
import { ThemeColors } from "@/assets/colors/theme-colors";
import { AccountProvider } from "@/data/providers/account";
import { DrawerNavigationProps } from "./user-layout";

export default function SignUpPage() {
    const navigation = useNavigation<RootNavigationProps>();

    return (
        <AccountProvider>
            <KeyboardAvoidingView
                style={container_styles.container}
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView>
                    <HeadSection navigation={navigation} />
                    <BodySection navigation={navigation} />
                </ScrollView>
            </KeyboardAvoidingView>
        </AccountProvider>
    );
}

function HeadSection({ navigation }: { navigation: RootNavigationProps }) {
    return (
        <View style={[container_styles.head_container, { justifyContent: "space-between", alignItems: "center" }]}>
            <IconButton icon="keyboard-backspace" size={hp(5)}
                onPress={() => navigation.navigate("LogInPage")} />
            <View style={sub_styles.sub_head_container}>
                <Icon source={Icons.store_logo} size={hp(7)} />
                <View style={{ width: 20 }} />
                <Text style={[text_styles.header, { fontSize: hp(5) }]}>SIGN UP</Text>
            </View>
            <View style={{ width: wp(5) }} />
        </View>
    );
};

function BodySection({ navigation }: { navigation: RootNavigationProps }) {
    const nav = useNavigation<DrawerNavigationProps>();
    const [accountNameText, setAccountNameText] = useState<string>("");
    const [emailText, setEmailText] = useState<string>("");
    const [passwordText, setPasswordText] = useState<string>("");
    const [confirmPasswordText, setConfirmPasswordText] = useState<string>("");
    const [accountNameFieldColor, setAccountNameFieldColor] = useState<string>(ThemeColors.blueGreen);
    const [emailFieldColor, setEmailFieldColor] = useState<string>(ThemeColors.blueGreen);
    const [passwordFieldColor, setPasswordFieldColor] = useState<string>(ThemeColors.blueGreen);
    const [confirmPasswordFieldColor, setConfirmPasswordFieldColor] = useState<string>(ThemeColors.blueGreen)
    const [securePasswordState, setSecurePasswordState] = useState<boolean>(true);
    const [sercurePasswordIcon, setSecurePasswordIcon] = useState<string>("eye-outline");
    const [secureConfirmPasswordState, setSecureConfirmPasswordState] = useState<boolean>(true);
    const [secureConfirmPasswordIcon, setSecureConfirmPasswordIcon] = useState<string>("eye-outline");

    return (
        <View style={[container_styles.body_container, { alignItems: "center" }]}>
            <TextInput mode="outlined" label="Account name" placeholder="Type your account name"
                value={accountNameText} onChangeText={(newText) => setAccountNameText(newText)}
                onFocus={() => setAccountNameFieldColor(ThemeColors.blueGrotto)} onBlur={() => setAccountNameFieldColor(ThemeColors.blueGreen)}
                style={sub_styles.text_input} outlineStyle={{ borderWidth: 3, borderRadius: 15, borderColor: accountNameFieldColor }} />
            <TextInput mode="outlined" label="Email" placeholder="Type your email"
                value={emailText} onChangeText={(newText) => setEmailText(newText)}
                onFocus={() => setEmailFieldColor(ThemeColors.blueGrotto)} onBlur={() => setEmailFieldColor(ThemeColors.blueGreen)}
                style={sub_styles.text_input} outlineStyle={{ borderWidth: 3, borderRadius: 15, borderColor: emailFieldColor }} />
            <TextInput mode="outlined" label="Password" placeholder="Type your password"
                value={passwordText} onChangeText={(newText) => setPasswordText(newText)}
                onFocus={() => setPasswordFieldColor(ThemeColors.blueGrotto)} onBlur={() => setPasswordFieldColor(ThemeColors.blueGreen)}
                secureTextEntry={securePasswordState}
                right={<TextInput.Icon icon={sercurePasswordIcon} onPress={() => setSecureTextStatus(securePasswordState, setSecurePasswordState, setSecurePasswordIcon)} />}
                style={sub_styles.text_input} outlineStyle={{ borderWidth: 3, borderRadius: 15, borderColor: passwordFieldColor }} />
            <TextInput mode="outlined" label="Confirm password" placeholder="Type your confirm password"
                value={confirmPasswordText} onChangeText={(newText) => setConfirmPasswordText(newText)}
                onFocus={() => setConfirmPasswordFieldColor(ThemeColors.blueGrotto)} onBlur={() => setConfirmPasswordFieldColor(ThemeColors.blueGreen)}
                secureTextEntry={secureConfirmPasswordState}
                right={<TextInput.Icon icon={secureConfirmPasswordIcon} onPress={() => setSecureTextStatus(secureConfirmPasswordState, setSecureConfirmPasswordState, setSecureConfirmPasswordIcon)} />}
                style={sub_styles.text_input} outlineStyle={{ borderWidth: 3, borderRadius: 15, borderColor: confirmPasswordFieldColor }} />
            <View style={{ height: 50 }} />
            <Button mode="contained" onPress={() => navigation.navigate("LogInPage")}
                style={[sub_styles.text_button, { backgroundColor: ThemeColors.blueGrotto }]}>SIGN UP</Button>
            <Button onPress={() => navigation.goBack()}
                labelStyle={text_styles.link}
                style={sub_styles.text_button}>Already have an account?</Button>
        </View>
    );
};

function setSecureTextStatus(state: boolean,
    setSecureTextState: (state: boolean) => void, setSecureTextIcon: (icon: string) => void) {
    if (state) {
        setSecureTextState(false);
        setSecureTextIcon("eye-off-outline");
    }
    else {
        setSecureTextState(true);
        setSecureTextIcon("eye-outline");
    }
}

const sub_styles = StyleSheet.create({
    sub_head_container: {
        flexDirection: "row",
        alignItems: "center"
    },
    text_input: {
        width: wp(70)
    },
    text_button: {
        alignSelf: "center",
        width: wp(30)
    }
});