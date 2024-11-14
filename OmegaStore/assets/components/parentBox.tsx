import { ReactNode } from "react"
import { ColorValue, DimensionValue, FlexAlignType, View, ViewStyle } from "react-native";

type ParentBoxProps = {
    children?: ReactNode;
    boxStyle?: {
        width?: DimensionValue;
        height?: DimensionValue;
        backgroundColor?: ColorValue;
    }
    alignChild?: {
        flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
        justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
        alignItems?: FlexAlignType;
    }
    alignBox?: {
        alignSelf?: "auto" | FlexAlignType;
        margin?: ViewStyle;
    }
}

export default function ParentBox(props: ParentBoxProps) {
    return (
        <View
            style={{
                width: props.boxStyle?.width,
                height: props.boxStyle?.height,
                backgroundColor: props.boxStyle?.backgroundColor,
                flexDirection: props.alignChild?.flexDirection,
                justifyContent: props.alignChild?.justifyContent,
                alignItems: props.alignChild?.alignItems,
                alignSelf: props.alignBox?.alignSelf,
                ...props.alignBox?.margin
            }}>
            {props.children}
        </View>
    );
}