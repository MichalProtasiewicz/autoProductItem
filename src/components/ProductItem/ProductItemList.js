import React from 'react';

import ProductItem from './ProductItem';

import {ProductList} from './ProductItem.style';

function ProductItemList({ products }) {
  return (
    <ProductList>
    {products &&
    products.map((product, key) => (
      <ProductItem key={key} data={product}></ProductItem>
    ))}
    </ProductList>
  );
}

export default ProductItemList;
