'use client'

import styled, { css }  from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 767px) { 
    justify-content: center;
    align-items: center;    
    flex-direction: column-reverse;
    gap: 30px;
    margin-bottom: 30px;
   }
`;

export const MenuFilterButton = styled.button<{ $isMenuActive: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border:none;
  background-color: transparent;
  color: #737380;
  font-size: 14px;
  svg{
    margin-left: 8px;
    transform: rotate(-90deg);
    color: #737380;
    width: 24px;
    transition: transform .2s ease-in-out;
    ${({$isMenuActive}) => $isMenuActive && css`
      transform: rotate(90deg);
    `}
  }
  &:hover{
    cursor:pointer;
  }
`;

export const ListContainer = styled.div`
  position: absolute;
  width: 176px;
  top: 30px;
  right: 0;
  z-index: 2;
  background-color: #FFF;
  color: #737390;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);
  font-size: 14px;
  border-radius: 4px;
  padding: 12px 16px;
  box-sizing: border-box;
  @media (max-width: 767px) { 
    width: 100%;
    top: initial;
    bottom: -130%;
  }
  ul { 
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: 767px) { 
      display: flex;
      flex-direction: column;
      gap: 10px;
     }
  }
  li {
    &:not(:last-child){
      margin-bottom: 4px;
    }
  }
  a {
    text-decoration: none;
    color: #737390;
    display: block;
    font-weight: 400;    
  }
`;