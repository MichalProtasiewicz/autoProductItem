import React from 'react';

import { useTheme } from 'ThemeContext';

import Helmet from 'components/Helmet';

const ForgotPasswordPage = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <Helmet
        title={'PAGE_TITLE.FORGOT_PASSWORD'}
        message={'Forgot password'}
      />
      <div>ForgotPasswordPage</div>
    </>
  );
};

export default ForgotPasswordPage;
