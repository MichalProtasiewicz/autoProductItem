import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProductItem from './ProductItem';

//const [values, setValues] = useState({isDiscount: false, oldPrice: "189,00 zł", discount: "-15%", price: "149,00 zł", name: "Havoline Magnetic", subname: "EVO 15W-40", description: "Olej przekładniowy", value: "5l"});


storiesOf('ProductItem', module)
  .add('default', () => <ProductItem />)
  .add('withRabat', () => <ProductItem isDiscount="true"/>)
  .add('otherValues', () => <ProductItem price="170,00 zł" name="SHELL HELIX" name2="HX8 ECT 5W30"/>)
 // .add('sdasdas', () => ProductItem(setValues.isDiscount))
  .add('dsasadsad', () => <ProductItem oldPrice="99999zł" />)

