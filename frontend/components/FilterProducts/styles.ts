'use client'

import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) { 
    justify-content: center;
    align-items: center;    
    flex-direction: column;
   }
`;