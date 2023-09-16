import Container from "@/components/Container";
import { HomePage } from "./styles";
import { FilterProducts } from "@/components/FilterProducts";
import HydratedProducts from "@/components/ListProducts/Hydrate";

export default function Home() {
  return (
    <HomePage>      
      <Container>
        <FilterProducts/>
        <HydratedProducts/>
      </Container>
    </HomePage>
  )
}
