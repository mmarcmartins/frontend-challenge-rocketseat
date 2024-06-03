import { Product } from "@/types";

export type ResponseDetail = {
    success: boolean;
    detail: string;
}

export type CartProviderReturn = {
    products: Product[];
    addQuantity: (productId: string, quantity: number) => ResponseDetail;
    removeQuantity: (productId: string, quantity: number) => ResponseDetail;
    removeFromCart: (product: Product) => ResponseDetail;
    addToCart: (product: Product, quantity: number) => ResponseDetail;
    quantityItemsOnCart: number;
}