import CustomText from "@/app/tools/components/customText";
import { BasicColors, FontFamily, FontStyle, FontWeight } from "@/app/tools/values";
import { View } from "react-native";

export function HomePage() {
    return (
        <View>
            <CustomText
                line={1}
                value="Hello there"
                fontFamily={FontFamily.roboto}
                fontWeight={FontWeight.bold}
                fontStyle={FontStyle.italic}
                fontSize={30}
                color={BasicColors.black}
            />
        </View>
    );
}