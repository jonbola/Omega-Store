import Product from "@/data/models/product";
import { useProductContext } from "@/data/providers/product";

export function topSaleProductList(topIndex: number): Product[] {
    const { productList } = useProductContext();

    return productList.sort((a, b) => b._sale - a._sale).slice(0, topIndex);
}