import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PageProps = {
    navigation: NativeStackNavigationProp<any>;
    pageName: string;
}

export const NavigateTo = (props: PageProps) => {
    return () =>
        props.navigation.navigate(props.pageName)
}