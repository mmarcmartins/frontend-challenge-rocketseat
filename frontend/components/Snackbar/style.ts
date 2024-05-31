'use client'

import styled, { keyframes } from "styled-components";
import { VARIANT } from ".";

const breatheAnimation = keyframes`
 0% { right: -100% } 
 10% { right: 0 } 
 50% { right: 0 }
 100% { right: -100%; } 
`

export const SnackBarStyled = styled.div<{$animationTime: number, $variant : VARIANT}>`
    position: absolute;
    right: 0;
    top: 20%;    
    transform: translateY(-20%);
    padding: 20px;
    background-color: ${({$variant}) => $variant === "SUCCESS" ? "#51B853" : "RED"};
    color:#FFF;
    font-size: 16px;
    border-radius: 2px;
    animation-name: ${breatheAnimation};
    animation-duration: ${({$animationTime}) => $animationTime + 1}s;    
`;

