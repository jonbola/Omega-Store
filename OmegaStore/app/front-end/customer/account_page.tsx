import { RootParamsList } from "@/app/_layout";
import { BasicColors } from "@/assets/colors/basic_colors";
import { ThemeColors } from "@/assets/colors/theme_colors";
import { IconSources } from "@/assets/resources/resource_directories";
import { blurColor, buttonBorderColor, focusedColor, } from "@/assets/values/componentColor";
import { textButtonStyle, textInputStyle, textStyle } from "@/assets/values/styleSheet";
import { genderList, nationList } from "@/assets/values/valueList";
import { DrawerActions, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

type NavigationProps = NativeStackNavigationProp<RootParamsList, "CustomerFrame">;
type RouteProps = RouteProp<RootParamsList["CustomerFrame"], "AccountPage">;

export default function AccountPage() {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<RouteProps>();
    const [isEditting, setEditingStatus] = useState(false);

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
                flexDirection: "row", justifyContent: "space-between",
                alignItems: "center"
            }}>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    children={
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={IconSources.ic_drawer} />
                    }
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} />
                <Text style={textStyle.header}
                    children="ACCOUNT" />
                <View style={{ flex: 1 }} />
            </View>
        );
    }

    function BodySection() {
        const [firstnameFieldColor, setFirstnameFieldColor] = useState(blurColor);
        const [lastnameFieldColor, setLastnameFieldColor] = useState(blurColor);
        const [emailFieldColor, setEmailFieldColor] = useState(blurColor);
        const [phoneNumberFieldColor, setPhoneNumberFieldColor] = useState(blurColor);
        const [genderFieldColor, setGenderFieldColor] = useState(blurColor);
        const [nationFieldColor, setNationFieldColor] = useState(blurColor);

        const [genderBoxOpen, setGenderBoxOpen] = useState(false);
        const [genderValue, setGenderValue] = useState(null);
        const [genderListItems, setGenderListItems] = useState(genderList);
        const [nationBoxOpen, setNationBoxOpen] = useState(false);
        const [nationValue, setNationValue] = useState(null);
        const [nationListItems, setNationListItems] = useState(nationList);

        return (
            <View style={{
                flex: 3,
                flexDirection: "column", justifyContent: "flex-start"
            }}>
                <View //Item container 1
                    style={{
                        flex: 1,
                        flexDirection: "row", justifyContent: "space-between"
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 1, alignItems: "center"
                        }}
                        children={
                            <Image
                                style={{
                                    width: 100, height: 100,
                                    borderColor: buttonBorderColor,
                                    borderWidth: 1.5, borderRadius: 15,
                                }}
                                source={IconSources.ic_user} />
                        } />
                    <View style={{
                        flex: 1,
                        flexDirection: "column", justifyContent: "flex-start",
                        alignItems: "center"
                    }}>
                        <Text
                            style={textStyle.normal}
                            children="Account name" />
                        <View style={{
                            flexDirection: "row", justifyContent: "space-between",
                            marginTop: 5
                        }}>
                            <View style={{
                                borderColor: ThemeColors.blueGreen,
                                borderWidth: 1.5, borderRadius: 10,
                                padding: 5
                            }}>
                                <Text
                                    style={[
                                        textStyle.normal,
                                        { fontSize: 15, color: BasicColors.gray }]}
                                    children="Date of birth" />
                            </View>
                            {
                                isEditting ?
                                    <TouchableOpacity
                                        style={{ alignSelf: "center", marginStart: 10 }}
                                        children={
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                source={IconSources.ic_calendar} />
                                        } />
                                    :
                                    <View style={{ width: 25, height: 25 }} />
                            }
                        </View>
                    </View>
                </View>
                <View //Item container 2
                    style={{
                        flex: 1,
                        flexDirection: "row", justifyContent: "space-between"
                    }}>
                    <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
                        <Text
                            style={textStyle.title}
                            children="Firstname" />
                        <TextInput
                            placeholder="Firstname"
                            placeholderTextColor={BasicColors.gray}
                            style={[textInputStyle.w150, { borderColor: firstnameFieldColor }]}
                            inputMode="text"
                            autoCapitalize="words"
                            editable={isEditting}
                            onBlur={() => setFirstnameFieldColor(blurColor)}
                            onFocus={() => setFirstnameFieldColor(focusedColor)} />
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
                        <Text
                            style={textStyle.title}
                            children="Lastname" />
                        <TextInput
                            placeholder="Lastname"
                            placeholderTextColor={BasicColors.gray}
                            style={[textInputStyle.w150, { borderColor: lastnameFieldColor }]}
                            inputMode="text"
                            autoCapitalize="words"
                            editable={isEditting}
                            onBlur={() => setLastnameFieldColor(blurColor)}
                            onFocus={() => setLastnameFieldColor(focusedColor)} />
                    </View>
                </View>
                <View //Item container 3
                    style={{
                        flex: 1,
                        flexDirection: "row", justifyContent: "space-between"
                    }}>
                    <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
                        <Text
                            style={textStyle.title}
                            children="Email" />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={BasicColors.gray}
                            style={[textInputStyle.w150, { borderColor: emailFieldColor }]}
                            inputMode="email"
                            autoCapitalize="none"
                            editable={isEditting}
                            onBlur={() => setEmailFieldColor(blurColor)}
                            onFocus={() => setEmailFieldColor(focusedColor)} />
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
                        <Text
                            style={textStyle.title}
                            children="Phone" />
                        <TextInput
                            placeholder="Phone"
                            placeholderTextColor={BasicColors.gray}
                            style={[textInputStyle.w150, { borderColor: phoneNumberFieldColor }]}
                            inputMode="numeric"
                            autoCapitalize="none"
                            editable={isEditting}
                            onBlur={() => setPhoneNumberFieldColor(blurColor)}
                            onFocus={() => setPhoneNumberFieldColor(focusedColor)} />
                    </View>
                </View>
                <View //Item container 4
                    style={{
                        flex: 1, flexDirection: "row"
                    }}>
                    <View style={{
                        flex: 2,
                        flexDirection: "column", justifyContent: "flex-start"
                    }}>
                        <Text
                            style={textStyle.title}
                            children="Gender" />
                        <DropDownPicker
                            listMode="MODAL"
                            placeholder="-"
                            placeholderStyle={{ color: BasicColors.gray }}
                            textStyle={{ color: BasicColors.gray }}
                            style={{
                                borderColor: genderFieldColor,
                                borderWidth: 1.5, borderRadius: 10,
                            }}
                            dropDownContainerStyle={{ borderColor: genderFieldColor, borderWidth: 1.5 }}
                            open={genderBoxOpen}
                            setOpen={setGenderBoxOpen}
                            value={genderValue}
                            setValue={setGenderValue}
                            items={genderListItems}
                            setItems={setGenderListItems}
                            disabled={!isEditting}
                            onOpen={() => setGenderFieldColor(focusedColor)}
                            onClose={() => setGenderFieldColor(blurColor)} />
                    </View>
                    <View style={{ flex: 1 }} />
                    <View style={{
                        flex: 3,
                        flexDirection: "column", justifyContent: "flex-start"
                    }}>
                        <Text
                            style={textStyle.title}
                            children="Nation" />
                        <DropDownPicker
                            listMode="MODAL"
                            placeholder="-"
                            searchPlaceholder="Type nation to search"
                            placeholderStyle={{ color: BasicColors.gray }}
                            textStyle={{ color: BasicColors.gray }}
                            style={{
                                borderColor: nationFieldColor,
                                borderWidth: 1.5, borderRadius: 10,
                            }}
                            dropDownContainerStyle={{ borderColor: nationFieldColor, borderWidth: 1.5 }}
                            searchContainerStyle={{ borderColor: nationFieldColor, borderBottomWidth: 1.5 }}
                            searchTextInputStyle={{ borderColor: nationFieldColor, borderWidth: 1.5 }}
                            searchPlaceholderTextColor={BasicColors.gray}
                            searchTextInputProps={{ multiline: true }}
                            searchable={true}
                            open={nationBoxOpen}
                            setOpen={setNationBoxOpen}
                            value={nationValue}
                            setValue={setNationValue}
                            items={nationListItems}
                            setItems={setNationListItems}
                            disabled={!isEditting}
                            onOpen={() => setNationFieldColor(focusedColor)}
                            onClose={() => setNationFieldColor(blurColor)} />
                    </View>
                </View>
            </View>
        );
    }

    function BottomSection() {
        return (
            <View style={{ flex: 6, }}>
                {
                    isEditting ?
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity
                                style={{ marginHorizontal: 20 }}
                                children={
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={IconSources.ic_accept} />
                                }
                                onPress={() => setEditingStatus(false)} />
                            <TouchableOpacity
                                style={{ marginHorizontal: 20 }}
                                children={
                                    <Image
                                        style={{ width: 20, height: 20 }}
                                        source={IconSources.ic_cancel} />
                                }
                                onPress={() => setEditingStatus(false)} />
                        </View>
                        :
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity
                                style={textButtonStyle.container}
                                children={
                                    <Text
                                        style={textButtonStyle.text}
                                        children="EDIT ACCOUNT" />
                                }
                                onPress={() => setEditingStatus(true)} />
                            <TouchableOpacity
                                style={[textButtonStyle.container, { marginVertical: 10 }]}
                                children={
                                    <Text
                                        style={textButtonStyle.text}
                                        children="CHANGE PASSWORD" />
                                } />
                            <TouchableOpacity
                                style={textButtonStyle.container}
                                children={
                                    <Text
                                        style={textButtonStyle.text}
                                        children="SIGN OUT" />
                                }
                                onPress={() => navigation.push("CustomerFrame", {
                                    HomePage: { isLogged: false },
                                    SearchPage: undefined,
                                    BookmarkPage: { isLogged: false },
                                    AccountPage: undefined
                                })} />
                        </View>
                }
            </View>
        );
    }
}