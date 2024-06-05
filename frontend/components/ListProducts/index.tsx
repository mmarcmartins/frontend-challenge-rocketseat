import getAllProducts from '@/queries/getAllProducts';
import { GraphQLClient } from '@/client/Graphql';
import { propsToQuery } from '@/utils/mountParamsToQuery';
import { Product } from '@/types';
import List from './List';


type ProductsListProps = {
  currentPage:number;
  currentOrder?: string;
  currentField?: string;
  currentCategory?: string;
  currentTerm?: string;
}

async function getData(props: ReturnType<typeof propsToQuery>) {
  const res = await GraphQLClient.request(        
    getAllProducts,        
    {...props},
  );
   
  if (!res.allProducts) {    
    throw new Error(`Failed to fetch data params ${props}`);
  }
 
  return res;
}
 

export default async function ListProducts({currentPage, currentOrder, currentField, currentTerm, currentCategory}: ProductsListProps) {
  const params = propsToQuery(
    {
      page: currentPage,
      category: currentCategory,
      field: currentField,
      sort: currentOrder,
      term: currentTerm
    }
  );
  
  const data = await getData(params);
  const products = data?.allProducts;
  
  return (          
    <List data={products as Product[]} />
  )
}