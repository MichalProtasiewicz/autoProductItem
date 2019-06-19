import React, { useState, useEffect } from 'react';
import {More, AddToCart, Follow, Product, Price, Discount, OldPrice, Value, Description, Name, Subname} from './ProductItem.style';


function ProductItem(props) {


  const [values, setValues] = useState({isDiscount: false, oldPrice: "189,00 zł", discount: "-15%", price: "149,00 zł", name: "Havoline Magnetic", subname: "EVO 15W-40", description: "Olej przekładniowy", value: "5l"});
  const[isDiscount, setIsDiscount] = useState(""); const[oldPrice, setOldPrice] = useState("123"); const[discount, setDiscount] = useState(""); const[price, setPrice] = useState("");

  return (
      <Product>
        { values.isDiscount
        ? <><OldPrice>{values.oldPrice}</OldPrice> <Discount>{values.discount}</Discount></>
        : <div style= {{padding:"1.2em"}}> </div>
        }
        <Price>{values.price}</Price>
        <Name>{values.name}</Name>
        <Subname>{values.subname}</Subname>
        <Description>{values.description}</Description>
        <Value>{values.value}</Value>
        <More href="">Więcej</More>
        <AddToCart href="">Dodaj do koszyka</AddToCart>
        <Follow href="">Obserwuj produkt</Follow>

        <form>
          <Description>{oldPrice}</Description>
          <input value={oldPrice} onChange={e => setOldPrice(e.target.value)} type="text" name="oldPrice" required />
        </form>

      </Product>



    );
  };

export default ProductItem;
