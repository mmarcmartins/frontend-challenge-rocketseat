import { Undo2 } from "lucide-react";
import Link from "next/link";
import { ProductContainer } from "./styles";


const Product = ({ params }: { params: { id: string } }) => {
  const {id} = params;  

  return(
    
      <ProductContainer as="article">
        <Link href="/" className="back-button">
          <div className="icon-holder">
            <Undo2 width={20} height={20} />
          </div>
          <span>Voltar</span>
        </Link>
      </ProductContainer>
    
  );
};

export default Product;