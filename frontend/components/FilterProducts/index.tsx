
import { FilterByOptions } from "./FilterByOptions";
import { FilterByType } from "./FilterByType";
import { Container } from "./styles";

export const FilterProducts = () => {
  return(
    <Container>
      <FilterByType/>
      <FilterByOptions/>
    </Container>
  )
};