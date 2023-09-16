
import getAllProducts from '@/graphql/getAllProducts';
import { usePrefetchGraphql } from '@/hooks/services/usePrefetchGraphql';
import { dehydrate, Hydrate } from '@tanstack/react-query'
import { ListProducts } from '.';

export default async function HydratedProducts() {
  const queryClient = await usePrefetchGraphql(getAllProducts, {page : 1});
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ListProducts/>
    </Hydrate>
  )
}