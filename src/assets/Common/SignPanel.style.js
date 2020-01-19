import { css } from 'styled-components';

import { Media } from 'assets/Mixins.style';

export const Panel = css`
  display: inline-block;
  max-width: 340px;
  width: 100%;
  padding: 35px 25px;
  background: ${props => props.theme.background};
`;
