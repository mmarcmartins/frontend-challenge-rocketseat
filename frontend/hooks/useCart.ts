"use client"
import { Product } from "@/types";

const LOCAL_STORAGE_KEY = "CAPPUTEENO_CART";

export const useCart =  () => {    
    const getSafeCart = () => {
        const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(storage){
            return JSON.parse(storage) as Product[]
        }
        return [];
    }
    
    const addToCart = (product: Product, quantity: number) => {
        const allItems = getSafeCart();
        const curr = allItems?.find(currProduct => currProduct.id === product.id);
        
        if(curr){
            return addQuantity(curr.id, 1);
        }

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([
            ...getSafeCart(),
            {...product,
            quantity }
        ]))
    }

    const replaceCart = (products: Product[]) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([
            ...products
        ]))
    }

    const removeFromCart = (product: Product) => {
        const allItems = getSafeCart();
        if(!allItems) return console.warn('no items found on cart');
        const newItems = allItems.filter((currProduct) => currProduct.id !== product.id);
        replaceCart(newItems);
    }

    const addQuantity = (productId: string, quantity: number) => {
        return modifyCart(productId, quantity)
    }

    const removeQuantity = (productId: string, quantity:number) => {
        return modifyCart(productId, quantity * - 1)
    }

    const modifyCart = (productId: string, quantity: number) => {
        const allItems = getSafeCart();        
        const curr = allItems.find(product => product.id === productId);
        if(!curr) return console.warn('Product does not exists on cart');
        const newQuantity = Number(curr.quantity) + quantity;        
        if(Number(curr.quantity) + quantity <=0 ){
           removeFromCart(curr);
           return "Produto removido do carrinho";
        }        
        if(newQuantity > 10){
            return "Não é possivel aumentar a quantidade desse produto no carrinho"
        }
        removeFromCart(curr);
        addToCart(curr, newQuantity);
        return "Produto atualizado";
    }

    return {
        addQuantity,
        removeQuantity,
        removeFromCart,
        addToCart
    }
    
}