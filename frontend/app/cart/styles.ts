import Container from "@/components/Container";
import styled from "styled-components";

export const CartContainer = styled(Container)`
  display:flex;
  flex-wrap: wrap;
  margin-top: 30px;  
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  .back-button {
    margin-bottom: 30px;
    display: flex;
    color:#737380;
    text-decoration: none;    
    align-items: center;
    justify-content: center;
    .icon-holder{            
      border-radius: 100%;
      border: 2px solid #737380;
      height: 20px;
      width: 20px;
      padding: 5px;
    }
    span {
      margin-left: 10px;
    }    
  }
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: var(--font-content);
  flex: 1;
  .cart_title {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    margin-bottom: 0;
  }
  .cart_total {
    font-size: 16px;
    line-height: 24px;
  }

`;

export const CartList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 15px;
  gap: 30px;
  display: flex;
  padding-right: 10px;
  overflow: scroll;
  max-height: 680px;
  flex-direction: column;
`;

export const CartFlex = styled.div`
    display: flex;    
    justify-content: center;
    align-items: stretch;
`;