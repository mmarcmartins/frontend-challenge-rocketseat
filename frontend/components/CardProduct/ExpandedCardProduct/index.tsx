import { Product } from "@/types";
import { Card } from "./style";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { formatCents } from "@/utils/CurrencyFormatter";

type ExpandedCardProductProps = {
    product: Product
}

export const ExpandedCardProduct = ({product}: ExpandedCardProductProps) => {
    return (
    <Card>
        <Image width={256} height={211} alt={`Foto do produto: ${product.name}`} src={product.image_url}/>
        <div className="info">
            <div className="info_header">
                <h3>{product.name}</h3>
                <Trash2 width={24} height={24}/>
            </div>
            <p>{product.description}</p>
            <div className="info_footer">
                <input type="text" value={product.quantity}/>
                <span className="price">{formatCents(product.price_in_cents)}</span>
            </div>
        </div>
    </Card>
    )
};