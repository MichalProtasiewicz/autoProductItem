import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import ProductItem from './ProductItem';
import ProductItemList from './ProductItemList';

import Mocks from '../../Mocks';

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
    },
    {
      name: 'Havoline Magnetic',
      subname: 'EVO 15W-40',
      description: 'Olej dniowy',
      oldPrice: '125,00 zł',
      discount: '-95%',
      price: '15,00 zł',
      value: '5l',
      more: 'Szczegółowy opis produktu'
    },
    {
      name: 'Magnetic',
      subname: '15W-40',
      description: 'Olej przekładniowy',
      oldPrice: null,
      discount: '15%',
      price: '155,00 zł',
      value: '5l',
      more: 'Szczegółowy opis produktu'
    },
    {
      name: 'Havoline Magnetic Magnetic',
      subname: 'EVO ',
      description: 'Olej przekładniowy',
      oldPrice: '150,00 zł',
      discount: '15%',
      price: '15,00 zł',
      value: '5l',
      more: 'Szczegółowy opis produktu'
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
    },
    {
      name: 'Havoline Magnetic',
      subname: null,
      description: 'Olej przekładniowy',
      oldPrice: null,
      discount: '15%',
      price: '15,00 zł',
      value: '5l',
      more: 'Szczegółowy opis produktu'
    }
  ]
};

describe('<Product Item />', () => {
  it('With data', () => {
    const wrapper = shallow(
      <ProductItem
        data={{
          name: 'Havoline Magnetic',
          subname: 'EVO 15W-40',
          description: 'Olej przekładniowy',
          price: '149,00 zł',
          oldPrice: '189,00 zł',
          discount: '-15%',
          value: '5l'
        }}
      />
    );
    expect(wrapper);
  });
  it('With data without discount', () => {
    const wrapper = shallow(
      <ProductItem
        data={{
          name: 'Havoline Magnetic',
          subname: 'EVO 15W-40',
          description: 'Olej przekładniowy',
          oldPrice: '189,00 zł',
          discount: null,
          price: '15,00 zł',
          value: '5l'
        }}
      />
    );
    expect(wrapper);
  });
  it('With data when no name', () => {
    const wrapper = shallow(
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
    );
    expect(wrapper);
  });
  it('With mock data', () => {
    const withMock = shallow(
      <MockedProvider mocks={Mocks} addTypename={false}>
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
      </MockedProvider>
    );
    expect(withMock);
  });
  it('With mock data list', () => {
    const withMockList = shallow(
      <MockedProvider mocks={Mocks} addTypename={false}>
        <ProductItemList products={ProductList.products}></ProductItemList>
      </MockedProvider>
    );
    expect(withMockList);
  });
});
