import gql from 'graphql-tag';

export const GET_PRODUCT_ITEM_DETAILS = gql`
  {
    product {
      id
      name
      subname
      description
      value
      price
      oldPrice
      discount
      more

      isAddToCart
      isFollow
    }
  }
`;
export const GET_PRODUCT_ITEMS_DETAILS = gql`
  {
    products {
      id
      name
      subname
      description
      value
      price
      oldPrice
      discount
      more

      isAddToCart
      isFollow
    }
  }
`;
