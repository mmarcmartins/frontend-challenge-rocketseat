"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { HyperLink } from "./styles"

export const FilterByType = () => {
  const searchParams = useSearchParams();  
  const pathname = usePathname();

  const manageCategoryLink = (category?: string) => {    
    const params = new URLSearchParams(searchParams);

    if(!category){
      if(params.get("category"))
      params.delete("category");      
    } else{
      params.set('category', category);
    }    
    return `${pathname}?${params.toString()}`;
  };

  return(
    
      <nav>
        <HyperLink href={manageCategoryLink()}>
          Todos os produtos
        </HyperLink>
        <HyperLink href={manageCategoryLink("t-shirts")}>
          Camisetas
        </HyperLink>
        <HyperLink href={manageCategoryLink("mugs")}>
          Canecas
        </HyperLink>
      </nav>          
  );
};