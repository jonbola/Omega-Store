import Product from "@/data/models/product";
import { useProductContext } from "@/data/providers/product";

export function filterProductList(searchText: string): Product[] {
    const { productList } = useProductContext();

    return productList.filter((product) => product._name.toLowerCase()
        .includes(searchText.toLowerCase()))
        .map((product, index) => ({ ...product, index: index + 1 }));
}