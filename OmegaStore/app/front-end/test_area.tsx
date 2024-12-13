import { BasicColors } from "@/assets/colors/basic_colors";
import { AndroidFontFamily } from "@/assets/fonts/androidFontFamily";
import { StyleSheet, Text, View } from "react-native";

export default function TestArea() {
    return (
        <View style={[styles.container, { width: "100%", height: "100%" }]}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BasicColors.red
    },
    boxStyle: {
        width: 100,
        height: 100
    },
    text: {
        color: BasicColors.white,
        fontFamily: AndroidFontFamily.roboto
    }
})