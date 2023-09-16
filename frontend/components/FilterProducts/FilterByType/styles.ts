'use client'

import styled from 'styled-components';

export const HyperLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-transform: uppercase;
  color: #41414D;
  
  position: relative;
  padding-bottom: 4px;
  
  &:after{
    width: 0;
    content: "";
    position: absolute;    
    height: 4px;
    background-color: #FFA585;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition: width .2s ease-in-out;
  }

  &:hover{
    font-weight: 600;
    &:after{
      width: 100%;
    }
  }

  &:not(:last-child) {
    margin-right: 40px;
  }

`;