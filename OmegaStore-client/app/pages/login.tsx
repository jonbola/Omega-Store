import React, { useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { RootNavigationProps, RootParams } from "../_layout";
import { container_styles } from "../utils/styles/container_style";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from "react-native";
import { Button, Icon, IconButton, Text, TextInput } from "react-native-paper";
import { Icons } from "@/assets/images/img-directories";
import { text_styles } from "../utils/styles/text_style";
import { ThemeColors } from "@/assets/colors/theme-colors";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useUserContext } from "@/data/providers/user";
import { AccountProvider, useAccountContext } from "@/data/providers/account";
import Account from "@/data/models/account";

type RouteProps = RouteProp<RootParams, "LogInPage">;

export default function LogInPage() {
    const navigation = useNavigation<RootNavigationProps>();
    const route = useRoute<RouteProps>();

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
};

function HeadSection({ navigation }: { navigation: RootNavigationProps }) {
    return (
        <View style={[container_styles.head_container, { justifyContent: "space-between", alignItems: "center" }]}>
            <IconButton icon="keyboard-backspace" size={hp(5)}
                onPress={() => navigation.navigate("UserLayout", { account: null })} />
            <View style={sub_styles.sub_head_container}>
                <Icon source={Icons.store_logo} size={hp(7)} />
                <View style={{ width: 20 }} />
                <Text style={[text_styles.header, { fontSize: hp(5) }]}>LOG IN</Text>
            </View>
            <View style={{ width: wp(5) }} />
        </View>
    );
};

function BodySection({ navigation }: { navigation: RootNavigationProps }) {
    const [accountNameText, setAccountNameText] = useState<string>("");
    const [passwordText, setPasswordText] = useState<string>("");
    const [accountNameFieldColor, setAccountNameFieldColor] = useState<string>(ThemeColors.blueGreen);
    const [passwordFieldColor, setPasswordFieldColor] = useState<string>(ThemeColors.blueGreen);
    const [securePasswordState, setSecurePasswordState] = useState<boolean>(true);
    const [sercurePasswordIcon, setSecurePasswordIcon] = useState<string>("eye-outline");
    const { setLoggedState } = useUserContext();
    const { accountList } = useAccountContext();

    return (
        <View style={[container_styles.body_container, { alignItems: "center" }]}>
            <TextInput mode="outlined" label="Account name / Email" placeholder="Type your account name / Email"
                value={accountNameText} onChangeText={(newText) => setAccountNameText(newText)}
                onFocus={() => setAccountNameFieldColor(ThemeColors.blueGrotto)} onBlur={() => setAccountNameFieldColor(ThemeColors.blueGreen)}
                style={sub_styles.text_input} outlineStyle={{ borderWidth: 3, borderRadius: 15, borderColor: accountNameFieldColor }} />
            <TextInput mode="outlined" label="Password" placeholder="Type your password"
                value={passwordText} onChangeText={(newText) => setPasswordText(newText)}
                onFocus={() => setPasswordFieldColor(ThemeColors.blueGrotto)} onBlur={() => setPasswordFieldColor(ThemeColors.blueGreen)}
                secureTextEntry={securePasswordState}
                right={<TextInput.Icon icon={sercurePasswordIcon} onPress={() => setSecureTextStatus(securePasswordState, setSecurePasswordState, setSecurePasswordIcon)} />}
                style={sub_styles.text_input} outlineStyle={{ borderWidth: 3, borderRadius: 15, borderColor: passwordFieldColor }} />
            <View style={{ height: 50 }} />
            <Button mode="contained" onPress={() => {
                const account = validatedAccount(accountList, accountNameText, passwordText);

                if (account) {
                    setLoggedState(true);
                    navigation.navigate("UserLayout", { account: account })
                }
            }}
                style={[sub_styles.text_button, { backgroundColor: ThemeColors.blueGrotto }]}>LOG IN</Button>
            <Button onPress={() => navigation.navigate("SignUpPage")}
                labelStyle={text_styles.link}
                style={sub_styles.text_button}>Don't have an account?</Button>
        </View>
    );
};

function setSecureTextStatus(state: boolean, setSecureTextState: (state: boolean) => void, setSecureTextIcon: (icon: string) => void) {
    if (state) {
        setSecureTextState(false);
        setSecureTextIcon("eye-off-outline");
    }
    else {
        setSecureTextState(true);
        setSecureTextIcon("eye-outline");
    }
};

function validatedAccount(accountList: Account[], accountName: string, password: string): Account | null {
    let existedAccount: Account | null = null;

    if (accountName == "" || password == "") {
        alert("Fields must not empty!");
    }
    else {
        existedAccount = accountList.find((account) => account._accountName === accountName) ?? null;

        if (!existedAccount || existedAccount._password != password || existedAccount._role == true) {
            alert("Account name or password is invalid!");
            return null;
        }
    }

    return existedAccount;
};
// function BottomSection(props: BottomSectionProps) {
//     const Navigation = useNavigation<NavigationProps>();
//     const { setLoggedState } = useUserContext();
//     const { accountList } = useAccountContext();

//     return (
//         <View style={{
//             flexGrow: 8, alignItems: "center",
//             flexDirection: "column", justifyContent: "flex-start"
//         }}>
//             <TouchableOpacity
//                 style={[TextButtonStyle.container, { width: 100, height: 50 }]}
//                 children={
//                     <Text
//                         style={TextButtonStyle.text}
//                         children="LOGIN" />
//                 }
//                 onPress={() => {
//                     if (props.accountNameText != null && props.accountNameText != "") {
//                         if (props.passwordText != null && props.passwordText != "") {
//                             const inputAccount = accountList.find(a => a._accountName === props.accountNameText);

//                             if (inputAccount != null) {
//                                 if (props.passwordText == inputAccount._password && inputAccount._role == false) {
//                                     const account = new Account(
//                                         inputAccount._id,
//                                         inputAccount._accountName,
//                                         inputAccount._password,
//                                         inputAccount._role,
//                                         inputAccount._purchases!,
//                                         inputAccount._accountInfo
//                                     );
//                                     Navigation.navigate("UserLayout", { account: account });
//                                     setLoggedState(true);
//                                 }
//                                 else {
//                                     alert("Invalid account name or password");
//                                 }
//                             }
//                             else {
//                                 alert("Account does not exist!");
//                             }
//                         }
//                         else {
//                             alert("Password field is not empty!");
//                         }
//                     }
//                     else {
//                         alert("Account name field is not empty!");
//                     }
//                 }} />
//             <TouchableOpacity
//                 style={{ marginTop: 10 }}
//                 children={
//                     <Text style={text_styles.link}
//                         children="Forgot password?"
//                         onPress={() => null} />
//                 } />
//             <TouchableOpacity
//                 style={{ marginTop: 10 }}
//                 children={
//                     <Text
//                         style={text_styles.link}
//                         children="Don't have an account?" />
//                 }
//                 onPress={() => Navigation.navigate("SignupPage")} />
//         </View>
//     );
// };

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