import { ProductLayout } from "@/components/Product";
import HydratedProduct from "./Hydrate";
import { Suspense } from "react";
import { ListProductsLoader } from "@/components/ListProductsLoader";

export default async function Page({ params }: { params: { id: string } }){
  const {id} = params;  
  
  return(
    <Suspense fallback={<ListProductsLoader/>}>
    <HydratedProduct productId={id}>
      <ProductLayout productId={id}/>  
    </HydratedProduct>
    </Suspense>
  );
};