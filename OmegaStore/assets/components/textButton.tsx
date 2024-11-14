import { BasicColors } from "@/assets/colors/basic_colors";
import { FontFamily } from "@/assets/fonts/android_fonts";
import { Button, ColorValue, DimensionValue, FlexAlignType, Text, TouchableOpacity, View } from "react-native";

type TextButtonProps = {
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
        backgroundColor?: ColorValue;
        borderWidth?: number;
        borderColor?: ColorValue;
        borderRadius?: number;
    }
    function?: {
        onPress?: () => void;
        onLongPress?: () => void;
        delayLongPress?: number;
        disabled?: boolean;
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

export function TextButton(props: TextButtonProps) {
    return (
        <TouchableOpacity
            style={{
                justifyContent: "center",
                alignItems: "center",
                width: props.boxStyle?.width,
                height: props.boxStyle?.height,
                backgroundColor: props.boxStyle?.backgroundColor,
                borderWidth: props.boxStyle?.borderWidth,
                borderColor: props.boxStyle?.borderColor,
                borderRadius: props.boxStyle?.borderRadius,
                alignSelf: props.align?.alignSelf,
                ...props.textStyle?.padding,
                ...props.align?.margin
            }}
            onPress={props.function?.onPress}
            onLongPress={props.function?.onLongPress}
            delayLongPress={props.function?.delayLongPress}
            disabled={props.function?.disabled}>
            <Text
                style={{
                    color: props.textStyle?.textColor,
                    fontFamily: props.textStyle?.fontFamily,
                    fontWeight: props.textStyle?.fontWeight,
                    fontStyle: props.textStyle?.fontStyle,
                    fontSize: props.textStyle?.fontSize,
                    textDecorationLine: props.textStyle?.decorationLine
                }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}