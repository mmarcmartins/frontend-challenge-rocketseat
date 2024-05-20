import { Product } from "@/types";
import { Card } from "./style";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { formatCents } from "@/utils/CurrencyFormatter";
import { CartProviderReturn } from "@/utils/CartProvider";

type ExpandedCardProductProps = {
    product: Product
    
} & Pick<CartProviderReturn, 'addQuantity' | 'removeQuantity' | 'removeFromCart'>; 

export const ExpandedCardProduct = ({product, removeQuantity, addQuantity, removeFromCart}: ExpandedCardProductProps) => {    
    return (
    <Card>
        <Image className="card_image" width={256} height={211} alt={`Foto do produto: ${product.name}`} src={product.image_url}/>
        <div className="info">
            <div className="info_header">
                <h3 className="info_header__title">{product.name}</h3>
                <button className="info_header__action" onClick={() => removeFromCart(product)}>
                    <Trash2 color="#DE3838" width={24} height={24}/>
                </button>
            </div>
            <p className="info_description">{product.description}</p>
            <div className="info_footer">
                <div className="info_footer__counter">
                    <button className="invisible_button" onClick={() => removeQuantity(product.id, 1)}>
                        <Minus width={20} height={20}/>
                    </button>
                    <input disabled className="info_footer__counter___input" type="text" value={product.quantity}/>                    
                    <button className="invisible_button" onClick={() => addQuantity(product.id, 1)}>
                        <Plus width={20} height={20}/>
                    </button>                    
                </div>
                <span className="info_footer__price">{formatCents(product.price_in_cents)}</span>
            </div>
        </div>
    </Card>
    )
};