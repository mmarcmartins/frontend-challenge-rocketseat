"use server"
import { HeaderContainer, MainHeader, Header as StyledHeader } from './styles';
import Container from '../Container';

import { Bag } from './Bag';
import { Search } from './Search';


export const Header = () => {
    return(
      <HeaderContainer>        
        <Container>
          <StyledHeader>
            <MainHeader href="/">Capputeeno</MainHeader>
            <div className="content">
              <Search/>
              <Bag/>
            </div>
          </StyledHeader>            
        </Container>        
      </HeaderContainer>
    );
};