import styled from 'styled-components';
import { maxWidth, breakMedium } from '../style/variables';

export const Row = styled.div`
  width: ${maxWidth};
  margin: 0 auto;

  @media (max-width: ${breakMedium}) {
    width: 100%;
    padding: 0px 10px;
  }
`