"use client"

import { useCart } from "@/providers/CartProvider";
import { ShoppingBag } from "lucide-react"

export const Bag = () => {
    const { quantityItemsOnCart } = useCart();    
    return(
    <a href="/cart" className="cart">
        <ShoppingBag />
        <span>{quantityItemsOnCart}</span>
    </a>)
}