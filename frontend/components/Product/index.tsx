'use client'
import { useSuspenseQuery } from "@tanstack/react-query";
import { GraphQLClient } from "@/client/Graphql";
import getProduct from "@/queries/getProduct";
import { ShoppingBag, Undo2 } from "lucide-react";
import Link from "next/link";
import { CartButton, ProductContainer, ProductDescription } from "./styles";
import Image from "next/image";
import { formatCents } from "@/utils/CurrencyFormatter";
import { useCart } from '@/utils/CartProvider';
import { Product } from "@/types";
import { useSnackbar } from "../Snackbar/useSnackbar";
import { useThrottle } from "@/hooks/useThrottle";

export const ProductLayout = ({productId}: {productId: string}) => { 
  const { addToCart } = useCart(); 
  const { openSnackbar } = useSnackbar();
  const { data } = useSuspenseQuery({
    queryKey: ['product', productId],
    queryFn: async () =>
    GraphQLClient.request(        
        getProduct,
        {id: productId},
      ),   
  });

 const product = data.Product;

 const onAddToCart = (product: Product) => {
   const {detail, success} = addToCart(product, 1);
   openSnackbar({message : detail, variant: success ? "SUCCESS" : "ERROR"});
 }

 const debouncedCart = useThrottle(onAddToCart);

 if(!product){
   return <h1>No product find with this id</h1>
 }
 return (
  <ProductContainer as="section">
    <Link href="/" className="back-button">
      <div className="icon-holder">
        <Undo2 width={20} height={20} />
      </div>
      <span>Voltar</span>
    </Link>
    <ProductDescription>
      <Image className="product_image" width={640} height={580} alt={`Foto do produto: ${product.name}`} src={product.image_url}/>
      <div className="description">
        <span className="category">{product.category}</span>
        <h1 className="title">{product.name}</h1>
        <span className="price">{formatCents(product.price_in_cents)}</span>
        <span className="info">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</span>
        <h2 className="description_title">Descrição</h2>
        <p className="description_content">{product.description}</p>
        <CartButton onClick={() => debouncedCart(product)}><ShoppingBag /><span>ADICIONAR AO CARRINHO</span></CartButton>        
      </div>
    </ProductDescription>
  </ProductContainer>
);
}