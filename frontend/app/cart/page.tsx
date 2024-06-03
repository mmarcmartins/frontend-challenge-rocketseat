'use client'

import Link from "next/link";
import { CartContainer, CartDetails, CartFlex, CartList } from "./styles";
import { Undo2 } from "lucide-react";

import { formatCents } from "@/utils/CurrencyFormatter";
import { ExpandedCardProduct } from "@/components/CardProduct/ExpandedCardProduct";
import { useCart } from "@/providers/CartProvider";
import { ResponseDetail } from "@/providers/CartProvider/types";

import { Product } from "@/types";
import { useSnackbar } from "@/hooks/useSnackbar";
import { CheckoutDetails } from "@/components/CheckoutDetails";

export default function Page(){
    const { products, addQuantity, removeQuantity, quantityItemsOnCart ,removeFromCart} = useCart();  
    const {openSnackbar} = useSnackbar();
    
    const totalCartValue = products.reduce((prev,next) => next.price_in_cents * Number(next.quantity) + prev, 0);    
    const totalCartValueFormatted = formatCents(totalCartValue);
    
    const getCartDescription = () => {
        if(quantityItemsOnCart === 0) return <span className="cart_total">Não há produtos no carrinho</span>
        if(quantityItemsOnCart === 1) return <span className="cart_total">Total (1 Produto) <strong>{totalCartValueFormatted}</strong></span>
        return <span className="cart_total">Total ({quantityItemsOnCart} Produtos) <strong>{totalCartValueFormatted}</strong></span>
    }       
    
    const handleCartAction = ({detail, success}: ResponseDetail) => {
        openSnackbar({message: detail, variant: success ? "SUCCESS" : "ERROR"})
    }

    return(
    <CartContainer as="section">
        <Link href="/" className="back-button">
            <div className="icon-holder">
                <Undo2 width={20} height={20} />
            </div>
            <span>Voltar</span>
        </Link>
        <CartFlex>
            <CartDetails>            
                <h1 className="cart_title">SEU CARRINHO</h1>
                {getCartDescription()}
                {products.length > 0 && (
                    <CartList>
                        {products.map(product => (
                            <ExpandedCardProduct 
                            addQuantity={(productId: string, quantity: number) => addQuantity(productId,quantity)} 
                            removeFromCart={(product: Product) => handleCartAction(removeFromCart(product))} 
                            removeQuantity={(productId: string, quantity: number) => removeQuantity(productId, quantity)}                             
                            key={product.id} 
                            product={product}/>
                        ))}
                    </CartList>
                )}
            </CartDetails>
            {totalCartValue > 0 && (
                <CheckoutDetails 
                totalCartValueFormatted={totalCartValueFormatted} 
                totalCartValue={totalCartValue} />
            )}
        </CartFlex>
    </CartContainer>
    );
};