
import { dehydrate, Hydrate } from '@tanstack/react-query'
import { ListProducts } from '.';
import getQueryClient from '@/utils/getQueryClient';
import getAllProducts from '@/queries/getAllProducts';
import { GraphQLClient } from '@/client/Graphql';

export default async function HydratedProducts() {

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: async () =>
    GraphQLClient.request(        
        getAllProducts,
        // variables are type-checked too!
        { page: 1 },
      ),
  })  
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ListProducts/>
    </Hydrate>
  )
}