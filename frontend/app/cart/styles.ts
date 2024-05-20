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
  flex-direction: column;
`;

export const CartCheckout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  margin-left: 32px;  
  height: calc(100vh - 120px);
  padding: 30px;
  flex-basis: 352px;
  box-sizing: border-box;
  .checkout_prices {
    
    hr{
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    gap: 10px;
    .checkout_prices__value {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;        
      span{
        font-size: 16px;
        line-height: 24px;        
        &:nth-child(2){
          font-variant-numeric: tabular-nums;
        }
      }      
    }
  }
`;

export const PaymentButton = styled.button`
  width: 100%;
  background-color: #51B853;
  padding: 15px 0;
  color: #FFF;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 24px;
  margin-top: 30px;
  border: 1px solid #51B853;
  transition: background-color, color .2s ease-in-out;
  &:hover{
    cursor: pointer;
    background-color: transparent;
    color: #51B853;
  }
`;

export const CartFlex = styled.div`
    display: flex;    
    justify-content: center;
    align-items: stretch;
`;