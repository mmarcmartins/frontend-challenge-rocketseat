
import { formatCents } from "@/utils/CurrencyFormatter";
import { CartCheckout, PaymentButton } from "./style";

type CheckoutDetailsProps = {
    totalCartValueFormatted: string;
    totalCartValue: number;
};

export const CheckoutDetails = ({totalCartValue,totalCartValueFormatted}: CheckoutDetailsProps) => {
    const totalPurchase = formatCents(Number(totalCartValue) > 90000 ? totalCartValue : Number(totalCartValue) + 4000);
    return(
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
    );
};