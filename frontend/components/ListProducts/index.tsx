'use client'

import { useGraphQL } from "@/hooks/services/useGraphql";
import getAllProducts from "@/graphql/getAllProducts";
import { ListProductsStyles } from "./styles";
import { SmallCardProduct } from "../CardProduct/SmallCardProduct";
import { SmallProduct } from "@/types";

export const ListProducts = () => {
  
  const { data } = useGraphQL(getAllProducts, {page : 1})
    

  if(!data?.data?.allProducts){
    return null;
  }

  return(
    
      <ListProductsStyles>
        {data?.data?.allProducts?.map(product => (
          <SmallCardProduct key={product?.id} product={product as SmallProduct}/>
        ))}
      </ListProductsStyles>
  )
};