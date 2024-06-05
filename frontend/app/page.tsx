import Container from "@/components/Container";
import { HomePage } from "./styles";
import { FilterProducts } from "@/components/FilterProducts";

import { Suspense } from "react";
import { ListProductsLoader } from "@/components/ListProductsLoader";
import ListProducts from "@/components/ListProducts";


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    sort?: string;
    field?: string;
    page?: string;
    category?: string;
    term?: string;
  };
}) {

  const currentPage = Number(searchParams?.page) || 0;
  const currentOrder = searchParams?.sort;
  const currentField = searchParams?.field;
  const currentCategory = searchParams?.category;
  const currentTerm = searchParams?.term;

  const suspenseKey = JSON.stringify(searchParams);
  
  return (
    <HomePage>      
      <Container>
        <FilterProducts/>
        <Suspense key={suspenseKey} fallback={<ListProductsLoader/>}>
          <ListProducts            
            currentTerm={currentTerm} 
            currentField={currentField} 
            currentCategory={currentCategory} 
            currentOrder={currentOrder} 
            currentPage={currentPage}
          />
        </Suspense>
      </Container>
    </HomePage>
  )
}
