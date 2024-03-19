'use client'
import Container from '@/components/Container';
import styled from 'styled-components';

export const ProductContainer = styled(Container)`
  display:flex;
  flex-wrap: wrap;
  margin-top: 30px;  
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