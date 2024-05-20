'use client'

import Link from "next/link";
import { CartCheckout, CartContainer, CartDetails, CartFlex, CartList, PaymentButton } from "./styles";
import { Undo2 } from "lucide-react";
import { useCart } from '@/utils/CartProvider';
import { formatCents } from "@/utils/CurrencyFormatter";
import { ExpandedCardProduct } from "@/components/CardProduct/ExpandedCardProduct";

export default function Page(){
    const { products, addQuantity, removeQuantity, quantityItemsOnCart ,removeFromCart} = useCart();  
    
    const totalCartValue = products.reduce((prev,next) => next.price_in_cents * Number(next.quantity) + prev, 0);    
    const totalCartValueFormatted = formatCents(totalCartValue);
    
    const totalPurchase = formatCents(Number(totalCartValue) > 90000 ? totalCartValue : Number(totalCartValue) + 4000);
    
    const getCartDescription = () => {
        if(quantityItemsOnCart === 0) return <span className="cart_total">Não há produtos no carrinho</span>
        if(quantityItemsOnCart === 1) return <span className="cart_total">Total (1 Produto) <strong>{totalCartValueFormatted}</strong></span>
        return <span className="cart_total">Total ({quantityItemsOnCart} Produtos) <strong>{totalCartValueFormatted}</strong></span>
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
                            addQuantity={addQuantity} 
                            removeFromCart={removeFromCart} 
                            removeQuantity={removeQuantity} 
                            key={product.id} 
                            product={product}/>
                        ))}
                    </CartList>
                )}
            </CartDetails>
            {totalCartValue > 0 && (
            <CartCheckout>
                <h3>RESUMO DO SEU PEDIDO</h3>
                <div className="checkout_prices">
                    <div className="checkout_prices__value">
                        <span>Subtotal de produtos</span>
                        <span>{totalCartValueFormatted}</span>
                    </div>
                    <div className="checkout_prices__value">
                        <span>Entrega</span>
                        {totalCartValue > 90000 ? (<span>R$ 0,00</span>) : (<span>R$ 40,00</span>)}
                    </div>
                    <hr/>
                    <div className="checkout_prices__value">
                        <span><strong>Total</strong></span>
                        <span><strong>{totalPurchase}</strong></span>
                    </div>
                    <PaymentButton>
                        Finalizar a compra
                    </PaymentButton>
                </div>
            </CartCheckout>
        )}
        </CartFlex>
    </CartContainer>
    );
};