import { injectGlobal } from 'styled-components';
import { Font1, FSnormalPx, FSsmall } from './variables';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html, body {
    font-family: ${Font1};
    font-size: ${FSnormalPx};

    @media (max-width: 460px) {
      font-size: ${FSsmall};
    }
  }
`