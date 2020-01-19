import React from 'react';
import { IntlContext } from 'IntlContext';
import { ThemeContext } from 'ThemeContext';
import aztecTheme from 'assets/Themes/AztecTheme';
import darkTheme from 'assets/Themes/DarkTheme';

import { Panel } from './SignInPanel.style';

export const SignInPanel = ({}) => {
  const { switchLanguage } = React.useContext(IntlContext);
  const { switchTheme } = React.useContext(ThemeContext);
  return (
    <Panel>
      TODO: PANEL
      <button onClick={() => switchLanguage('en-GB')}>Language English</button>
      <button onClick={() => switchLanguage('cm')}>Language CM</button>
      <button onClick={() => switchLanguage('pl-PL')}>Language PL</button>
      <button onClick={() => switchTheme(aztecTheme)}>Theme aztec</button>
      <button onClick={() => switchTheme(darkTheme)}>Theme blacker</button>
    </Panel>
  );
};

export default SignInPanel;
