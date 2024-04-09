'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { ListContainer } from "./styles";


export const Menu = () => {
  const searchParams = useSearchParams();  
  const pathname = usePathname();

  const createPageURLFieldOrder = (field: string, sort: 'asc' | 'desc') => {    
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort);
    params.set('field', field);
    return `${pathname}?${params.toString()}`;
  };

  return(
    <ListContainer>
      <ul>
        <li>
          <a href={createPageURLFieldOrder('created_at', 'asc')}>Novidades</a>                                    
        </li>
        <li>
          <a href={createPageURLFieldOrder('price_in_cents','desc')}>Preço: Maior - menor</a>
        </li>
        <li>
          <a href={createPageURLFieldOrder('price_in_cents','asc')}>Preço: Menor - maior</a>
        </li>
        <li>
          <a href={createPageURLFieldOrder('sales', 'asc')}>Mais vendidos</a>
        </li>
      </ul>
    </ListContainer>
  )
};