import React from 'react';
import { Query } from 'react-apollo';
import Helmet from 'components/Helmet';

import ProductItem from 'components/ProductItem';
import ProductItemList from 'components/ProductItem/ProductItemList';
import {
  GET_PRODUCT_ITEM_DETAILS,
  GET_PRODUCT_ITEMS_DETAILS
} from './HomePage.query';

const HomePage = () => {
  return (
    <>
      <Helmet title={'LANG_PAGE_TITLE.HOME'} message={'Home'} />
      Array:
      <Query query={GET_PRODUCT_ITEMS_DETAILS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error! {error.message}</div>;
          return <ProductItemList products={data.products} />;
        }}
      </Query>
      Single item:
      <Query query={GET_PRODUCT_ITEM_DETAILS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error! {error.message}</div>;
          return <ProductItem data={data.product} />;
        }}
      </Query>
    </>
  );
};

export default HomePage;
