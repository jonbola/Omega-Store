import { ColorValue, Platform, StatusBar, View } from "react-native";

type StatusBarBoxProps = {
    backgroundColor: ColorValue;
}

export default function StatusBarBox(props: StatusBarBoxProps) {
    return (
        <View
            style={{
                backgroundColor: props.backgroundColor,
                height: (Platform.OS == "android") ?
                    StatusBar.currentHeight : 18
            }} />
    );
}