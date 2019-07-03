import React from 'react';

import ProductItem from './ProductItem';

function ProductItemList({ products }) {
  return (
    products &&
    products.map((product, key) => (
      <ProductItem key={key} data={product}></ProductItem>
    ))
  );
}

export default ProductItemList;
