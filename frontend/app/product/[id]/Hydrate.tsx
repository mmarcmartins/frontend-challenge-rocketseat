
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { GraphQLClient } from '@/client/Graphql';
import getQueryClient from '@/utils/getQueryClient';
import { PropsWithChildren } from 'react';
import getProduct from '@/queries/getProduct';

type HydratedProductProps = {
  productId: string;
} & PropsWithChildren;

export default async function HydratedProduct({productId, children}: HydratedProductProps) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['product', productId],
    queryFn: async () =>
    GraphQLClient.request(        
        getProduct,        
        {id: productId},
      ),
  })    
  const dehydratedState = dehydrate(queryClient); 
  return (
    <HydrationBoundary state={dehydratedState}>       
      {children}
    </HydrationBoundary>
  )
}