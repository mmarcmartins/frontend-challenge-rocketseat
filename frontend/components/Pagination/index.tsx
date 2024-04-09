'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageContainer, PageNumber, PageSwitch } from "./styles";
import { usePathname, useSearchParams } from "next/navigation";

export const Pagination = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 0;
  const pathname = usePathname();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages = Array.from({length: 5}, (_, i) => i + 1);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;  
  return(
    <PageContainer>
      {
        pages.map((idx, el) => 
          <PageNumber $active={currentPage === el} key={idx} href={createPageURL(el)}>{el}</PageNumber>    
        )
      }      
      <PageSwitch href={createPageURL(prevPage)}>
        <ChevronLeft/>
      </PageSwitch>
      <PageSwitch href={createPageURL(nextPage)}>
        <ChevronRight/>
      </PageSwitch>
    </PageContainer>
  );
};