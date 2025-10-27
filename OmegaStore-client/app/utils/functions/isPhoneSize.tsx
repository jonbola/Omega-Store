import { Dimensions } from "react-native";

export default function isPhoneSize(): boolean {
    const deviceWidth = Dimensions.get("window").width;

    return (deviceWidth >= 320 && deviceWidth <= 768);
}