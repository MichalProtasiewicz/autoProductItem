import React from 'react';

import { useTheme } from 'ThemeContext';

import Helmet from 'components/Helmet';

const SignOutPage = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <Helmet title={'PAGE_TITLE.SIGN_OUT'} message={'Sign out'} />
      <div>SignOutPage</div>
    </>
  );
};

export default SignOutPage;
