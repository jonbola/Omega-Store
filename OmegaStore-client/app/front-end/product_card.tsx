import { Image, Text, TouchableOpacity, View } from "react-native";
import { textStyle } from "@/assets/values/styleSheet";
import { Icons } from "@/assets/resources/resource_directories";
import Product from "../back-end/models/product";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamsList } from "../_layout";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ThemeColors } from "@/assets/colors/theme_colors";

type ProductCartProps = {
    isAdmin: boolean;
    index: number;
    product: Product;
}

type NavigationProps = NativeStackNavigationProp<RootParamsList>;
type RouteProps = RouteProp<RootParamsList,"CustomerFrame">;

export default function ProductCard(cardProps: ProductCartProps) {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<RouteProps>();

    return (
        <TouchableOpacity
            children={
                <View style={{
                    flexDirection: "row", justifyContent: "flex-start", alignItems: "center",
                    height: 75, backgroundColor: ThemeColors.navyBlue,
                    marginVertical: 5
                }}>
                    <View style={{
                        width: 30,
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Text
                            style={textStyle.normal}
                            children={cardProps.index} />
                    </View>
                    <Image
                        style={{
                            width: 50, height: 50,
                            marginEnd: 10
                        }}
                        source={cardProps.product._image} />
                    <View style={{
                        flex: 2,
                        flexDirection: "column", justifyContent: "flex-start"
                    }}>
                        <Text
                            style={textStyle.normal}
                            children={cardProps.product._name} />
                        <Text
                            style={textStyle.normal}
                            children={cardProps.product._price} />
                    </View>
                    {
                        !cardProps.isAdmin ?
                            null
                            :
                            <View style={{
                                flex: 1,
                                flexDirection: "row", justifyContent: "flex-start", alignItems: "center",
                            }}>
                                <TouchableOpacity
                                    style={{ marginStart: 10 }}
                                    children={
                                        <Image
                                            style={{ width: 30, height: 30 }}
                                            source={Icons.edit} />
                                    } />
                                <TouchableOpacity
                                    style={{ marginHorizontal: 10 }}
                                    children={
                                        <Image
                                            style={{ width: 25, height: 25 }}
                                            source={Icons.delete} />
                                    } />
                            </View>
                    }
                </View>
            }
            onPress={() => navigation.navigate(
                "ProductDetailPage",
                { isLogged: route.params.isLogged, product: cardProps.product }
            )} />
    );
}