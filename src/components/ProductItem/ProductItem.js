import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import { Mutation } from 'react-apollo';
import {
  EDIT_CART_ITEM,
  EDIT_FOLLOW_ITEM
} from '../../pages/HomePage/HomePage.query';

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

import { TiTimes } from "react-icons/ti";

function ProductItem({ data }) {
  const [isDiscount, setIsDiscount] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    if (data)
      setIsDiscount(data.discount && data.oldPrice !== null ? true : false);
    if (data) setIsAddToCart(data.isAddToCart === true ? true : false);
    if (data) setIsFollow(data.isFollow === true ? true : false);
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
          <TiTimes />
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
      <Mutation mutation={EDIT_CART_ITEM}>
        {(editCartItem, { data }) =>
          isAddToCart ? (
            <NotAddToCart
              href="javascript:void(0)"
              onClick={() => {
                setIsAddToCart(false);
                editCartItem({ variables: { isAddToCart: false } });
                alert('Produkt usunięto z koszyka');
              }}
            >
              <FormattedMessage id={'PRODUCT_ITEM_BUTTON.DELETE_FROM_CART'} />
            </NotAddToCart>
          ) : (
            <AddToCart
              href="javascript:void(0)"
              onClick={() => {
                setIsAddToCart(true);
                editCartItem({ variables: { isAddToCart: true } });
                alert('Produkt dodano do koszyka');
              }}
            >
              <FormattedMessage id={'PRODUCT_ITEM_BUTTON.ADD_TO_CART'} />
            </AddToCart>
          )
        }
      </Mutation>
      <Mutation mutation={EDIT_FOLLOW_ITEM}>
        {(editFollowItem, { data }) =>
          isFollow ? (
            <NotFollow
              href="javascript:void(0)"
              onClick={() => {
                setIsFollow(false);
                editFollowItem({ variables: { isFollow: false } });
                alert('Produkt usunięto z listy obserwowanych produktów');
              }}
            >
              <FormattedMessage id={'PRODUCT_ITEM_BUTTON.NOTFOLLOW_PRODUCT'} />
            </NotFollow>
          ) : (
            <Follow
              href="javascript:void(0)"
              onClick={() => {
                setIsFollow(true);
                editFollowItem({ variables: { isFollow: true } });
                alert('Produkt dodano do listy obserwowanych produktów');
              }}
            >
              <FormattedMessage id={'PRODUCT_ITEM_BUTTON.FOLLOW_PRODUCT'} />
            </Follow>
          )
        }
      </Mutation>
    </Product>
  );
}

export default ProductItem;
