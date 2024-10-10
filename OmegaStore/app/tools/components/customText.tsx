import { ColorValue, Text } from "react-native";
import { AlignSelf, FontFamily, FontStyle, FontWeight } from "../values";

type CustomTextProps = {
    line: number;
    value: string;
    fontFamily: FontFamily;
    fontWeight: FontWeight;
    fontStyle: FontStyle;
    fontSize: number;
    color: ColorValue;
    alignSelf: AlignSelf;
}

export default function CustomText(props: CustomTextProps) {
    return (
        <Text
            numberOfLines={props.line}
            style={{
                fontFamily: props.fontFamily,
                fontWeight: props.fontWeight,
                fontStyle: props.fontStyle,
                fontSize: props.fontSize,
                color: props.color,
                alignSelf: props.alignSelf
            }}>
            {props.value}
        </Text>
    );
}