import { css } from 'styled-components';

import { Breakpoints } from 'assets/Variables.style';

export const Media = Object.keys(Breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${Breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
