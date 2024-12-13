import { BasicColors } from "@/assets/colors/basic_colors";
import Container from "@/assets/components/container";
import { DropDownBox } from "@/assets/components/dropdownBox";
import { IconButton } from "@/assets/components/iconButton";
import { TextBox } from "@/assets/components/textBox";
import { TextButton } from "@/assets/components/textButton";
import { TextField } from "@/assets/components/textField";
import { AndroidFontFamily } from "@/assets/fonts/androidFontFamily";
import { IconSources } from "@/assets/resources/resource_directories";
import { blurFieldColor, boldTextColor, buttonBackgroundColor, buttonBorderColor, buttonTextColor, focusedFieldColor, headerTextColor, normalTextColor } from "@/assets/values/componentColor";
import { genderList } from "@/assets/values/genderList";
import { nationList } from "@/assets/values/nationList";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text } from "react-native";

export default function AccountFragment() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [isEditting, setEditingStatus] = useState(false);

    return (
        <Container containerStyle={{
            flex: 1,
            backgroundColor: BasicColors.white
        }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Container childrenStyle={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        padding: {
                            paddingHorizontal: 20,
                            paddingVertical: 10
                        }
                    }}>
                        <HeadSection />
                        <BodySection />
                        <BottomSection />
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );

    function HeadSection() {
        return (
            <Container
                containerStyle={{ margin: { marginVertical: 10 } }}
                childrenStyle={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <IconButton
                    iconSource={IconSources.ic_drawer}
                    iconStyle={{ width: 20, height: 20 }}
                    function={{ onPress: () => navigation.dispatch(DrawerActions.toggleDrawer) }} />
                <Text style={{
                    fontFamily: AndroidFontFamily.roboto,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontSize: 30,
                    color: headerTextColor,
                }}>
                    ACCOUNT
                </Text>
                <Container containerStyle={{ width: 20, height: 20 }} />
            </Container>
        );
    }

    function BodySection() {
        const blurColor = blurFieldColor, focusedColor = focusedFieldColor;
        const [firstnameFieldColor, setFirstnameFieldColor] = useState(blurColor);
        const [lastnameFieldColor, setLastnameFieldColor] = useState(blurColor);
        const [emailFieldColor, setEmailFieldColor] = useState(blurColor);
        const [phoneNumberFieldColor, setPhoneNumberFieldColor] = useState(blurColor);
        const [genderFieldColor, setGenderFieldColor] = useState(blurColor);
        const [nationFieldColor, setNationFieldColor] = useState(blurColor);

        return (
            <Container
                containerStyle={{ margin: { marginVertical: 10 } }}
                childrenStyle={{
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                <Container //Item 1 section
                    childrenStyle={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                    <IconButton
                        iconSource={IconSources.ic_user}
                        iconStyle={{ width: 100, height: 100 }}
                        containerStyle={{
                            borderWidth: 1.5,
                            borderColor: buttonBorderColor,
                            borderRadius: 15
                        }} />
                    <Container
                        containerStyle={{ margin: { marginEnd: 20 } }}
                        childrenStyle={{
                            flexDirection: "column",
                            justifyContent: "flex-start"
                        }}>
                        <Text style={{
                            fontFamily: AndroidFontFamily.roboto,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            fontSize: 20,
                            color: normalTextColor,
                        }}>
                            Account name
                        </Text>
                        <Container
                            containerStyle={{ margin: { marginVertical: 10 } }}
                            childrenStyle={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                            <TextBox
                                text="Date of birth"
                                textStyle={{
                                    fontFamily: AndroidFontFamily.roboto,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    fontSize: 15,
                                    color: BasicColors.gray
                                }}
                                containerStyle={{
                                    borderWidth: 1.5,
                                    borderColor: blurColor,
                                    borderRadius: 10,
                                    padding: { padding: 5 }
                                }} />
                            {
                                isEditting ?
                                    <IconButton
                                        iconSource={IconSources.ic_calendar}
                                        iconStyle={{ width: 25, height: 25 }}
                                        containerStyle={{ alignSelf: "center" }} />
                                    :
                                    <Container containerStyle={{ width: 25 }} />
                            }
                        </Container>
                    </Container>
                </Container>
                <Container //Item 2 section
                    containerStyle={{ margin: { marginTop: 10 } }}
                    childrenStyle={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                    <Container
                        childrenStyle={{
                            flexDirection: "column",
                            justifyContent: "flex-start"
                        }}>
                        <TextBox
                            text="Firstname"
                            textStyle={{
                                fontFamily: AndroidFontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                color: normalTextColor,
                            }} />
                        <TextField
                            placeHolderText="Firstname"
                            placeHolderStyle={{ color: BasicColors.gray }}
                            containerStyle={{
                                width: 150,
                                height: 40,
                                borderWidth: 1.5,
                                borderColor: firstnameFieldColor,
                                borderRadius: 10,
                                padding: { paddingLeft: 10 }
                            }}
                            function={{
                                inputMode: "text",
                                onFocus: () => setFirstnameFieldColor(focusedColor),
                                onBlur: () => setFirstnameFieldColor(blurColor),
                                autoCapitalize: "words",
                                active: isEditting
                            }} />
                    </Container>
                    <Container
                        childrenStyle={{
                            flexDirection: "column",
                            justifyContent: "flex-start"
                        }}>
                        <TextBox
                            text="Lastname"
                            textStyle={{
                                fontFamily: AndroidFontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                color: normalTextColor,
                            }} />
                        <TextField
                            placeHolderText="Lastname"
                            placeHolderStyle={{ color: BasicColors.gray }}
                            containerStyle={{
                                width: 150,
                                height: 40,
                                borderWidth: 1.5,
                                borderColor: lastnameFieldColor,
                                borderRadius: 10,
                                padding: { paddingLeft: 10 }
                            }}
                            function={{
                                inputMode: "text",
                                onFocus: () => setLastnameFieldColor(focusedColor),
                                onBlur: () => setLastnameFieldColor(blurColor),
                                autoCapitalize: "words",
                                active: isEditting
                            }} />
                    </Container>
                </Container>
                <Container //Item 3 section
                    containerStyle={{ margin: { marginTop: 10 } }}
                    childrenStyle={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                    <Container childrenStyle={{
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    }}>
                        <TextBox
                            text="Email"
                            textStyle={{
                                fontFamily: AndroidFontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                color: normalTextColor,
                            }} />
                        <TextField
                            placeHolderText="Email"
                            placeHolderStyle={{ color: BasicColors.gray }}
                            containerStyle={{
                                width: 150,
                                height: 40,
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
                                active: isEditting
                            }} />
                    </Container>
                    <Container childrenStyle={{
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    }}>
                        <TextBox
                            text="Phone"
                            textStyle={{
                                fontFamily: AndroidFontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                color: normalTextColor,
                            }} />
                        <TextField
                            placeHolderText="Phone"
                            placeHolderStyle={{ color: BasicColors.gray }}
                            containerStyle={{
                                width: 150,
                                height: 40,
                                borderWidth: 1.5,
                                borderColor: phoneNumberFieldColor,
                                borderRadius: 10,
                                padding: { paddingLeft: 10 }
                            }}
                            function={{
                                inputMode: "numeric",
                                onFocus: () => setPhoneNumberFieldColor(focusedColor),
                                onBlur: () => setPhoneNumberFieldColor(blurColor),
                                autoCapitalize: "none",
                                active: isEditting
                            }} />
                    </Container>
                </Container>
                <Container //Item 4 section
                    containerStyle={{ margin: { marginTop: 10 } }}
                    childrenStyle={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                    <Container childrenStyle={{
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    }}>
                        <TextBox
                            text="Gender"
                            textStyle={{
                                fontFamily: AndroidFontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                color: normalTextColor,
                            }} />
                        <DropDownBox
                            itemList={genderList}
                            containerStyle={{
                                width: 120,
                                borderWidth: 1.5,
                                borderColor: genderFieldColor,
                                borderRadius: 10,
                            }}
                            placeHolderText="-"
                            placeHolderStyle={{ color: boldTextColor }}
                            itemTextStyle={{
                                color: boldTextColor,
                                fontFamily: AndroidFontFamily.roboto,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                fontSize: 15
                            }}
                            itemContainerStyle={{
                                borderWidth: 1.5,
                                borderColor: genderFieldColor,
                            }}
                            function={{
                                onOpen: () => setGenderFieldColor(focusedColor),
                                onClose: () => setGenderFieldColor(blurColor),
                                active: !isEditting
                            }} />
                    </Container>
                    <Container childrenStyle={{
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    }}>
                        <TextBox
                            text="Nation"
                            textStyle={{
                                fontFamily: AndroidFontFamily.roboto,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize: 20,
                                color: normalTextColor,
                            }} />
                        <DropDownBox
                            itemList={nationList}
                            containerStyle={{
                                width: 150,
                                borderWidth: 1.5,
                                borderColor: nationFieldColor,
                                borderRadius: 10,
                            }}
                            placeHolderText="-"
                            placeHolderStyle={{
                                color: boldTextColor,
                            }}
                            itemTextStyle={{
                                color: boldTextColor,
                                fontFamily: AndroidFontFamily.roboto,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                fontSize: 15
                            }}
                            itemContainerStyle={{
                                borderWidth: 1.5,
                                borderColor: nationFieldColor,
                            }}
                            searchText="Type to search"
                            searchTextStyle={{
                                color: boldTextColor,
                                fontFamily: AndroidFontFamily.roboto,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                fontSize: 15
                            }}
                            searchContainerStyle={{
                                innerborderWidth: 1.5,
                                innerborderColor: nationFieldColor,
                                innerborderRadius: 10,
                                outerBorderColor: nationFieldColor,
                            }}
                            function={{
                                searchable: true,
                                onOpen: () => setNationFieldColor(focusedColor),
                                onClose: () => setNationFieldColor(blurColor),
                                active: !isEditting
                            }} />
                    </Container>
                </Container>
            </Container>
        );
    }

    function BottomSection() {
        return (
            <Container>
                {
                    isEditting ?
                        <Container
                            containerStyle={{
                                width: "100%",
                                margin: { marginVertical: 10 }
                            }}
                            childrenStyle={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <IconButton
                                iconSource={IconSources.ic_accept}
                                iconStyle={{ width: 30, height: 30 }}
                                containerStyle={{ margin: { marginHorizontal: 20 } }}
                                function={{ onPress: () => setEditingStatus(false) }} />
                            <IconButton
                                iconSource={IconSources.ic_cancel}
                                iconStyle={{ width: 20, height: 20 }}
                                containerStyle={{ margin: { marginHorizontal: 20 } }}
                                function={{ onPress: () => setEditingStatus(false) }} />
                        </Container>
                        :
                        <Container
                            containerStyle={{
                                width: "100%",
                                height: 150,
                                margin: { marginVertical: 10 }
                            }}
                            childrenStyle={{
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                            <TextButton
                                text="EDIT ACCOUNT"
                                textStyle={{
                                    color: buttonTextColor,
                                    fontFamily: AndroidFontFamily.roboto,
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    fontSize: 15,
                                }}
                                containerStyle={{
                                    height: 40,
                                    backgroundColor: buttonBackgroundColor,
                                    borderWidth: 1.5,
                                    borderColor: buttonBorderColor,
                                    borderRadius: 10,
                                    padding: { padding: 5 }
                                }}
                                function={{ onPress: () => setEditingStatus(true) }} />
                            <TextButton
                                text="CHANGE PASSWORD"
                                textStyle={{
                                    color: buttonTextColor,
                                    fontFamily: AndroidFontFamily.roboto,
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    fontSize: 15,
                                }}
                                containerStyle={{
                                    height: 40,
                                    backgroundColor: buttonBackgroundColor,
                                    borderWidth: 1.5,
                                    borderColor: buttonBorderColor,
                                    borderRadius: 10,
                                    padding: { padding: 5 }
                                }} />
                            <TextButton
                                text="SIGN OUT"
                                textStyle={{
                                    color: buttonTextColor,
                                    fontFamily: AndroidFontFamily.roboto,
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    fontSize: 15,
                                }}
                                containerStyle={{
                                    height: 40,
                                    backgroundColor: buttonBackgroundColor,
                                    borderWidth: 1.5,
                                    borderColor: buttonBorderColor,
                                    borderRadius: 10,
                                    padding: { padding: 5 }
                                }}
                                function={{ onPress: () => navigation.navigate("home") }} />
                        </Container>
                }
            </Container>
        );
    }
}