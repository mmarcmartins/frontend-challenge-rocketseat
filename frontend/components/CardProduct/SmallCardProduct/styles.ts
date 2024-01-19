'use-client';

import styled from 'styled-components';

export const SmallProductStyle = styled.li`
  background-color: #FFF;
  border-radius: 8px;
  display: flex;
  flex: 0 1 calc(25% - 32px);
  position: relative;
  flex-direction:column;

  img{
    width: 100%;
    border-radius: 8px 8px 0 0;
  }
  .description {
    padding: 8px 12px;
  }

  hr{
    display:block;
    width: 100%;    
    border-top: 1px solid #DCE2E5;
  }

  .name{
    font-size: 16px;
    line-height: 24px;
    color: #41414D;
  }

  .price{
    font-size: 14px;
    line-height: 21px;
    color: #09090A;
    font-weight: bold;
  }
`;