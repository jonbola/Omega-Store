import { ColorValue, DimensionValue, FlexAlignType, Text, TouchableOpacity, View } from "react-native";
import { MarginType } from "../values/marginType";
import { AndroidFontFamily } from "../fonts/androidFontFamily";
import { PaddingType } from "../values/paddingType";

type TextButtonProps = {
    text: string;
    textStyle?: {
        fontFamily?: AndroidFontFamily;
        fontWeight?: "normal" | "bold" | "medium" | "thin" | "light" | "ultralight" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
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
        backgroundColor?: ColorValue;
        borderWidth?: number;
        borderColor?: ColorValue;
        borderRadius?: number;
        alignSelf?: "auto" | FlexAlignType;
        margin?: MarginType;
        padding?: PaddingType;
    }
    function?: {
        onPress?: () => void;
        onLongPress?: () => void;
        delayLongPress?: number;
        disabled?: boolean;
    }
}

export function TextButton(props: TextButtonProps) {
    return (
        <View style={{
            flex: props.containerStyle?.flex,
            flexGrow: props.containerStyle?.flexGrow,
            flexShrink: props.containerStyle?.flexShrink,
            width: props.containerStyle?.width,
            height: props.containerStyle?.height,
            backgroundColor: props.containerStyle?.backgroundColor,
            borderWidth: props.containerStyle?.borderWidth,
            borderColor: props.containerStyle?.borderColor,
            borderRadius: props.containerStyle?.borderRadius,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: props.containerStyle?.alignSelf,
            ...props.containerStyle?.margin,
            ...props.containerStyle?.padding
        }}>
            <TouchableOpacity
                onPress={props.function?.onPress}
                onLongPress={props.function?.onLongPress}
                delayLongPress={props.function?.delayLongPress}
                disabled={props.function?.disabled}>
                <Text
                    style={{
                        color: props.textStyle?.color,
                        fontFamily: props.textStyle?.fontFamily,
                        fontWeight: props.textStyle?.fontWeight,
                        fontStyle: props.textStyle?.fontStyle,
                        fontSize: props.textStyle?.fontSize,
                        textDecorationLine: props.textStyle?.textDecorationLine
                    }}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}