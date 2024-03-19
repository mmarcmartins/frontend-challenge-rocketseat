'use client'

import getAllProducts from "@/queries/getAllProducts";
import { ListProductsStyles } from "./styles";
import { SmallCardProduct } from "../CardProduct/SmallCardProduct";
import { SmallProduct } from "@/types";

import { useQuery } from '@tanstack/react-query';
import { GraphQLClient } from "@/client/Graphql";

export const ListProducts = () => {
  
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: async () =>
    GraphQLClient.request(        
        getAllProducts,
        { page: 1 },
      ),
  });
    
  const products = data?.allProducts;
  
  if(!products){
    return null;
  }

  return(
      <ListProductsStyles>
        {products.map(product => (
          <SmallCardProduct key={product?.id} product={product as SmallProduct}/>
        ))}
      </ListProductsStyles>
  )
};