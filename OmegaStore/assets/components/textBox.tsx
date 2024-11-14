import { FontFamily } from "@/assets/fonts/android_fonts";
import { ColorValue, DimensionValue, FlexAlignType, Text, TextStyle } from "react-native";

type TextBoxProps = {
    text: string;
    textStyle?: {
        fontFamily?: FontFamily;
        fontWeight?: "normal" | "bold" | "medium" | "thin" | "light" | "ultralight" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        fontStyle?: "normal" | "italic";
        fontSize?: number;
        decorationLine?: "none" | "underline" | "line-through" | "underline line-through" | undefined;
        textColor?: ColorValue;
        padding?: PaddingType;
    }
    boxStyle?: {
        width?: DimensionValue;
        height?: DimensionValue;
        borderWidth?: number;
        borderColor?: ColorValue;
        borderRadius?: number;
    }
    align?: {
        alignSelf?: "auto" | FlexAlignType;
        margin?: MarginType;
    }
}

type MarginType = {
    margin?: number;
    marginTop?: number;
    marginBottom?: number;
    marginStart?: number;
    marginEnd?: number;
    marginLeft?: number;
    marginRight?: number;
    marginVertical?: number;
    marginHorizontal?: number;
}

type PaddingType = {
    padding?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingStart?: number;
    paddingEnd?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
}

export function TextBox(props: TextBoxProps, margin: MarginType) {
    return (
        <Text style={{
            width: props.boxStyle?.width,
            height: props.boxStyle?.height,
            fontFamily: props.textStyle?.fontFamily,
            fontWeight: props.textStyle?.fontWeight,
            fontStyle: props.textStyle?.fontStyle,
            fontSize: props.textStyle?.fontSize,
            textDecorationLine: props.textStyle?.decorationLine,
            color: props.textStyle?.textColor,
            borderWidth: props.boxStyle?.borderWidth,
            borderColor: props.boxStyle?.borderColor,
            borderRadius: props.boxStyle?.borderRadius,
            alignSelf: props.align?.alignSelf,
            ...props.align?.margin,
            ...props.textStyle?.padding
        }}>
            {props.text}
        </Text>
    );
}