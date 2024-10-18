import CustomBox from "@/app/tools/components/customBox";
import CustomImage from "@/app/tools/components/customImage";
import CustomText from "@/app/tools/components/customText";
import StatusBarBox from "@/app/tools/components/statusBarBox";
import { IconSources, ImageSources } from "@/app/tools/resources";
import { AlignItems, BasicColors, FlexDirection, FontFamily, FontStyle, FontWeight, JustifyContent, ThemeColors } from "@/app/tools/values";
import { AppRegistry } from "react-native";
import { BottomNavigation, PaperProvider } from "react-native-paper";
import { expo } from "@/app.json";
import { HomePage } from "./home_page";
import { SearchPage } from "./search_page";
import { FavouritePage } from "./favourites_page";
import { AccountPage } from "./account_page";
import React from "react";

const appName = expo.name;
const pageList = BottomNavigation.SceneMap({
    home: HomePage,
    search: SearchPage,
    favourite: FavouritePage,
    account: AccountPage
})

export function MainPage() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "home", title: "Home", focusedIcon: IconSources.ic_home_200px },
        { key: "search", title: "Search", focusedIcon: IconSources.ic_search_200px },
        { key: "favourite", title: "Favourite", focusedIcon: IconSources.ic_bookmark_225px },
        { key: "account", title: "Account", focusedIcon: IconSources.ic_user_200px }
    ])
    return (
        <PaperProvider>
            <StatusBarBox
                backgroundColor={BasicColors.white}>
            </StatusBarBox>

            <CustomBox // Header UI
                width={"100%"}
                height={100}
                backgroundColor={ThemeColors.ivory}
                flexDirection={FlexDirection.row}
                justifyContent={JustifyContent.space_between}
                alignItems={AlignItems.center}>
                {/* <CustomText !Place for drawer/slider from left
                    line={1}
                    value="Hello"
                    fontFamily={FontFamily.roboto}
                    fontWeight={FontWeight.bold}
                    fontStyle={FontStyle.italic}
                    fontSize={20}
                    color={BasicColors.black}
                    margin={{ marginStart: 10 }}>
                </CustomText> */}
                <CustomImage
                    source={ImageSources.img_store_logo_550px}
                    width={50}
                    height={50}>
                </CustomImage>
                <CustomImage
                    source={IconSources.ic_shopping_cart_225px}
                    width={30}
                    height={30}
                    margin={{ marginEnd: 10 }}>
                </CustomImage>
            </CustomBox>

            <BottomNavigation
                navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={pageList}>
            </BottomNavigation>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => MainPage)