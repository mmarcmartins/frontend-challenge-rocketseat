"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { HyperLink } from "./styles"

export const FilterByType = () => {
  const searchParams = useSearchParams();  
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const manageCategoryLink = (category?: string) => {        
    if(!category){
      if(params.get("category"))
      params.delete("category");     
    } else{      
      params.set('category', category);
    }    
    if(params.get("page")){
      params.set("page", "0");
    }
    return `${pathname}?${params.toString()}`;
  };
  const isMugActive = params.get("category") === 'mugs';
  const isTshirtActive = params.get("category") === 't-shirts'
  const isAllActive = !params.get("category");
  
  return(
      <nav>
        <HyperLink $active={isAllActive} href={manageCategoryLink()}>
          Todos os produtos
        </HyperLink>
        <HyperLink $active={isTshirtActive} href={manageCategoryLink("t-shirts")}>
          Camisetas
        </HyperLink>
        <HyperLink $active={isMugActive} href={manageCategoryLink("mugs")}>
          Canecas
        </HyperLink>
      </nav>          
  );
};