import { ColorValue, DimensionValue, FlexAlignType, Image, ImageSourcePropType, View } from "react-native";
import { MarginType } from "../values/marginType";
import { PaddingType } from "../values/paddingType";

type ImageBoxProps = {
    imageSource: ImageSourcePropType;
    imageStyle?: {
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
        justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
        alignSelf?: "auto" | FlexAlignType;
        alignItems?: FlexAlignType;
        margin?: MarginType;
        padding?: PaddingType;
    }
}

export function ImageBox(props: ImageBoxProps) {
    return (
        <View style={{
            flex: props.containerStyle?.flex,
            flexGrow: props.containerStyle?.flexGrow,
            flexShrink: props.containerStyle?.flexShrink,
            width: props.containerStyle?.width,
            height: props.containerStyle?.height,
            borderWidth: props.containerStyle?.borderWidth,
            borderColor: props.containerStyle?.borderColor,
            borderRadius: props.containerStyle?.borderRadius,
            justifyContent: props.containerStyle?.justifyContent,
            alignSelf: props.containerStyle?.alignSelf,
            alignItems: props.containerStyle?.alignItems,
            ...props.containerStyle?.margin,
            ...props.containerStyle?.padding
        }}>
            <Image
                source={props.imageSource}
                style={{
                    width: props.imageStyle?.width,
                    height: props.imageStyle?.height
                }} />
        </View>
    );
}