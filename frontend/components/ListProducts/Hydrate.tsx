import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { ListProducts } from '.';
import getAllProducts from '@/queries/getAllProducts';
import { GraphQLClient } from '@/client/Graphql';

import { propsToQuery } from '@/utils/mountParamsToQuery';
import getQueryClient from '@/utils/getQueryClient';


type HydratedProductsProps = {
  currentPage:number;
  currentOrder?: string;
  currentField?: string;
  currentCategory?: string;
  currentTerm?: string;
  queryKey: string;
}

export default async function HydratedProducts({queryKey,currentPage, currentOrder, currentField, currentTerm, currentCategory}: HydratedProductsProps) {
  const queryClient = getQueryClient();
  const params = propsToQuery(
    {
      page: currentPage,
      category: currentCategory,
      field: currentField,
      sort: currentOrder,
      term: currentTerm
    }
  );
  
  await queryClient.prefetchQuery({
    queryKey: ['products', queryKey],
    queryFn: async () =>
    GraphQLClient.request(        
        getAllProducts,        
        params,
      ),
  });
  
  const dehydratedState = dehydrate(queryClient); 

  return (
    <HydrationBoundary state={dehydratedState}>       
      <ListProducts />
    </HydrationBoundary>
  )
}