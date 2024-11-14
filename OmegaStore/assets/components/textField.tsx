import React from "react";
import { ColorValue, DimensionValue, FlexAlignType, TextInput } from "react-native";

type TextFieldProps = {
    placeHolderStyle?: {
        placeHolderText?: string;
        placeHolderTextColor?: ColorValue;
        decorationLine?: "none" | "underline" | "line-through" | "underline line-through" | undefined;
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
        editable?: boolean;
        inputMode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        autoCapitalize?: "characters" | "words" | "sentences" | "none";
        hideText?: boolean;
        onFocus?: () => void;
        onBlur?: () => void;
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

export function TextField(props: TextFieldProps) {
    const [text, onChangeText] = React.useState("");
    return (
        <TextInput
            style={{
                width: props.boxStyle?.width,
                height: props.boxStyle?.height,
                backgroundColor: props.boxStyle?.backgroundColor,
                borderWidth: props.boxStyle?.borderWidth,
                borderColor: props.boxStyle?.borderColor,
                borderRadius: props.boxStyle?.borderRadius,
                textDecorationLine: props.placeHolderStyle?.decorationLine,
                ...props.placeHolderStyle?.padding,
                ...props.align?.margin,
            }}
            onChangeText={onChangeText}
            value={text}
            placeholder={props.placeHolderStyle?.placeHolderText}
            placeholderTextColor={props.placeHolderStyle?.placeHolderTextColor}
            secureTextEntry={props.function?.hideText}
            editable={props.function?.editable}
            inputMode={props.function?.inputMode}
            autoCapitalize={props.function?.autoCapitalize}
            onFocus={props.function?.onFocus}
            onBlur={props.function?.onBlur} />
    );
}