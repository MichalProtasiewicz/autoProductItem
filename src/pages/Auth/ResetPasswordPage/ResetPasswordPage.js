import React from 'react';

import { useTheme } from 'ThemeContext';

import Helmet from 'components/Helmet';

const ResetPasswordPage = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <Helmet title={'PAGE_TITLE.RESET_PASSWORD'} message={'Reset password'} />
      <div>ResetPasswordPage</div>
    </>
  );
};

export default ResetPasswordPage;
