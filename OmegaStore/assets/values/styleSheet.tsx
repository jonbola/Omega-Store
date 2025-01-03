import { StyleSheet } from "react-native";
import { buttonBackgroundColor, buttonBorderColor, buttonTextColor, headerTextColor, linkTextColor, normalTextColor } from "./componentColor";
import { AndroidFontFamily } from "../fonts/androidFontFamily";
import { BasicColors } from "../colors/basic_colors";

export const textStyle = StyleSheet.create({
    title: {
        fontFamily: AndroidFontFamily.roboto,
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 20,
        color: normalTextColor,
    },
    header: {
        fontFamily: AndroidFontFamily.roboto,
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 30,
        color: headerTextColor,
    },
    normal: {
        fontFamily: AndroidFontFamily.roboto,
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: 15,
        color: normalTextColor,
    },
    bold: {
        fontFamily: AndroidFontFamily.roboto,
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 20,
        color: normalTextColor,
    },
    link: {
        fontFamily: AndroidFontFamily.roboto,
        fontWeight: "normal",
        fontStyle: "italic",
        fontSize: 15,
        textDecorationLine: "underline",
        color: linkTextColor
    }
});

export const textButtonStyle = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: buttonBackgroundColor,
        borderColor: buttonBorderColor,
        borderWidth: 1.5,
        borderRadius: 10,
        padding: 10
    },
    text: {
        color: buttonTextColor,
        fontFamily: AndroidFontFamily.roboto,
        fontWeight: "bold",
        fontStyle: "normal"
    }
});

export const iconButtonStyle = StyleSheet.create({
    container15x: {
        width: 17,
        height: 17,
        borderWidth: 1,
        borderRadius: 10
    },
    icon15x: {
        width: 15,
        height: 15
    },
    container30x: {
        width: 32,
        height: 32,
        borderWidth: 1,
        borderRadius: 10
    },
    icon30x: {
        width: 30,
        height: 30
    }
});

export const textInputStyle = StyleSheet.create({
    w150: {
        width: 150,
        backgroundColor: BasicColors.white,
        borderWidth: 1.5,
        borderRadius: 10,
        paddingLeft: 10
    },
    w250: {
        width: 250,
        backgroundColor: BasicColors.white,
        borderWidth: 1.5,
        borderRadius: 10,
        paddingLeft: 10
    },
    maxWidth: {
        backgroundColor: BasicColors.white,
        borderWidth: 1.5,
        borderRadius: 10,
        paddingLeft: 10
    }
});