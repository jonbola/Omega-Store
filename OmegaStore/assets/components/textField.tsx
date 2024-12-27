import React from "react";
import { ColorValue, DimensionValue, FlexAlignType, NativeSyntheticEvent, TextInput, TextInputEndEditingEventData } from "react-native";
import { MarginType } from "../values/marginType";
import { PaddingType } from "../values/paddingType";
import Container from "./container";

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
        value?: string;
        onChangeText?: (text: string) => void;
        onEndEditing?: () => void;
        active?: boolean;
        inputMode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        autoCapitalize?: "characters" | "words" | "sentences" | "none";
        hideText?: boolean;
        onFocus?: () => void;
        onBlur?: () => void;
    }
}

export function TextField(props: TextFieldProps) {
    return (
        <Container containerStyle={{
            flex: props.containerStyle?.flex,
            flexGrow: props.containerStyle?.flexGrow,
            flexShrink: props.containerStyle?.flexShrink,
        }}>
            <TextInput
                style={{
                    width: props.containerStyle?.width,
                    height: props.containerStyle?.height,
                    backgroundColor: props.containerStyle?.backgroundColor,
                    borderWidth: props.containerStyle?.borderWidth,
                    borderColor: props.containerStyle?.borderColor,
                    borderRadius: props.containerStyle?.borderRadius,
                    textDecorationLine: props.placeHolderStyle?.textDecorationLine,
                    alignSelf: props.containerStyle?.alignSelf,
                    ...props.containerStyle?.padding,
                    ...props.containerStyle?.margin,
                }}
                onChangeText={props.function?.onChangeText}
                onEndEditing={props.function?.onEndEditing}
                value={props.function?.value}
                placeholder={props.placeHolderText}
                placeholderTextColor={props.placeHolderStyle?.color}
                secureTextEntry={props.function?.hideText}
                editable={props.function?.active}
                inputMode={props.function?.inputMode}
                autoCapitalize={props.function?.autoCapitalize}
                onFocus={props.function?.onFocus}
                onBlur={props.function?.onBlur} />
        </Container>
    );
}