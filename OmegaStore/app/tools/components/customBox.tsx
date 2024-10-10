import { ReactNode } from "react"
import { ColorValue, DimensionValue, View, ViewStyle } from "react-native";
import { FlexDirection } from "../values";

type CustomBoxBaseProps = {
    children: ReactNode;
    width: DimensionValue;
    height: DimensionValue;
    backgroundColor: ColorValue;
    flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
}

type CustomBoxRowProps = CustomBoxBaseProps & {
    flexDirection: "row" | "row-reverse";
    alignItems: ViewStyle["alignItems"];
}

type CustomBoxColumnProps = CustomBoxBaseProps & {
    flexDirection: "column" | "column-reverse";
    justifyContent: ViewStyle["justifyContent"];
}

type CustomBoxProps = CustomBoxRowProps | CustomBoxColumnProps;

export default function CustomBox(props: CustomBoxProps) {
    return (
        <View
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: props.backgroundColor,
                flexDirection: props.flexDirection,
                ...("alignItems" in props
                    ? { alignItems: props.alignItems }
                    : { justifyContent: props.justifyContent })
            }}>
            {props.children}
        </View>
    );
}