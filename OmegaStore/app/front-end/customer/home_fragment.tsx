import { IconButton } from "@/assets/components/iconButton";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { BasicColors } from "@/assets/colors/basic_colors";
import { IconSources, ImageSources } from "@/assets/resources/resource_directories";
import Container from "@/assets/components/container";
import { ImageBox } from "@/assets/components/imageBox";

type HomeFragmentProps = {
    isLogged: boolean;
}

export default function HomeFragment(fragmentProps: HomeFragmentProps) {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    let [topLeftHeaderIconButtonSource, setIconSource] = useState(IconSources.ic_login);
    useEffect(() => {
        if (fragmentProps.isLogged) {
            setIconSource(IconSources.ic_shopping_cart);
        }
        else {
            setIconSource(IconSources.ic_login);
        }
    })

    return (
        <Container containerStyle={{
            flex: 1,
            backgroundColor: BasicColors.white
        }}>
            <Container //Header sector
                containerStyle={{
                    width: "100%",
                    backgroundColor: BasicColors.white,
                    margin: { marginVertical: 10 }
                }}
                childrenStyle={{
                    flexDirection: "row",
                    justifyContent:"center",
                    alignItems: "center"
                }}>
                <IconButton
                    iconSource={IconSources.ic_drawer}
                    iconStyle={{ width: 20, height: 20 }}
                    containerStyle={{ flex: 1 }}
                    function={{ onPress: () => navigation.dispatch(DrawerActions.toggleDrawer) }} />
                <ImageBox
                    imageSource={ImageSources.img_store_logo}
                    imageStyle={{ width: 70, height: 70 }} />
                <IconButton
                    iconSource={topLeftHeaderIconButtonSource}
                    iconStyle={{ width: 30, height: 30 }}
                    containerStyle={{ flex: 1 }}
                    function={{
                        onPress: () => {
                            if (fragmentProps.isLogged) {

                            }
                            else { return navigation.navigate("login") }
                        }
                    }} />
            </Container>
        </Container>
    );
}