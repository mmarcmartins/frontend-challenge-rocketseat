'use client'
import Container from '@/components/Container';
import styled from 'styled-components';

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  border:none;
  color: #FFF;
  background-color: transparent;
  padding: 10px 0;
  gap: 10px;
  border-radius: 5px;
  position:relative;
  overflow: hidden;
  border: 1px solid #115D8C;
  svg, span{
    transition: color .2s ease-in-out;
  }
  &:after{
    content: "";
    position: absolute;
    background-color: #115D8C;
    left: 0;
    top: 0;
    width:102%;
    height: 100%;
    z-index: -1;
    border-radius:5px;
    top:0;
    transition: top .2s ease-in-out;
  }
  &:hover {
    span, svg{
      color: #115D8C;
    }
    
    &:after{
      top: -100%;
    }
    cursor: pointer;
  }
`;

export const ProductContainer = styled(Container)`
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

export const ProductDescription = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;  
  .product_image{
    max-width: 50%;
    height: auto;
  }
  .description {
    display: flex;
    flex-direction: column;
    color: #41414D;
    padding: 0 40px;
    box-sizing: border-box;
    flex-basis: 50%;
    .category {
      font-size: 16px;
      line-height: 24px;      
    }
    .title {
      font-size: 32px;
      line-height: 48px;
      margin: 0;
      margin-top: 30px;
      font-weight: normal;
    }
    .price {
      font-size: 20px;
      line-height: 30px;
      font-weight: 800;
      color: #09090A;
    }
    .info {
      font-size: 12px;
      margin-top: 30px;
    }
    .description_title {
      margin-top: 60px;
      color: #737380;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 5px;
      font-weight: normal;
    }
    .description_content {
      margin-top: 0;
      font-size: 14px;
      line-height: 21px;
    }
  }
`