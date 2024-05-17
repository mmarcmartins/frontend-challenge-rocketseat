import Link from "next/link";
import { CartContainer, CartDetails, CartList } from "./styles";
import { Undo2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatCents } from "@/utils/CurrencyFormatter";


export default function Page(){
    const { getSafeCart } = useCart();
    const products = getSafeCart();
    const totalCartValue = formatCents(products.reduce((prev,next) => next.price_in_cents + prev, 0));

    const getCartDescription = () => {
        if(products.length === 0) return <span>Não há produtos no carrinho</span>
        if(products.length > 1) return <span>Total (1 Produto) <strong>${totalCartValue}</strong></span>
        return <span>Total (${products.length} Produtos) <strong>${totalCartValue}</strong></span>
    }   

    return(
    <CartContainer as="section">
        <CartDetails>
            <Link href="/" className="back-button">
                <div className="icon-holder">
                    <Undo2 width={20} height={20} />
                </div>
                <span>Voltar</span>
            </Link>
            <h1>SEU CARRINHO</h1>
            {getCartDescription()}
            {products.length > 0 && (
                <CartList>

                </CartList>
            )}
        </CartDetails>
    </CartContainer>
    );
};