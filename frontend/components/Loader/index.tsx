'use client';
import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0%,12.49%   {background-size: var(--s),0 0     ,0 0     ,0 0     ,0 0     ,0 0     ,0 0     ,0 0     }
    12.5%,24.9% {background-size: var(--s),var(--s),0 0     ,0 0     ,0 0     ,0 0     ,0 0     ,0 0     }
    25%,37.4%   {background-size: var(--s),var(--s),var(--s),0 0     ,0 0     ,0 0     ,0 0     ,0 0     }
    37.5%,49.9% {background-size: var(--s),var(--s),var(--s),0 0     ,var(--s),0 0     ,0 0     ,0 0     }
    50%,61.4%   {background-size: var(--s),var(--s),var(--s),0 0     ,var(--s),0 0     ,0 0     ,var(--s)}
    62.5%,74.9% {background-size: var(--s),var(--s),var(--s),0 0     ,var(--s),0 0     ,var(--s),var(--s)}
    75%,86.4%   {background-size: var(--s),var(--s),var(--s),0 0     ,var(--s),var(--s),var(--s),var(--s)}
    87.5%,100%  {background-size: var(--s),var(--s),var(--s),var(--s),var(--s),var(--s),var(--s),var(--s)}
`

const animation_second = keyframes`
    0%,
    5%    {transform: translate(0   ,0   )}
    12.5% {transform: translate(100%,0   )}
    25%   {transform: translate(200%,0   )}
    37.5% {transform: translate(200%,100%)}
    50%   {transform: translate(200%,200%)}
    62.5% {transform: translate(100%,200%)}
    75%   {transform: translate(0   ,200%)}
    87.5% {transform: translate(0   ,100%)}
    95%,
    100%  {transform: translate(100%,100%)}
`


export const Loader = styled.div`
  width: 60px;
  aspect-ratio: 1;
  display: flex;
  --c1:linear-gradient(#554236 0 0);
  --c2:linear-gradient(#F77825 0 0);
  --s:calc(100%/3) calc(100%/3);
    background:
        var(--c1) 0   0 ,var(--c2) 50% 0   ,var(--c1) 100% 0,
        var(--c2) 0  50%,                   var(--c2) 100% 50%,
        var(--c1) 0 100%,var(--c2) 50% 100%,var(--c1) 100% 100%;
    background-repeat: no-repeat;
    animation: ${animation} 1.5s infinite alternate;
    &:before {
    content: "";
    width: calc(100%/3);
    height: calc(100%/3);
    background: #60B99A;
    animation: inherit;
    animation-delay: 0s; 
    animation-name: ${animation_second};
    }
`;
