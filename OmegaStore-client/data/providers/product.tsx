import Product from "@/data/models/product";
import React, { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../api_url";

type ProductContextProps = {
    productList: Product[];
    isLoading: boolean;
    refetch: () => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [productList, setProductList] = useState<Product[]>([]);
    const [isLoading, setLoadingState] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL + "ProductManager/Index?handler=PullRecords");

            if (!response.ok) {
                throw new Error("Cannot load product records from web server");
            }

            const result = await response.json();
            console.log("Fetched records:", result);
            setLoadingState(true);
            setProductList(result);
            setLoadingState(false);
        }
        catch (err) {
            console.error("Error: ", err);
        }
    };

    return (
        <ProductContext.Provider value={{ productList, isLoading, refetch: fetchData }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("Method useProductContext must be in ProductProvider");
    }

    return context;
}