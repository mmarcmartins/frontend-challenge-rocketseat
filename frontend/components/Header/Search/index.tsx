"use client"

import { Search  as SearchIcon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { ButtonSearch } from "./style";
import { useSnackbar } from "@/hooks/useSnackbar";

export const Search = () => {    
    const searchParams = useSearchParams();
    const { push } = useRouter();
    const searchRef = useRef<HTMLInputElement>(null);
    const { openSnackbar } = useSnackbar();
    const searchProduct = (term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('term', term);
        params.delete('page');
        params.delete('category');
        params.delete('field');        
        params.delete('sort');
        push(`/?${params.toString()}`); 
    };

    return (
        <form className="search" onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const search = searchRef.current?.value;
            if(search){
              searchProduct(search);
              return;
            }
            openSnackbar({message: "Valor inválido", variant: "ERROR"});
        }}>        
            <input type="text" ref={searchRef} name="product-name" placeholder="Procurando por algo específico?"/>
            <ButtonSearch type="submit"><SearchIcon /></ButtonSearch>
        </form>
    );
}