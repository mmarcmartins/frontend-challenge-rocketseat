'use client'

import { useGraphQL } from "@/hooks/services/useGraphql";
import getAllProducts from "@/graphql/getAllProducts";

export const ListProducts = () => {
  
  const { data } = useGraphQL(getAllProducts, {page : 1})
  console.log(data);
  return <></>
};