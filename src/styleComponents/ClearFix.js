import styled from 'styled-components';

export const ClearFix = styled.div`
  &:after, &:before{
    content: '';
    display: table;
    clear: both;
  }
`