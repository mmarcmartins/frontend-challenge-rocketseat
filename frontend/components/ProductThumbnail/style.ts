'use client'

import styled from 'styled-components';


export const ProductThumb = styled.div`
  display: block;
  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  background-color: #FFF;
  hr {
   color: #DCE2E5; 
  }
  .productName {
    font-size: 16px;
    line-height: 24px; 
  }

  .productPrice {
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
  };
`;