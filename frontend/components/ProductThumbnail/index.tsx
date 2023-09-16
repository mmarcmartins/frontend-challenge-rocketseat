import Image from "next/image";
import { ProductThumb } from "./style";

type Product = {
  image: string;
  name: string;
  price: number;
};

export const ProductThumbnail = ({image,name,price}: Product) => {
  return(
    <ProductThumb>
      <Image src={image} width='256' height='300' alt={name} />
      <span className="productName">{name}</span>
      <hr/>
      <span className="productPrice">{price}</span>
    </ProductThumb>

  );
};