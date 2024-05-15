import { ProductLayout } from "@/components/Product";
import HydratedProduct from "./Hydrate";

const Product = ({ params }: { params: { id: string } }) => {
  const {id} = params;  
  
  return(
    <HydratedProduct productId={id}>
      <ProductLayout productId={id}/>  
    </HydratedProduct>
  );
};

export default Product;