import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type FunctionProps = {
    navigator: NativeStackNavigationProp<any>;
    pageName: string;
}

export function navigateTo(props: FunctionProps) {
    return props.navigator.navigate(props.pageName);
}