'use client'

import { ChevronLeft } from "lucide-react";
import { MenuContainer, MenuFilterButton } from "./styles";
import { useRef, useState } from "react";
import { Menu } from "./Menu";
import { Pagination } from "@/components/Pagination";
import { useClickOutside } from "@/hooks/useClickOutside";

export const FilterByOptions = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(oldActive => !oldActive);  
  const closeMenu = () => setMenuActive(false);  
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref: menuRef, cb : closeMenu});

  return(
    <MenuContainer ref={menuRef}>
      <MenuFilterButton $isMenuActive={isMenuActive} onClick={toggleMenu}>
        Organizar por 
        <ChevronLeft />
      </MenuFilterButton>          
      {isMenuActive && (
        <Menu/>  
      )}    
      <Pagination/>
      </MenuContainer>
  );
};