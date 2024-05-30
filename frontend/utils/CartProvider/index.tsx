"use client"
import { Product } from "@/types";
import { createContext, useContext, useState } from "react";

const LOCAL_STORAGE_KEY = "CAPPUTEENO_CART";
import { PropsWithChildren } from "react";
import { CartProviderReturn, ResponseDetail } from "./types";

export const CartContext = createContext({} as CartProviderReturn);

export const CartProvider = ({children} : PropsWithChildren) => {
    const [cartProducts, setCartProducts] = useState(() => {
        if (typeof localStorage !== 'undefined') {
        const storage = localStorage.getItem(LOCAL_STORAGE_KEY);        
            if(storage){
                return JSON.parse(storage) as Product[]
            }
        }
        return [];
    });
        
    const addToCart = (product: Product, quantity: number) : ResponseDetail => {        
        const curr = cartProducts?.find(currProduct => currProduct.id === product.id); 
        if(curr){
            return addQuantity(curr.id, 1);
        }
        try {
            const newCart = [
                ...cartProducts,
                {...product,
                quantity }
            ];
            setCartProducts(newCart)
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCart))
            return {
                detail: "Produto adicionado no carrinho !",
                success: true,
            };
        } catch (e) {            
            console.warn("Add to cart did not work properly", e);
            return {
                detail: "Não foi possivel adicionar produto no carrinho :(",
                success: false,
            };
        }
    }

    const replaceCart = (products: Product[]) => {
        try{
            setCartProducts(products);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([
                ...products
            ]))
        } catch (e) {
            console.warn('Replace cart did not work',e);
        }
    }

    const removeFromCart = (product: Product) : ResponseDetail => {        
        if(!cartProducts) {
            console.warn('no items found on cart');            
            return {
                detail: "Não foi possivel remover produto do carrinho",
                success: false,
            };
        }
        try {

            const newItems = cartProducts.filter((currProduct) => currProduct.id !== product.id);
            replaceCart(newItems);        
            return {
                detail: "Produto removido do carrinho",
                success: true,
            };
        } catch (e) {
            console.warn("Remove from cart did not work properly", e);
            return {
                detail: "Não foi possivel remover produto do carrinho",
                success: false,
            };   
        }        
    }

    const addQuantity = (productId: string, quantity: number): ResponseDetail => {
        return modifyCart(productId, quantity)
    }

    const removeQuantity = (productId: string, quantity:number): ResponseDetail => {
        return modifyCart(productId, quantity * - 1)
    }

    const modifyCart = (productId: string, quantity: number) : ResponseDetail => {        
        const curr = cartProducts.find(product => product.id === productId);
        if(!curr) {
            console.warn('Product does not exists on cart');   
            return {
                detail: "Produto não existe no carrinho !",
                success: false,
            };
        }
        const newQuantity = Number(curr.quantity) + quantity;        
        if(Number(curr.quantity) + quantity <=0 ){
           return removeFromCart(curr);           
        }        
        if(newQuantity > 10){
            return {
                detail: "Não é possivel adicionar mais quantidade desse produto no carrinho!",
                success: false,
            };
        }        
        replaceCart(cartProducts.map((p) => {
            if(p.id === curr.id){
                return {...p, quantity: newQuantity}
            }
            return p
        }));
        return {
            detail: "Produto atualizado!",
            success: true,
        };
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