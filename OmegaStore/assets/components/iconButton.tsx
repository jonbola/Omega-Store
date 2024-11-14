import { ColorValue, DimensionValue, FlexAlignType, Image, ImageSourcePropType, TouchableOpacity } from "react-native";

type IconButtonProps = {
    iconSource: ImageSourcePropType;
    boxStyle?: {
        width?: DimensionValue;
        height?: DimensionValue;
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

export function IconButton(props: IconButtonProps) {
    return (
        <TouchableOpacity
            style={{
                borderWidth: props.boxStyle?.borderWidth,
                borderColor: props.boxStyle?.borderColor,
                borderRadius: props.boxStyle?.borderRadius,
                alignSelf: props.align?.alignSelf,
                ...props.align?.margin
            }}
            onPress={props.function?.onPress}
            onLongPress={props.function?.onLongPress}
            delayLongPress={props.function?.delayLongPress}
            disabled={props.function?.disabled}>
            <Image
                source={props.iconSource}
                style={{
                    width: props.boxStyle?.width,
                    height: props.boxStyle?.height
                }} />
        </TouchableOpacity>
    );
}