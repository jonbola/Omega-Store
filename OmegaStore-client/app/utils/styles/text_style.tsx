import { ThemeColors } from "@/assets/colors/theme-colors";
import { StyleSheet } from "react-native";

export const text_styles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        color: ThemeColors.navyBlue
    },
    normal: {
        color: ThemeColors.blueGrotto
    },
    link: {
        color: ThemeColors.navyBlue,
        fontStyle: "italic",
        textDecorationLine: "underline"
    }
});