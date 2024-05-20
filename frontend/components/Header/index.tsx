'use client'

import { Search, ShoppingBag } from 'lucide-react';
import { HeaderContainer, MainHeader, Header as StyledHeader } from './styles';
import Container from '../Container';
import { useCart } from '@/utils/CartProvider';


export const Header = () => {
    const { quantityItemsOnCart } = useCart();    

    return(
      <HeaderContainer>        
        <Container>
          <StyledHeader>
            <MainHeader href="/">Capputeeno</MainHeader>
            <div className="content">
              <div className="search">        
                <input type="text" placeholder="Procurando por algo específico?"/>
                <Search />
              </div>
              <a href="/cart" className="cart">
                <ShoppingBag />
                <span>{quantityItemsOnCart}</span>
              </a>
            </div>
            </StyledHeader>
        </Container>        
      </HeaderContainer>
    );
};