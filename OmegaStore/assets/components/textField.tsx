import React from "react";
import { ColorValue, DimensionValue, FlexAlignType, TextInput } from "react-native";
import { MarginType } from "../values/marginType";
import { PaddingType } from "../values/paddingType";

type TextFieldProps = {
    placeHolderText?: string;
    placeHolderStyle?: {
        color?: ColorValue;
        textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through" | undefined;
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
        active?: boolean;
        inputMode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        autoCapitalize?: "characters" | "words" | "sentences" | "none";
        hideText?: boolean;
        onFocus?: () => void;
        onBlur?: () => void;
    }
}

export function TextField(props: TextFieldProps) {
    const [text, onChangeText] = React.useState("");
    return (
        <TextInput
            style={{
                flex: props.containerStyle?.flex,
                flexGrow: props.containerStyle?.flexGrow,
                flexShrink: props.containerStyle?.flexShrink,
                width: props.containerStyle?.width,
                height: props.containerStyle?.height,
                backgroundColor: props.containerStyle?.backgroundColor,
                borderWidth: props.containerStyle?.borderWidth,
                borderColor: props.containerStyle?.borderColor,
                borderRadius: props.containerStyle?.borderRadius,
                textDecorationLine: props.placeHolderStyle?.textDecorationLine,
                ...props.containerStyle?.padding,
                ...props.containerStyle?.margin,
            }}
            onChangeText={onChangeText}
            value={text}
            placeholder={props.placeHolderText}
            placeholderTextColor={props.placeHolderStyle?.color}
            secureTextEntry={props.function?.hideText}
            editable={props.function?.active}
            inputMode={props.function?.inputMode}
            autoCapitalize={props.function?.autoCapitalize}
            onFocus={props.function?.onFocus}
            onBlur={props.function?.onBlur} />
    );
}