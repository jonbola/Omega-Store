import { ThemeColors } from "@/assets/colors/theme-colors";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const container_styles = StyleSheet.create({
    container: {
        width: wp(100),
        height: hp(100),
        backgroundColor: "#FFFFFF"
    },
    head_container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        width: wp(100),
        height: hp(10),
        backgroundColor: ThemeColors.babyBlue,
        borderBottomWidth: 3,
        borderBottomColor: ThemeColors.blueGrotto
    },
    body_container: {
        flexDirection: "column",
        padding: 10,
        width: wp(100),
        height: hp(90),
        backgroundColor: "#FFFFFF"
    },
    column_container: {
        flexDirection: "column"
    },
    row_container: {
        flexDirection: "row"
    }
});