import { ColorValue, DimensionValue, FlexAlignType, Text } from "react-native";
import { MarginType } from "../values/marginType";
import { PaddingType } from "../values/paddingType";
import { AndroidFontFamily } from "../fonts/androidFontFamily";

type TextBoxProps = {
    text: string;
    textStyle?: {
        fontFamily?: AndroidFontFamily;
        fontWeight?:
        "normal" | "bold" | "medium" | "thin" | "light" | "ultralight" |
        "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        fontStyle?: "normal" | "italic";
        fontSize?: number;
        textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through" | undefined;
        color?: ColorValue;
    }
    containerStyle?: {
        flex?: number;
        flexGrow?: number;
        flexShrink?: number;
        width?: DimensionValue;
        height?: DimensionValue;
        borderWidth?: number;
        borderColor?: ColorValue;
        borderRadius?: number;
        alignSelf?: "auto" | FlexAlignType;
        margin?: MarginType;
        padding?: PaddingType;
    }
}

export function TextBox(props: TextBoxProps) {
    return (
        <Text style={{
            flex: props.containerStyle?.flex,
            flexGrow: props.containerStyle?.flexGrow,
            flexShrink: props.containerStyle?.flexShrink,
            width: props.containerStyle?.width,
            height: props.containerStyle?.height,
            fontFamily: props.textStyle?.fontFamily,
            fontWeight: props.textStyle?.fontWeight,
            fontStyle: props.textStyle?.fontStyle,
            fontSize: props.textStyle?.fontSize,
            textDecorationLine: props.textStyle?.textDecorationLine,
            color: props.textStyle?.color,
            borderWidth: props.containerStyle?.borderWidth,
            borderColor: props.containerStyle?.borderColor,
            borderRadius: props.containerStyle?.borderRadius,
            alignSelf: props.containerStyle?.alignSelf,
            ...props.containerStyle?.margin,
            ...props.containerStyle?.padding
        }}>
            {props.text}
        </Text>
    );
}