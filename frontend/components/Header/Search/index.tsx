"use client"

import { Search  as SearchIcon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { FormEvent } from "react";
import { ButtonSearch } from "./style";

export const Search = () => {    
    const searchParams = useSearchParams();
    const { push } = useRouter();

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
            searchProduct(event.currentTarget.elements.searchProductName.value);
        }}>        
            <input type="text" id="searchProductName" name="product-name" placeholder="Procurando por algo específico?"/>
            <ButtonSearch type="submit"><SearchIcon /></ButtonSearch>
        </form>
    );
}