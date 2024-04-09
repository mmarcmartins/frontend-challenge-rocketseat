
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { ListProducts } from '.';
import getAllProducts from '@/queries/getAllProducts';
import { GraphQLClient } from '@/client/Graphql';
import getQueryClient from '@/utils/getQueryClient';
import { propsToQuery } from '@/utils/mountParamsToQuery';

type HydratedProductsProps = {
  currentPage:number;
  currentOrder?: string;
  currentField?: string;
  currentCategory?: string;
}

export default async function HydratedProducts({currentPage, currentOrder, currentField}: HydratedProductsProps) {
  const queryClient = getQueryClient();
  const params = propsToQuery(
    {
      page: currentPage,
      category: currentField,
      field: currentField,
      sort: currentOrder
    }
  );
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: async () =>
    GraphQLClient.request(        
        getAllProducts,        
        params,
      ),
  })  
  await new Promise(resolve => setTimeout(resolve, 2000));
  const dehydratedState = dehydrate(queryClient); 
  return (
    <HydrationBoundary state={dehydratedState}>       
      <ListProducts/>
    </HydrationBoundary>
  )
}