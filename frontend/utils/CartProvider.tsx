"use client"
import { Product } from "@/types";
import { createContext, useContext, useState } from "react";

const LOCAL_STORAGE_KEY = "CAPPUTEENO_CART";
import { PropsWithChildren } from "react";


export type CartProviderReturn = {
    products: Product[];
    addQuantity: (productId: string, quantity: number) => string;
    removeQuantity: (productId: string, quantity: number) => string;
    removeFromCart: (product: Product) => void;
    addToCart: (product: Product, quantity: number) => void;
    quantityItemsOnCart: number;
}


export const CartContext = createContext({} as CartProviderReturn);

export const CartProvider = ({children} : PropsWithChildren) => {
    const [cartProducts, setCartProducts] = useState(() => {
        const storage = localStorage.getItem(LOCAL_STORAGE_KEY);        
        if(storage){
            return JSON.parse(storage) as Product[]
        }
        return [];
    });
        
    const addToCart = (product: Product, quantity: number) => {        
        const curr = cartProducts?.find(currProduct => currProduct.id === product.id); 
        if(curr){
            return addQuantity(curr.id, 1);
        }
        const newCart = [
            ...cartProducts,
            {...product,
            quantity }
        ];
        setCartProducts(newCart)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCart))
    }

    const replaceCart = (products: Product[]) => {
        setCartProducts(products);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([
            ...products
        ]))
    }

    const removeFromCart = (product: Product) => {        
        if(!cartProducts) return console.warn('no items found on cart');
        const newItems = cartProducts.filter((currProduct) => currProduct.id !== product.id);
        replaceCart(newItems);
    }

    const addQuantity = (productId: string, quantity: number): string => {
        return modifyCart(productId, quantity)
    }

    const removeQuantity = (productId: string, quantity:number): string => {
        return modifyCart(productId, quantity * - 1)
    }

    const modifyCart = (productId: string, quantity: number) => {        
        const curr = cartProducts.find(product => product.id === productId);
        if(!curr) return console.warn('Product does not exists on cart');
        const newQuantity = Number(curr.quantity) + quantity;        
        if(Number(curr.quantity) + quantity <=0 ){
           removeFromCart(curr);
           return "Produto removido do carrinho";
        }        
        if(newQuantity > 10){
            return "Não é possivel aumentar a quantidade desse produto no carrinho"
        }        
        replaceCart(cartProducts.map((p) => {
            if(p.id === curr.id){
                return {...p, quantity: newQuantity}
            }
            return p
        }));
        return "Produto atualizado";
    }
    
    const quantityItemsOnCart = cartProducts.reduce((prev,next) => Number(next.quantity) + prev, 0)

    
    return(<CartContext.Provider value={{
        products: cartProducts,
        addQuantity,
        removeQuantity,
        removeFromCart,
        addToCart,
        quantityItemsOnCart
    }}>{children}</CartContext.Provider>)
    
 
}

export function useCart() {
    return useContext(CartContext);
  }