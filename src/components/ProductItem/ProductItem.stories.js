import React from 'react';
import { storiesOf } from '@storybook/react';
import { addDecorator } from '@storybook/react';

import ProductItem from './ProductItem';

import { IntlProviderWrapper } from '../../IntlContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MockedProvider } from 'react-apollo/test-utils';

import Mocks from '../../Mocks';

import ProductItemList from './ProductItemList';
import { object } from 'prop-types';

addDecorator(story => (
  <CssBaseline>
    <MockedProvider mocks={Mocks} addTypename={false}>
      <IntlProviderWrapper>{story()}</IntlProviderWrapper>
    </MockedProvider>
  </CssBaseline>
));

const ProductList = {
  products: [
    {
      name: 'Havoline Magnetic',
      subname: 'EVO 15W-40',
      description: 'Olej przekładniowy',
      price: '149,00 zł',
      oldPrice: '189,00 zł',
      discount: '-15%',
      value: '5l',
      more:
        'Najwyższej jakości, w pełni syntetyczny olej silnikowy do najnowszych samochodów benzynowych i Diesel. Olej dedykowany do najnowszych silników pojazdów grupy VW/Audi. Sprzedawca Petrostar. Oficjalna aprobata VW 504.00/507.00.'
    },
    {
      name: 'Havoline Magnetic',
      subname: 'EVO 15W-40',
      description: 'Olej przekładniowy',
      oldPrice: null,
      discount: '15%',
      price: '15,00 zł',
      value: '5l',
      more: 'Szczegółowy opis produktu'
    }
  ]
};

storiesOf('ProductItem', module)
  .add('Init', () => <ProductItem data={{}} />)
  .add('With data', () => (
    <ProductItem
      data={{
        name: 'Havoline Magnetic',
        subname: 'EVO 15W-40',
        description: 'Olej przekładniowy',
        price: '149,00 zł',
        oldPrice: '189,00 zł',
        discount: '-15%',
        value: '5l',
        more:
          'Najwyższej jakości, w pełni syntetyczny olej silnikowy do najnowszych samochodów benzynowych i Diesel. Olej dedykowany do najnowszych silników pojazdów grupy VW/Audi. Sprzedawca Petrostar. Oficjalna aprobata VW 504.00/507.00.'
      }}
    />
  ))
  .add('With data without discount', () => (
    <ProductItem
      data={{
        name: 'Havoline Magnetic',
        subname: 'EVO 15W-40',
        description: 'Olej przekładniowy',
        oldPrice: null,
        discount: '15%',
        price: '15,00 zł',
        value: '5l',
        more: 'Szczegółowy opis produktu'
      }}
    />
  ))
  .add('With data when no name', () => (
    <ProductItem
      data={{
        subname: 'EVO 15W-40',
        description: 'Olej przekładniowy',
        oldPrice: '189,00 zł',
        discount: '-90%',
        price: '15,00 zł',
        value: '5l',
        more: 'Szczegółowy opis produktu'
      }}
    />
  ))
  .add('List of Products', () => (
    <ProductItemList products={object('products', ProductList)} />
  ));
