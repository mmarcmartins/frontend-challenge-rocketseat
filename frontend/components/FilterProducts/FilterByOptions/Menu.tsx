import { useRef } from "react";
import { ListContainer } from "./styles";
import { useClickOutside } from "@/hooks/useClickOutside";


export const Menu = () => {
  return(
    <ListContainer>
      <ul>
        <li>
          <a href="#news">Novidades</a>                                    
        </li>
        <li>
          <a href="#asc">Preço: Maior - menor</a>
        </li>
        <li>
          <a href="#desc">Preço: Menor - maior</a>
        </li>
        <li>
          <a href="#sold">Mais vendidos</a>
        </li>
      </ul>
    </ListContainer>
  )
};