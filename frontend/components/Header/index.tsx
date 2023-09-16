import { Search, ShoppingBag } from 'lucide-react';
import { HeaderContainer, MainHeader, Header as StyledHeader } from './styles';
import Container from '../Container';

export const Header = () => {
    return(
      <HeaderContainer>        
        <Container>
          <StyledHeader>
            <MainHeader>Capputeeno</MainHeader>
            <div className="content">
              <div className="search">        
                <input type="text" placeholder="Procurando por algo específico?"/>
                <Search />
              </div>
              <a href="#" className="cart">
                <ShoppingBag />
                <span>2</span>
              </a>
            </div>
            </StyledHeader>
        </Container>        
      </HeaderContainer>
    );
};