import CustomBox from "@/app/tools/components/customBox";
import CustomText from "@/app/tools/components/customText";
import { AlignItem, AlignSelf, BasicColors, FlexDirection, FontFamily, FontStyle, FontWeight } from "@/app/tools/values";
import { Text } from "react-native";

export function MainPage() {
    return (
        <CustomBox
            width={"100%"}
            height={"100%"}
            backgroundColor={BasicColors.white}
            flexDirection={FlexDirection.row}
            alignItems={AlignItem.center}>
            <CustomText
                line={1}
                value="Hi"
                fontFamily={FontFamily.roboto}
                fontWeight={FontWeight.normal}
                fontStyle={FontStyle.normal}
                fontSize={20}
                color={BasicColors.black}
                alignSelf={AlignSelf.center}/>
        </CustomBox>
    );
}
