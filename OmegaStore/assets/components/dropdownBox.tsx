import { useState } from "react";
import { ColorValue, DimensionValue, FlexAlignType } from "react-native";
import DropDownPicker, { ItemType, ValueType } from "react-native-dropdown-picker";
import { AndroidFontFamily } from "../fonts/androidFontFamily";
import { MarginType } from "../values/marginType";
import { PaddingType } from "../values/paddingType";

type DropDownBoxProps = {
    itemList: ItemType<ValueType>[];
    containerStyle?: {
        flex?: number;
        flexGrow?: number;
        flexShrink?: number;
        backgroundColor?: ColorValue;
        width?: DimensionValue;
        height?: DimensionValue;
        borderWidth?: number;
        borderColor?: ColorValue;
        borderRadius?: number;
        alignSelf?: FlexAlignType;
        margin?: MarginType;
    }
    placeHolderText?: string;
    placeHolderStyle?: {
        color?: ColorValue;
        fontFamily?: AndroidFontFamily;
        fontWeight?:
        "normal" | "bold" | "medium" | "thin" | "light" | "ultralight" |
        "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        fontStyle?: "normal" | "italic";
        fontSize?: number;
        padding?: PaddingType;
    }
    itemContainerStyle?: {
        backgroundColor?: ColorValue;
        width?: DimensionValue;
        height?: number;
        borderWidth?: number;
        borderColor?: ColorValue;
        borderRadius?: number;
    }
    itemTextStyle?: {
        color?: ColorValue;
        fontFamily?: AndroidFontFamily;
        fontWeight?:
        "normal" | "bold" | "medium" | "thin" | "light" | "ultralight" |
        "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        fontStyle?: "normal" | "italic";
        fontSize?: number;
        padding?: PaddingType;
    }
    searchContainerStyle?: {
        innerBackgroundColor?: ColorValue;
        innerborderWidth?: number;
        innerborderColor?: ColorValue;
        innerborderRadius?: number;
        outerBackgroundColor?: ColorValue;
        outerWidth?: DimensionValue;
        outerHeight?: DimensionValue;
        outerBorderWidth?: number;
        outerBorderColor?: ColorValue;
        outerBorderRadius?: number;
    }
    searchText?: string;
    searchTextStyle?: {
        color?: string;
        fontFamily?: AndroidFontFamily;
        fontWeight?:
        "normal" | "bold" | "medium" | "thin" | "light" | "ultralight" |
        "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        fontStyle?: "normal" | "italic";
        fontSize?: number;
        padding?: PaddingType;
    }
    searchTextInputContainerStyle?: {
        backgroundColor?: ColorValue;
        width?: DimensionValue;
        height?: DimensionValue;
        borderWidth?: number;
        borderColor?: ColorValue;
        borderRadius?: number;
    }
    function?: {
        searchable?: boolean;
        multiple?: boolean;
        minChoice?: number;
        maxChoice?: number;
        active?: boolean;
        onOpen?: () => void;
        onClose?: () => void;
    }
}

export function DropDownBox(props: DropDownBoxProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(props.itemList);

    return (
        <DropDownPicker
            listMode="SCROLLVIEW"
            style={{
                flex: props.containerStyle?.flex,
                flexGrow: props.containerStyle?.flexGrow,
                flexShrink: props.containerStyle?.flexShrink,
                backgroundColor: props.containerStyle?.backgroundColor,
                width: props.containerStyle?.width,
                height: props.containerStyle?.height,
                borderWidth: props.containerStyle?.borderWidth,
                borderColor: props.containerStyle?.borderColor,
                borderRadius: props.containerStyle?.borderRadius,
                alignSelf: props.containerStyle?.alignSelf,
                ...props.containerStyle?.margin
            }}
            dropDownContainerStyle={props.itemContainerStyle}
            placeholder={props.placeHolderText}
            placeholderStyle={{
                color: props.placeHolderStyle?.color,
                fontFamily: props.placeHolderStyle?.fontFamily,
                fontWeight: props.placeHolderStyle?.fontWeight,
                fontStyle: props.placeHolderStyle?.fontStyle,
                fontSize: props.placeHolderStyle?.fontSize,
                ...props.placeHolderStyle?.padding
            }}
            textStyle={{
                color: props.itemTextStyle?.color,
                fontFamily: props.itemTextStyle?.fontFamily,
                fontWeight: props.itemTextStyle?.fontWeight,
                fontStyle: props.itemTextStyle?.fontStyle,
                fontSize: props.itemTextStyle?.fontSize,
                ...props.itemTextStyle?.padding
            }}
            searchContainerStyle={{
                backgroundColor: props.searchContainerStyle?.outerBackgroundColor,
                width: props.searchContainerStyle?.outerWidth,
                height: props.searchContainerStyle?.outerHeight,
                borderWidth: props.searchContainerStyle?.outerBorderWidth,
                borderColor: props.searchContainerStyle?.outerBorderColor,
                borderRadius: props.searchContainerStyle?.outerBorderRadius
            }}
            searchPlaceholder={props.searchText}
            searchTextInputProps={{ multiline: true }}
            searchPlaceholderTextColor={props.searchTextStyle?.color}
            searchTextInputStyle={{
                color: props.searchTextStyle?.color,
                fontFamily: props.searchTextStyle?.fontFamily,
                fontWeight: props.searchTextStyle?.fontWeight,
                fontStyle: props.searchTextStyle?.fontStyle,
                fontSize: props.searchTextStyle?.fontSize,
                ...props.searchTextStyle?.padding,
                backgroundColor: props.searchContainerStyle?.innerBackgroundColor,
                borderWidth: props.searchContainerStyle?.innerborderWidth,
                borderColor: props.searchContainerStyle?.innerborderColor,
                borderRadius: props.searchContainerStyle?.innerborderRadius
            }}
            maxHeight={props.itemContainerStyle?.height}
            searchable={props.function?.searchable}
            onOpen={props.function?.onOpen}
            onClose={props.function?.onClose}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            min={props.function?.minChoice}
            max={props.function?.maxChoice}
            disabled={props.function?.active} />
    );
}