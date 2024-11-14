import { Image, ImageSourcePropType, ViewStyle } from "react-native";

type BottomTabIconProps = {
    source: ImageSourcePropType;
    shadow?: ViewStyle;
}

export function BottomTabIcon(props: BottomTabIconProps) {
    return (
        <Image
            source={props.source}
            style={{
                width: 30,
                height: 30,
            }} />
    );
}