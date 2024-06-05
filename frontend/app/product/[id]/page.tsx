import { ProductLayout } from "@/components/Product";
import { Suspense } from "react";
import { ListProductsLoader } from "@/components/ListProductsLoader";

import getProduct from "@/queries/getProduct";
import { GraphQLClient } from "@/client/Graphql";
import { Product } from "@/types";

async function getCurrentProduct(productId: string) {  
  const res = await GraphQLClient.request(        
    getProduct,        
    {id: productId},
  );
   
  if (!res.Product) {    
    throw new Error(`Failed to fetch data - product ${productId}`);
  }
 
  return res;
}

export default async function Page({ params }: { params: { id: string } }){
  const {id} = params;  
  const data = await getCurrentProduct(id);
  const product = data?.Product as Product;
  
  return(
    <Suspense fallback={<ListProductsLoader/>}>    
      <ProductLayout product={product}/>      
    </Suspense>
  );
};