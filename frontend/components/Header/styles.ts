'use client'

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #FFF;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  height: 80px;
  background-color: #FFF;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  .content {
    display: flex;
    .cart {
      margin-left: 24px;
      position: relative;
      padding: 10px;
      color:#737380;
      box-sizing: border-box;  
      svg {
        width: 24px;
      }
      span { 
        position: absolute;
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #DE3838;
        color: #FFF;
        font-size: 10px;
        bottom: 9px;
        right: 3px;
      }
    }
  }

  .search{    
    display: flex;
    width: 352px;
    max-width: 100%;
    position:relative;
    justify-content: center;
    align-items: stretch;

    input {      
      width: 100%;
      background-color: #F3F5F6;
      color: #737380;
      border-radius:8px;
      padding: 9px 16px;
      border: none;
      box-sizing: border-box;
    }

    svg {
      width: 24px;
      color:#737380;
      position: absolute;
      height: 24px;
      right: 9px;
      align-self:center;
    }
  }
`;


export const MainHeader = styled.h1`
  color: #5D5D6D;
  font-family: var(--font-title);
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
`;