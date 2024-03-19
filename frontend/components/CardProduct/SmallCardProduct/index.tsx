import { SmallProduct } from "@/types";
import Image from "next/image";
import { SmallProductStyle } from "./styles";
import { formatCents } from "@/utils/CurrencyFormatter";
import Link from "next/link";

type SmallCardProps = {
  product: SmallProduct;
};

export const SmallCardProduct = ({product}: SmallCardProps) => {
  return(
    <SmallProductStyle>
      <Link href={`product/${product.id}`}>
      <Image width={270} height={300} alt={`Foto do produto: ${product.name}`} src={product.image_url}/>
      </Link>
      <div className="description">
        <p title={product.name} className="name">{product.name}</p>
        <hr/>
        <span className="price">{formatCents(product.price_in_cents)}</span>
      </div>
    </SmallProductStyle>

  )
};