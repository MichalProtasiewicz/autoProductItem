import { css } from 'styled-components';

import { Media } from 'assets/Mixins.style';

export const Section = css`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  min-height: 100%;
  height: auto;
`;

export const Wrapper = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 25px;
  background: ${props => props.theme.background};
`;

export const Content = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Imagebox = css`
  display: block
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left:0;
  opacity: 0.45;
`;

export const Footer = css`
  display: block
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
  color: ${props => props.theme.color};
  cursor: default;
`;
