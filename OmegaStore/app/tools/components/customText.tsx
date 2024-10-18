import { ColorValue, Text, ViewStyle } from "react-native";
import { FontFamily, FontStyle, FontWeight } from "../values";

type CustomTextProps = {
    line: number;
    value: string;
    fontFamily: FontFamily;
    fontWeight: FontWeight;
    fontStyle: FontStyle;
    fontSize: number;
    color: ColorValue;
    align?: ViewStyle;
    margin?: ViewStyle;
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
                ...props.align,
                ...props.margin
            }}>
            {props.value}
        </Text>
    );
}