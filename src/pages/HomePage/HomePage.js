import React from 'react';

import { useTheme } from 'ThemeContext';

//import Helmet from 'components/Helmet';

import ProductItem from 'components/ProductItem';
import ProductAlert from 'components/ProductAlert';

const HomePage = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <ProductItem title={'LANG_PAGE_TITLE.HOME'} message={'Home'} />
      <ProductAlert />
    </>
  );
};

export default HomePage;
