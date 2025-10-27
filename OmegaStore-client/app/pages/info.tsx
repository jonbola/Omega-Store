// import { BasicColors } from "@/assets/colors/basic-colors";
// import { blurColor, buttonBorderColor, focusedColor } from "@/assets/colors/component-colors";
// import { ThemeColors } from "@/assets/colors/theme-colors";
// import { Icons } from "@/assets/images/img-directories";
// import { TextButtonStyle } from "@/assets/styles/text-button-style";
// import { TextInputStyle } from "@/assets/styles/text-input-style";
// import { text_styles } from "@/assets/styles/text-style";
// import { genderList } from "@/assets/values/gender-list";
// import { nationList } from "@/assets/values/nation-list";
// import { useUserContext } from "@/data/providers/user";
// import { DrawerActions, RouteProp, useRoute } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useNavigation } from "expo-router";
// import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
// import { Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
// import { Text } from "react-native-paper";
// import { RootParams } from "../_layout";

// type NavigationProps = NativeStackNavigationProp<RootParams>;
// type RouteProps = RouteProp<RootParams, "UserLayout">;
// type HeadSectionProps = {
//     navigation: NavigationProps;
// };
// type AlterBodySectionProps = {
//     navigation: NavigationProps;
// };
// type BodySectionProps = {
//     route: RouteProps;
//     isEditing: boolean;
//     firstNameText: string;
//     setFirstNameText: (newText: string) => void;
//     lastNameText: string;
//     setLastNameText: (newText: string) => void;
//     emailText: string;
//     setEmailText: (newText: string) => void;
//     phoneNumberText: string;
//     setPhoneNumberText: (newText: string) => void;
//     genderValue: string;
//     setGenderValue: (newValue: string) => void;
//     nationValue: string;
//     setNationValue: (newValue: string) => void;
//     birthDateText: string;
//     setBirthDateText: (newText: string) => void;
// };
// type BottomSectionProps = {
//     navigation: NavigationProps;
//     isEditing: boolean;
//     setEditingState: (state: boolean) => void;
//     firstNameText: string;
//     setFirstNameText: (newText: string) => void;
//     lastNameText: string;
//     setLastNameText: (newText: string) => void;
//     emailText: string;
//     setEmailText: (newText: string) => void;
//     phoneNumberText: string;
//     setPhoneNumberText: (newText: string) => void;
//     genderValue: string;
//     setGenderValue: (newValue: string) => void;
//     nationValue: string;
//     setNationValue: (newValue: string) => void;
//     birthDateText: string;
//     setBirthDateText: (newText: string) => void;
// };

// export default function DetailPage() {
//     const navigation = useNavigation<NavigationProps>();
//     const route = useRoute<RouteProps>();
//     const [isEditing, setEditingStatus] = useState(false);
//     const [firstNameText, setFirstNameText] = useState(route.params.account?._accountInfo._firstName);
//     const [lastNameText, setLastNameText] = useState(route.params.account?._accountInfo._lastName);
//     const [emailText, setEmailText] = useState(route.params.account?._accountInfo._email);
//     const [phoneNumberText, setPhoneNumberText] = useState(route.params.account?._accountInfo._phoneNumber);
//     const [genderValue, setGenderValue] = useState(genderList.find(g => g.value === route.params.account?._accountInfo._gender)?.value);
//     const [nationValue, setNationValue] = useState(nationList.find(n => n.value === route.params.account?._accountInfo._nation)?.value);
//     const [birthDateText, setBirthDateText] = useState(route.params.account?._accountInfo._birthDate);
//     const { isLogged } = useUserContext();

//     return (
//         <View style={{
//             flex: 1,
//             backgroundColor: BasicColors.white, padding: 10
//         }}>
//             <KeyboardAvoidingView
//                 style={{ flexGrow: 1 }}
//                 behavior={Platform.OS == "ios" ? "padding" : "height"}>
//                 <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//                     <HeadSection navigation={navigation} />
//                     {!isLogged ?
//                         <AlterBodySection navigation={navigation} />
//                         :
//                         <View style={{ flex: 9 }}>
//                             <BodySection
//                                 route={route} isEditing={isEditing}
//                                 firstNameText={firstNameText!} setFirstNameText={setFirstNameText}
//                                 lastNameText={lastNameText!} setLastNameText={setLastNameText}
//                                 emailText={emailText!} setEmailText={setEmailText}
//                                 phoneNumberText={phoneNumberText!} setPhoneNumberText={setPhoneNumberText}
//                                 genderValue={genderValue!} setGenderValue={setGenderValue}
//                                 nationValue={nationValue!} setNationValue={setNationValue}
//                                 birthDateText={birthDateText!} setBirthDateText={setBirthDateText} />
//                             <BottomSection
//                                 navigation={navigation} isEditing={isEditing}
//                                 setEditingState={setEditingStatus}
//                                 firstNameText={firstNameText!} setFirstNameText={setFirstNameText}
//                                 lastNameText={lastNameText!} setLastNameText={setLastNameText}
//                                 emailText={emailText!} setEmailText={setEmailText}
//                                 phoneNumberText={phoneNumberText!} setPhoneNumberText={setPhoneNumberText}
//                                 genderValue={genderValue!} setGenderValue={setGenderValue}
//                                 nationValue={nationValue!} setNationValue={setNationValue}
//                                 birthDateText={birthDateText!} setBirthDateText={setBirthDateText} />
//                         </View>
//                     }
//                 </ScrollView>
//             </KeyboardAvoidingView>
//         </View>
//     );
// };

// function HeadSection(props: HeadSectionProps) {
//     return (
//         <View style={{
//             flexDirection: "row", justifyContent: "space-between", alignItems: "center",
//             marginVertical: 10
//         }}>
//             <TouchableOpacity
//                 style={{ flex: 1 }}
//                 children={
//                     <Image
//                         style={{ width: 20, height: 20 }}
//                         source={Icons.drawer} />
//                 }
//                 onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer)} />
//             <Text style={text_styles.header}
//                 children="ACCOUNT" />
//             <View style={{ flex: 1 }} />
//         </View>
//     );
// };

// function BodySection(props: BodySectionProps) {
//     const [firstnameFieldColor, setFirstnameFieldColor] = useState(blurColor);
//     const [lastnameFieldColor, setLastnameFieldColor] = useState(blurColor);
//     const [emailFieldColor, setEmailFieldColor] = useState(blurColor);
//     const [phoneNumberFieldColor, setPhoneNumberFieldColor] = useState(blurColor);
//     const [genderFieldColor, setGenderFieldColor] = useState(blurColor);
//     const [nationFieldColor, setNationFieldColor] = useState(blurColor);
//     const [genderBoxOpen, setGenderBoxOpen] = useState(false);
//     const [nationBoxOpen, setNationBoxOpen] = useState(false);

//     return (
//         <View style={{
//             height: "auto",
//             flexDirection: "column", justifyContent: "flex-start"
//         }}>
//             <View //Item container 1
//                 style={{
//                     flexDirection: "row", justifyContent: "space-between",
//                     marginVertical: 10
//                 }}>
//                 <TouchableOpacity
//                     style={{
//                         flex: 1, alignItems: "center"
//                     }}
//                     children={
//                         <Image
//                             style={{
//                                 width: 100, height: 100,
//                                 borderColor: buttonBorderColor,
//                                 borderWidth: 1.5, borderRadius: 15,
//                             }}
//                             source={Icons.user} />
//                     } />
//                 <View style={{
//                     flex: 1,
//                     flexDirection: "column", justifyContent: "flex-start",
//                     alignItems: "center"
//                 }}>
//                     <Text
//                         style={text_styles.normal}
//                         children={props.route.params.account?._accountName} />
//                     <View style={{
//                         flexDirection: "row", justifyContent: "space-between",
//                         marginTop: 5
//                     }}>
//                         <View style={{
//                             borderColor: ThemeColors.blueGreen,
//                             borderWidth: 1.5, borderRadius: 10,
//                             padding: 5
//                         }}>
//                             <Text
//                                 style={[
//                                     text_styles.normal,
//                                     { fontSize: 15, color: BasicColors.gray }]}
//                                 children={new Intl.DateTimeFormat(
//                                     "en-US", {
//                                     day: "2-digit",
//                                     month: "2-digit",
//                                     year: "numeric",
//                                     timeZone: "Asia/Ho_Chi_Minh"
//                                 }).format(new Date(props.birthDateText))
//                                 } />
//                         </View>
//                         {
//                             props.isEditing ?
//                                 <TouchableOpacity
//                                     style={{ alignSelf: "center", marginStart: 10 }}
//                                     children={
//                                         <Image
//                                             style={{ width: 25, height: 25 }}
//                                             source={Icons.calendar} />
//                                     } />
//                                 :
//                                 <View style={{ width: 25, height: 25 }} />
//                         }
//                     </View>
//                 </View>
//             </View>
//             <View //Item container 2
//                 style={{
//                     flex: 1,
//                     flexDirection: "row", justifyContent: "space-between"
//                 }}>
//                 <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
//                     <Text
//                         style={text_styles.title}
//                         children="Firstname" />
//                     <TextInput
//                         value={props.firstNameText}
//                         style={[TextInputStyle.w150, { borderColor: firstnameFieldColor, color: BasicColors.gray }]}
//                         inputMode="text"
//                         autoCapitalize="words"
//                         editable={props.isEditing}
//                         onChangeText={(newText) => props.setFirstNameText(newText)}
//                         onBlur={() => setFirstnameFieldColor(blurColor)}
//                         onFocus={() => setFirstnameFieldColor(focusedColor)} />
//                 </View>
//                 <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
//                     <Text
//                         style={text_styles.title}
//                         children="Lastname" />
//                     <TextInput
//                         value={props.lastNameText}
//                         style={[TextInputStyle.w150, { borderColor: lastnameFieldColor, color: BasicColors.gray }]}
//                         inputMode="text"
//                         autoCapitalize="words"
//                         editable={props.isEditing}
//                         onChangeText={(newText) => props.setLastNameText(newText)}
//                         onBlur={() => setLastnameFieldColor(blurColor)}
//                         onFocus={() => setLastnameFieldColor(focusedColor)} />
//                 </View>
//             </View>
//             <View //Item container 3
//                 style={{
//                     flex: 1,
//                     flexDirection: "row", justifyContent: "space-between"
//                 }}>
//                 <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
//                     <Text
//                         style={text_styles.title}
//                         children="Email" />
//                     <TextInput
//                         value={props.emailText}
//                         style={[TextInputStyle.w150, { borderColor: emailFieldColor, color: BasicColors.gray }]}
//                         inputMode="email"
//                         autoCapitalize="none"
//                         editable={props.isEditing}
//                         onChangeText={(newText) => props.setEmailText(newText)}
//                         onBlur={() => setEmailFieldColor(blurColor)}
//                         onFocus={() => setEmailFieldColor(focusedColor)} />
//                 </View>
//                 <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
//                     <Text
//                         style={text_styles.title}
//                         children="Phone" />
//                     <TextInput
//                         value={props.phoneNumberText}
//                         style={[TextInputStyle.w150, { borderColor: phoneNumberFieldColor, color: BasicColors.gray }]}
//                         maxLength={11}
//                         inputMode="numeric"
//                         autoCapitalize="none"
//                         editable={props.isEditing}
//                         onChangeText={(newText) => props.setPhoneNumberText(newText)}
//                         onBlur={() => setPhoneNumberFieldColor(blurColor)}
//                         onFocus={() => setPhoneNumberFieldColor(focusedColor)} />
//                 </View>
//             </View>
//             <View //Item container 4
//                 style={{
//                     flex: 1, flexDirection: "row"
//                 }}>
//                 <View style={{
//                     flex: 2,
//                     flexDirection: "column", justifyContent: "flex-start"
//                 }}>
//                     <Text
//                         style={text_styles.title}
//                         children="Gender" />
//                     <DropDownPicker
//                         listMode="MODAL"
//                         placeholderStyle={{ color: BasicColors.gray }}
//                         text_styles={{ color: BasicColors.gray }}
//                         style={{
//                             borderColor: genderFieldColor,
//                             borderWidth: 1.5, borderRadius: 10,
//                         }}
//                         dropDownContainerStyle={{ borderColor: genderFieldColor, borderWidth: 1.5 }}
//                         open={genderBoxOpen}
//                         setOpen={setGenderBoxOpen}
//                         value={props.genderValue}
//                         setValue={props.setGenderValue as Dispatch<SetStateAction<string>>}
//                         items={genderList}
//                         disabled={!props.isEditing}
//                         onOpen={() => setGenderFieldColor(focusedColor)}
//                         onClose={() => setGenderFieldColor(blurColor)} />
//                 </View>
//                 <View style={{ flex: 1 }} />
//                 <View style={{
//                     flex: 3,
//                     flexDirection: "column", justifyContent: "flex-start"
//                 }}>
//                     <Text
//                         style={text_styles.title}
//                         children="Nation" />
//                     <DropDownPicker
//                         listMode="MODAL"
//                         placeholder={nationList.find(n => n.value === props.route.params.account?._accountInfo._nation)?.label}
//                         searchPlaceholder="Type nation to search"
//                         placeholderStyle={{ color: BasicColors.gray }}
//                         text_styles={{ color: BasicColors.gray }}
//                         style={{
//                             borderColor: nationFieldColor,
//                             borderWidth: 1.5, borderRadius: 10,
//                         }}
//                         dropDownContainerStyle={{ borderColor: nationFieldColor, borderWidth: 1.5 }}
//                         searchContainerStyle={{ borderColor: nationFieldColor, borderBottomWidth: 1.5 }}
//                         searchTextInputStyle={{ borderColor: nationFieldColor, borderWidth: 1.5 }}
//                         searchPlaceholderTextColor={BasicColors.gray}
//                         searchTextInputProps={{ multiline: true }}
//                         searchable={true}
//                         open={nationBoxOpen}
//                         setOpen={setNationBoxOpen}
//                         value={props.nationValue}
//                         setValue={props.setNationValue as Dispatch<SetStateAction<string>>}
//                         items={nationList}
//                         disabled={!props.isEditing}
//                         onOpen={() => setNationFieldColor(focusedColor)}
//                         onClose={() => setNationFieldColor(blurColor)} />
//                 </View>
//             </View>
//         </View>
//     );
// };

// function BottomSection(props: BottomSectionProps) {
//     const [currentFirstNameText, setCurrentFirstNameText] = useState("");
//     const [currentLastNameText, setCurrentLastNameText] = useState("");
//     const [currentEmailText, setCurrentEmailText] = useState("");
//     const [currentPhoneNumberText, setCurrentPhoneNumberText] = useState("");
//     const [currentGenderValue, setCurrentGenderValue] = useState("");
//     const [currentNationValue, setCurrentNationValue] = useState("");
//     const [currentBirthDateText, setCurrentBirthDateText] = useState("");
//     const { setLoggedState } = useUserContext();

//     useEffect(() => {
//         updateTextValue();
//     }, []);

//     function updateTextValue() {
//         setCurrentFirstNameText(props.firstNameText);
//         setCurrentLastNameText(props.lastNameText);
//         setCurrentEmailText(props.emailText);
//         setCurrentPhoneNumberText(props.phoneNumberText);
//         setCurrentGenderValue(props.genderValue);
//         setCurrentNationValue(props.nationValue);
//         setCurrentBirthDateText(props.birthDateText);
//     };

//     function revertTextValue() {
//         props.setFirstNameText(currentFirstNameText);
//         props.setLastNameText(currentLastNameText);
//         props.setEmailText(currentEmailText);
//         props.setPhoneNumberText(currentPhoneNumberText);
//         props.setGenderValue(currentGenderValue);
//         props.setNationValue(currentNationValue);
//         props.setBirthDateText(currentBirthDateText);
//     };

//     return (
//         <View style={{ height: "auto", marginVertical: 10 }}>
//             {
//                 props.isEditing ?
//                     <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//                         <TouchableOpacity
//                             style={{ marginHorizontal: 20 }}
//                             children={
//                                 <Image
//                                     style={{ width: 30, height: 30 }}
//                                     source={Icons.accept} />
//                             }
//                             onPress={() => {
//                                 updateTextValue();
//                                 props.setEditingState(false)
//                             }} />
//                         <TouchableOpacity
//                             style={{ marginHorizontal: 20 }}
//                             children={
//                                 <Image
//                                     style={{ width: 20, height: 20 }}
//                                     source={Icons.cancel} />
//                             }
//                             onPress={() => {
//                                 revertTextValue();
//                                 props.setEditingState(false);
//                             }
//                             } />
//                     </View>
//                     :
//                     <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//                         <TouchableOpacity
//                             style={TextButtonStyle.container}
//                             children={
//                                 <Text
//                                     style={TextButtonStyle.text}
//                                     children="EDIT ACCOUNT" />
//                             }
//                             onPress={() => props.setEditingState(true)} />
//                         <TouchableOpacity
//                             style={[TextButtonStyle.container, { marginVertical: 10 }]}
//                             children={
//                                 <Text
//                                     style={TextButtonStyle.text}
//                                     children="CHANGE PASSWORD" />
//                             } />
//                         <TouchableOpacity
//                             style={TextButtonStyle.container}
//                             children={
//                                 <Text
//                                     style={TextButtonStyle.text}
//                                     children="SIGN OUT" />
//                             }
//                             onPress={() => {
//                                 setLoggedState(false);
//                                 props.navigation.push("UserLayout", { account: null });
//                             }} />
//                     </View>
//             }
//         </View>
//     );
// };

// function AlterBodySection(props: AlterBodySectionProps) {
//     return (
//         <View style={{
//             flex: 9,
//             flexDirection: "column", justifyContent: "center", alignItems: "center"
//         }}>
//             <Text
//                 style={[
//                     text_styles.title, {
//                         textAlign: "center", marginVertical: 10
//                     }]}
//                 children="Login to access this feature" />
//             <TouchableOpacity
//                 style={TextButtonStyle.container}
//                 children={
//                     <Text
//                         style={TextButtonStyle.text}
//                         children="LOGIN" />
//                 }
//                 onPress={() => props.navigation.navigate("LoginPage")} />
//         </View>
//     );
// };

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { KeyboardAvoidingView, KeyboardTypeOptions, Platform, ScrollView, StyleSheet, View } from "react-native";
import { container_styles } from "../utils/styles/container_style";
import { Button, Icon, IconButton, Text, TextInput } from "react-native-paper";
import { RootNavigationProps } from "../_layout";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Icons } from "@/assets/images/img-directories";
import { text_styles } from "../utils/styles/text_style";
import { ThemeColors } from "@/assets/colors/theme-colors";
import { genderList } from "@/assets/values/gender-list";
import { nationList } from "@/assets/values/nation-list";
import { useUserContext } from "@/data/providers/user";
import DropDownPicker, { ItemType, ValueType } from "react-native-dropdown-picker";

type HeadSectionProps = {
    navigation: RootNavigationProps;
    isLogged: boolean;
    isEditing: boolean;
    setEditingState: (state: boolean) => void;
};
type BodySectionProps = {
    navigation: RootNavigationProps;
    isLogged: boolean;
    isEditing: boolean;
    setEditingState: (state: boolean) => void;
};

export default function InfoPage() {
    const { isLogged } = useUserContext();
    const [isEditing, setEditingState] = useState<boolean>(false);
    const navigation = useNavigation<RootNavigationProps>();

    return (
        <KeyboardAvoidingView
            style={container_styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <ScrollView>
                <HeadSection navigation={navigation} isLogged={isLogged}
                    isEditing={isEditing} setEditingState={setEditingState} />
                <BodySection navigation={navigation} isLogged={isLogged}
                    isEditing={isEditing} setEditingState={setEditingState} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

function HeadSection(props: HeadSectionProps) {
    return (
        <View style={[container_styles.head_container, { justifyContent: "space-between", alignItems: "center" }]}>
            <IconButton icon="menu" size={hp(5)}
                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer)} />
            <View style={sub_styles.sub_head_container}>
                <Icon source={Icons.store_logo} size={hp(7)} />
                <View style={{ width: 20 }} />
                <Text style={[text_styles.header, { fontSize: hp(5) }]}>INFO</Text>
            </View>
            {props.isLogged ?
                <IconButton icon="cog" size={hp(5)}
                    onPress={() => props.setEditingState(!props.isEditing)} />
                :
                <View style={{ width: wp(5) }} />}
        </View>
    );
};

function BodySection(props: BodySectionProps) {
    const [firstNameText, setFirstNameText] = useState<string>("");
    const [lastNameText, setLastNameText] = useState<string>("");
    const [phoneNumberText, setPhoneNumberText] = useState<string>("");
    const [genderValue, setGenderValue] = useState<ValueType>("-");
    const [nationValue, setNationValue] = useState<ValueType>("-");
    const [firstnameFieldColor, setFirstnameFieldColor] = useState<string>(ThemeColors.blueGreen);
    const [lastnameFieldColor, setLastnameFieldColor] = useState<string>(ThemeColors.blueGreen);
    const [phoneNumberFieldColor, setPhoneNumberFieldColor] = useState<string>(ThemeColors.blueGreen);
    const [genderBoxOpen, setGenderBoxOpen] = useState<boolean>(false);
    const [nationBoxOpen, setNationBoxOpen] = useState<boolean>(false);

    return (
        <View>
            {props.isLogged ?
                < View style={container_styles.body_container} >
                    <View style={sub_styles.sub_row_body_container}>
                        <IconButton icon="account" size={hp(10)} style={{ borderWidth: 2, borderColor: ThemeColors.blueGrotto }} />
                        <View style={sub_styles.sub_column_body_container}>
                            <Text style={sub_styles.title_text}>Account name</Text>
                            <Text style={sub_styles.normal_text}>Email</Text>
                        </View>
                    </View>
                    <View style={{ height: 10 }} />
                    <View style={sub_styles.sub_row_body_container}>
                        <Input title="First Name" textInput={{
                            label: "First name", value: firstNameText, onChangeText: setFirstNameText,
                            borderColor: firstnameFieldColor, setFieldColor: setFirstnameFieldColor,
                            disabled: !props.isEditing
                        }} />
                        <Input title="Last Name" textInput={{
                            label: "Last name", value: lastNameText, onChangeText: setLastNameText,
                            borderColor: lastnameFieldColor, setFieldColor: setLastnameFieldColor,
                            disabled: !props.isEditing
                        }} />
                    </View>
                    <View style={{ height: 10 }} />
                    <View style={sub_styles.sub_row_body_container}>
                        <Input title="Phone Number" textInput={{
                            label: "Phone number", value: phoneNumberText, onChangeText: setPhoneNumberText,
                            borderColor: phoneNumberFieldColor, setFieldColor: setPhoneNumberFieldColor,
                            keyboardType: "phone-pad", disabled: !props.isEditing
                        }} />
                        <View style={[sub_styles.sub_row_body_container, { width: wp(30), justifyContent: "center" }]}>
                            <Text style={[sub_styles.normal_text, { alignSelf: "center" }]}>Birth date</Text>
                            {
                                props.isEditing ?
                                    <IconButton icon="calendar-month-outline" style={{ alignSelf: "center" }} />
                                    :
                                    null
                            }
                        </View>
                    </View>
                    <View style={{ height: 10 }} />
                    <View style={sub_styles.sub_row_body_container}>
                        <Dropdown title="Gender" dropdown={{
                            items: genderList, value: genderValue, setValue: setGenderValue,
                            open: genderBoxOpen, setOpen: setGenderBoxOpen, disabled: !props.isEditing
                        }} />
                        <Dropdown title="Nation" dropdown={{
                            searchable: true, searchPlaceholder: "Search your nation",
                            items: nationList, value: nationValue, setValue: setNationValue,
                            open: nationBoxOpen, setOpen: setNationBoxOpen, disabled: !props.isEditing
                        }} />
                    </View>
                    {
                        props.isEditing ?
                            <View style={sub_styles.sub_row_body_container}>
                                <IconButton mode="contained-tonal" icon="check" size={hp(7)}
                                    onPress={() => props.setEditingState(!props.isEditing)}
                                    style={{ backgroundColor: ThemeColors.babyBlue }} iconColor={ThemeColors.navyBlue} />
                                <IconButton mode="contained-tonal" icon="close" size={hp(7)}
                                    onPress={() => props.setEditingState(!props.isEditing)}
                                    style={{ backgroundColor: ThemeColors.babyBlue }} iconColor={ThemeColors.navyBlue} />
                            </View>
                            :
                            null
                    }
                </View >
                :
                <BlankContainer navigation={props.navigation} />
            }
        </View>
    );
};

function BlankContainer({ navigation }: { navigation: RootNavigationProps }) {
    return (
        <View style={[container_styles.container, { alignItems: "center", marginVertical: hp(20) }]}>
            <Text style={[text_styles.normal, { fontSize: hp(3) }]}>LOG IN TO USE THIS FEATURE</Text>
            <View style={{ height: 10 }} />
            <Button mode="contained"
                onPress={() => navigation.navigate("LogInPage")}
                style={{ backgroundColor: ThemeColors.blueGrotto }}>LOG IN</Button>
        </View>
    );
}

type InputProps = {
    title: string;
    textInput: {
        label: string;
        value: string;
        onChangeText: (newText: string) => void;
        borderColor: string;
        setFieldColor: (newValue: string) => void;
        keyboardType?: KeyboardTypeOptions | undefined;
        disabled: boolean;
    };
};

function Input(props: InputProps) {
    return (
        <View>
            <Text style={{ fontSize: hp(2.5), fontWeight: "bold", color: ThemeColors.blueGrotto }}>{props.title}</Text>
            <TextInput mode="outlined" label={props.textInput.label} placeholder={`Search your ${props.textInput.label.toLowerCase()}`}
                value={props.textInput.value} onChangeText={props.textInput.onChangeText}
                onFocus={() => props.textInput.setFieldColor(ThemeColors.blueGrotto)} onBlur={() => props.textInput.setFieldColor(ThemeColors.blueGreen)}
                keyboardType={props.textInput.keyboardType} disabled={props.textInput.disabled}
                outlineStyle={{ borderWidth: 3, borderColor: props.textInput.borderColor, borderRadius: 15 }} style={{ width: wp(30) }} />
        </View>
    );
};

type DropdownProps = {
    title: string;
    dropdown: {
        searchable?: boolean;
        searchPlaceholder?: string;
        items: ItemType<string | number | boolean>[];
        value: ValueType;
        setValue: Dispatch<SetStateAction<ValueType>>;
        open: boolean;
        setOpen: Dispatch<SetStateAction<boolean>>;
        disabled: boolean;
    };
};

function Dropdown(props: DropdownProps) {
    return (
        <View>
            <Text style={{ fontSize: hp(2.5), fontWeight: "bold", color: ThemeColors.blueGrotto }}>{props.title}</Text>
            <DropDownPicker listMode="MODAL" multiple={false} disabled={props.dropdown.disabled}
                searchable={props.dropdown.searchable} searchPlaceholder={props.dropdown.searchPlaceholder}
                items={props.dropdown.items} value={props.dropdown.value} setValue={(newValue) => props.dropdown.setValue(newValue)}
                open={props.dropdown.open} setOpen={(newState) => props.dropdown.setOpen(newState)}
                style={{ borderWidth: 3, borderColor: ThemeColors.blueGreen }} containerStyle={{ width: wp(30) }} />
        </View>
    );
};

const sub_styles = StyleSheet.create({
    sub_head_container: {
        flexDirection: "row",
        alignItems: "center"
    },
    sub_column_body_container: {
        flexDirection: "column"
    },
    sub_row_body_container: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    title_text: {
        fontSize: hp(4),
        color: ThemeColors.navyBlue
    },
    normal_text: {
        fontSize: hp(3),
        color: ThemeColors.blueGreen
    }
});