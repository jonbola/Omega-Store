import { DimensionValue, Image, ImageSourcePropType } from "react-native";
import { AlignSelf } from "../values";

type CustomImageProps = {
    source: ImageSourcePropType;
    width: DimensionValue;
    height: DimensionValue;
    alignSelf: AlignSelf;
}

export default function CustomImage(props: CustomImageProps) {
    return (
        <Image
            source={props.source}
            style={{
                width: props.width,
                height: props.height,
                alignSelf: props.alignSelf
            }} />
    );
}