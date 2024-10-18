import { DimensionValue, Image, ImageSourcePropType, ImageStyle, ViewStyle } from "react-native";

type CustomImageProps = {
    source: ImageSourcePropType;
    width: DimensionValue;
    height: DimensionValue;
    align?: ViewStyle;
    margin?: ViewStyle;
}

export default function CustomImage(props: CustomImageProps) {
    return (
        <Image
            source={props.source}
            style={{
                width: props.width,
                height: props.height,
                ...props.align as ImageStyle,
                ...props.margin as ImageStyle
            }} />
    );
}