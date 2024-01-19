import { SmallProduct } from "@/types";
import Image from "next/image";
import { SmallProductStyle } from "./styles";
import { formatCents } from "@/utils/CurrencyFormatter";

type SmallCardProps = {
  product: SmallProduct;
};

export const SmallCardProduct = ({product}: SmallCardProps) => {
  return(
    <SmallProductStyle>
      <Image width={270} height={300} alt={`Foto do produto: ${product.name}`} src={product.image_url}/>
      <div className="description">
        <p className="name">{product.name}</p>
        <hr/>
        <span className="price">{formatCents(product.price_in_cents)}</span>
      </div>
    </SmallProductStyle>

  )
};