import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  MoreButton,
  AddToCart,
  Follow,
  Product,
  Price,
  Discount,
  OldPrice,
  Value,
  Description,
  Name,
  Subname,
  Empty,
  NotFollow,
  NotAddToCart,
  More,
  Cross
} from './ProductItem.style';

function ProductItem({ data }) {
  const [isDiscount, setIsDiscount] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    if (data)
      setIsDiscount(data.discount && data.oldPrice !== null ? true : false);
  }, [data]);

  return isMore ? (
    <>
      <More>
        <Cross
          href="javascript:void(0)"
          onClick={() => {
            setIsMore(false);
          }}
        >
          X
        </Cross>
        {data.more}
      </More>
    </>
  ) : (
    <Product>
      {isDiscount ? (
        <>
          <OldPrice>{data.oldPrice}</OldPrice>{' '}
          <Discount>{data.discount}</Discount>
        </>
      ) : (
        <Empty />
      )}
      <Price>{data.price}</Price>
      <Name>
        {data.name}
        <Subname>{data.subname}</Subname>
      </Name>
      <Description>
        {data.description}
        <Value>{data.value}</Value>
      </Description>
      <MoreButton
        href="javascript:void(0)"
        onClick={() => {
          setIsMore(true);
        }}
      >
        <FormattedMessage id={'PRODUCT_ITEM_BUTTON.MORE'} />
      </MoreButton>
      {isAddToCart ? (
        <NotAddToCart
          href="javascript:void(0)"
          onClick={() => {
            setIsAddToCart(false);
          }}
        >
          <FormattedMessage id={'PRODUCT_ITEM_BUTTON.DELETE_FROM_CART'} />
        </NotAddToCart>
      ) : (
        <AddToCart
          href="javascript:void(0)"
          onClick={() => {
            setIsAddToCart(true);
          }}
        >
          <FormattedMessage id={'PRODUCT_ITEM_BUTTON.ADD_TO_CART'} />
        </AddToCart>
      )}
      {isFollow ? (
        <NotFollow
          href="javascript:void(0)"
          onClick={() => {
            setIsFollow(false);
          }}
        >
          <FormattedMessage id={'PRODUCT_ITEM_BUTTON.NOTFOLLOW_PRODUCT'} />
        </NotFollow>
      ) : (
        <Follow
          href="javascript:void(0)"
          onClick={() => {
            setIsFollow(true);
          }}
        >
          <FormattedMessage id={'PRODUCT_ITEM_BUTTON.FOLLOW_PRODUCT'} />
        </Follow>
      )}
    </Product>
  );
}

export default ProductItem;
