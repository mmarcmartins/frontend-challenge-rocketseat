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

  const { data } = useSuspenseQuery({
    queryKey: ['products'],
    queryFn: async () =>
    GraphQLClient.request(        
        getAllProducts,
        params,
      ),   
  });

  const products = data.allProducts;

  return(
      <ListProductsStyles>
        {products?.map(product => (
          <SmallCardProduct key={product?.id} product={product as SmallProduct}/>
        ))}
      </ListProductsStyles>    
  )
};