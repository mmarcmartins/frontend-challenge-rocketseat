import Container from "@/components/Container";
import { HomePage } from "./styles";
import { FilterProducts } from "@/components/FilterProducts";
import HydratedProducts from "@/components/ListProducts/Hydrate";
import { Suspense } from "react";
import { ListProductsLoader } from "@/components/ListProductsLoader";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    sort?: string;
    field?: string;
    page?: string;
    category?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 0;
  const currentOrder = searchParams?.sort;
  const currentField = searchParams?.field;
  const currentCategory = searchParams?.field;

  return (
    <HomePage>      
      <Container>
        <FilterProducts/>
        <Suspense fallback={<ListProductsLoader/>}>
          <HydratedProducts currentField={currentField} currentCategory={currentCategory} currentOrder={currentOrder} currentPage={currentPage}/>
        </Suspense>
      </Container>
    </HomePage>
  )
}
