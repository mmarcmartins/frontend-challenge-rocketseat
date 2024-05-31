import styled from "styled-components";

export const CartCheckout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  margin-left: 32px;    
  padding: 30px;
  flex-basis: 352px;
  box-sizing: border-box;
  min-height: calc(100vh - 215px);
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