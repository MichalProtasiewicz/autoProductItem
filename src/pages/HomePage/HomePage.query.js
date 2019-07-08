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
export const EDIT_CART_ITEM = gql`
    mutation editCartItem($isAddToCart: Boolean!){
      editCartItem(isAddToCart: $isAddToCart){
        isAddToCart
        isFollow
        id
        name
        subname
        description
        value
        price
        oldPrice
        discount
        more
    }
  }
`;
export const EDIT_FOLLOW_ITEM = gql`
    mutation editFollowItem($isFollow: Boolean!){
      editFollowItem(isFollow: $isFollow){
        isAddToCart
        isFollow
        id
        name
        subname
        description
        value
        price
        oldPrice
        discount
        more
    }
  }
`;

export const GET_CAR = gql`
  {
    car {
      car
    }
  }
`;
