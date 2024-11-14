import { ColorValue, Platform, StatusBar, View } from "react-native";

type StatusBarBoxProps = {
    backgroundColor: ColorValue;
}

export function StatusBarBox(props: StatusBarBoxProps) {
    return (
        <View
            style={{
                paddingTop: Platform.OS == "android"
                    ? StatusBar.currentHeight : 0,
                backgroundColor: props.backgroundColor
            }} />
    );
}