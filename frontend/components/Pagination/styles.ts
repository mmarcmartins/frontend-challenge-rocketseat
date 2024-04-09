'use-client'
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 32px;
  gap: 2px;
`;

export const PageNumber = styled.a<{$active?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 32px;
  height: 32px;
  background-color: #E9E9F0;
  border: 2px solid transparent;
  color: #737380;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  transition: color .2s ease-in-out, border-color .2s ease-in-out;

  ${({$active}) => $active && `
    border-color: #FFA585;
    color: #FFA585;
    cursor: pointer;
  `}
  
  &.active, &:hover {
    border-color: #FFA585;
    color: #FFA585;
    cursor: pointer;
  }
`;

export const PageSwitch = styled(PageNumber)`
`;