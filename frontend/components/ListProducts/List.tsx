'use client'
import { Product, SmallProduct } from "@/types"
import { ListProductsStyles } from "./styles"
import { SmallCardProduct } from "../CardProduct/SmallCardProduct"

 const List = ({data}: {data?: Product[]}) => {  
  return (          
  <ListProductsStyles>
    {data?.map(product => (
      <SmallCardProduct key={product?.id} product={product as SmallProduct}/>
    ))}
  </ListProductsStyles>     
  )
}

export default List;