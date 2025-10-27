import { StyleSheet } from "react-native";
import { ThemeColors } from "../colors/theme-colors";

export const TextStyle = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 20,
        color: ThemeColors.blueGreen,
    },
    header: {
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 30,
        color: ThemeColors.blueGrotto,
    },
    normal: {
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: 15,
        color: ThemeColors.blueGreen,
    },
    bold: {
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 20,
        color: ThemeColors.blueGreen,
    },
    link: {
        fontWeight: "normal",
        fontStyle: "italic",
        textDecorationLine: "underline",
        color: ThemeColors.navyBlue
    }
});