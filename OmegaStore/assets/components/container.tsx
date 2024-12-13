import { ReactNode } from "react"
import { ColorValue, DimensionValue, FlexAlignType, View } from "react-native";
import { MarginType } from "../values/marginType";
import { PaddingType } from "../values/paddingType";

type ContainerProps = {
    children?: ReactNode;
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
    }
    childrenStyle?: {
        flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
        justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
        alignItems?: FlexAlignType;
        padding?: PaddingType;
    }
}

export default function Container(props: ContainerProps) {
    return (
        <View
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
                flexDirection: props.childrenStyle?.flexDirection,
                justifyContent: props.childrenStyle?.justifyContent,
                alignItems: props.childrenStyle?.alignItems,
                alignSelf: props.containerStyle?.alignSelf,
                ...props.containerStyle?.margin,
                ...props.childrenStyle?.padding
            }}>
            {props.children}
        </View>
    );
}