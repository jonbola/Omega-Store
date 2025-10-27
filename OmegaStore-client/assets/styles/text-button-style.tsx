import { StyleSheet } from "react-native";
import { buttonBackgroundColor, buttonBorderColor, buttonTextColor } from "../colors/component-colors";
import { AndroidFontFamily } from "../fonts/android_font_family";

export const TextButtonStyle = StyleSheet.create({
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