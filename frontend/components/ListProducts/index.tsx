'use client'
import getAllProducts from "@/queries/getAllProducts";
import { ListProductsStyles } from "./styles";
import { SmallCardProduct } from "../CardProduct/SmallCardProduct";
import { SmallProduct } from "@/types";

import { useSuspenseQuery } from '@tanstack/react-query';
import { GraphQLClient } from "@/client/Graphql";
import { useSearchParams } from "next/navigation";
import { paramsToQuery } from "@/utils/mountParamsToQuery";

export const ListProducts = () => {
  const searchParams = useSearchParams();
  const params = paramsToQuery(searchParams);
  const suspenseKey = JSON.stringify(params);
  
  const { data } = useSuspenseQuery({
    queryKey: ['products', suspenseKey],
    queryFn: async () =>
    GraphQLClient.request(        
        getAllProducts,
        params,
      ),   
  });

  const products = data.allProducts;

  if(products?.length === 0){
    return <h1>Nenhum produto foi encontrado com esse filtro :(</h1>
  }

  return(
      <ListProductsStyles>
        {products?.map(product => (
          <SmallCardProduct key={product?.id} product={product as SmallProduct}/>
        ))}
      </ListProductsStyles>    
  )
};