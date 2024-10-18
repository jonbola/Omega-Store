import { ReactNode } from "react"
import { ColorValue, DimensionValue, View } from "react-native";
import { AlignItems, FlexDirection, JustifyContent } from "../values";

type CustomBoxProps = {
    children: ReactNode;
    width: DimensionValue;
    height: DimensionValue;
    backgroundColor: ColorValue;
    flexDirection: FlexDirection;
    justifyContent: JustifyContent;
    alignItems: AlignItems;
}



export default function CustomBox(props: CustomBoxProps) {
    return (
        <View
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: props.backgroundColor,
                flexDirection: props.flexDirection,
                justifyContent: props.justifyContent,
                alignItems: props.alignItems
            }}>
            {props.children}
        </View>
    );
}