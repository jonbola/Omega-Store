import { ColorValue, DimensionValue, FlexAlignType, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { MarginType } from "../values/marginType";

type IconButtonProps = {
    iconSource: ImageSourcePropType;
    iconStyle?: {
        width?: DimensionValue;
        height?: DimensionValue;
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
    }
    function?: {
        onPress?: () => void;
        onLongPress?: () => void;
        delayLongPress?: number;
        disabled?: boolean;
    }
}

export function IconButton(props: IconButtonProps) {
    return (
        <TouchableOpacity
            style={{
                flex: props.containerStyle?.flex,
                flexGrow: props.containerStyle?.flexGrow,
                flexShrink: props.containerStyle?.flexShrink,
                width: props.containerStyle?.width,
                height: props.containerStyle?.height,
                borderWidth: props.containerStyle?.borderWidth,
                borderColor: props.containerStyle?.borderColor,
                borderRadius: props.containerStyle?.borderRadius,
                alignSelf: props.containerStyle?.alignSelf,
                ...props.containerStyle?.margin
            }}
            onPress={props.function?.onPress}
            onLongPress={props.function?.onLongPress}
            delayLongPress={props.function?.delayLongPress}
            disabled={props.function?.disabled}>
            <Image
                source={props.iconSource}
                style={{
                    width: props.iconStyle?.width,
                    height: props.iconStyle?.height
                }} />
        </TouchableOpacity>
    );
}