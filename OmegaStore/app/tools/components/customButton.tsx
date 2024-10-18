import { Button, ColorValue, DimensionValue, GestureResponderEvent, View } from "react-native";

type CustomButtonProps = {
    title: string;
    width: DimensionValue;
    height: DimensionValue;
    onPress: (event: GestureResponderEvent) => void;
    color: ColorValue;
}

export default function CustomButton(props: CustomButtonProps) {
    return (
        <View
            style={{
                width: props.width,
                height: props.height
            }}>
            <Button
                title={props.title}
                onPress={props.onPress}
                color={props.color} />
        </View>
    );
}