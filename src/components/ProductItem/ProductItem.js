import React, { useState, useEffect } from 'react';

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
  Wrong,
  Empty,
  NotFollow,
  NotAddToCart,
  More,
  Cross
} from './ProductItem.style';

function ProductItem({ data, handleClick }) {
  const [isDiscount, setIsDiscount] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    setIsDiscount((data.discount && data.oldPrice) !== null ? true : false);
  }, [data.discount, data.oldPrice]);

  return (
    <>
      {data && Object.keys(data).length > 0 ? (
        <Product>
          {isMore ? (
            <>
              <Cross
                href="javascript:void(0)"
                onClick={() => {
                  setIsMore(false);
                }}
              >
                X
              </Cross>
              <More>{data.more}</More>
            </>
          ) : (
            <>
              {isDiscount ? (
                <>
                  <OldPrice>{data.oldPrice}</OldPrice>{' '}
                  <Discount>{data.discount}</Discount>
                </>
              ) : (
                <Empty />
              )}
              <Price>{data.price}</Price>
              <Name>{data.name}</Name>
              <Subname>{data.subname}</Subname>
              <Description>{data.description}</Description>
              <Value>{data.value}</Value>
              <MoreButton
                href="javascript:void(0)"
                onClick={() => {
                  setIsMore(true);
                }}
              >
                Więcej
              </MoreButton>
              {isAddToCart ? (
                <NotAddToCart
                  href="javascript:void(0)"
                  onClick={() => {
                    setIsAddToCart(false);
                  }}
                >
                  Usuń z koszyka
                </NotAddToCart>
              ) : (
                <AddToCart
                  href="javascript:void(0)"
                  onClick={() => {
                    setIsAddToCart(true);
                  }}
                >
                  Dodaj do koszyka
                </AddToCart>
              )}
              {isFollow ? (
                <NotFollow
                  href="javascript:void(0)"
                  onClick={() => {
                    setIsFollow(false);
                  }}
                >
                  Produkt Obserwowany
                </NotFollow>
              ) : (
                <Follow
                  href="javascript:void(0)"
                  onClick={() => {
                    setIsFollow(true);
                  }}
                >
                  Obserwuj produkt
                </Follow>
              )}
            </>
          )}
        </Product>
      ) : (
        <Wrong>WRONG PRODUCT!</Wrong>
      )}
    </>
  );
}

export default ProductItem;
