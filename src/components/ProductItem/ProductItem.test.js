import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import ProductItem from './ProductItem';

import Mocks from '../../Mocks';

describe('<Product Item />', () => {
  it('Init', () => {
    const wrapper = shallow(<ProductItem />);
    expect(wrapper);
  });
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
    const withMock = mount(
      <MockedProvider mocks={Mocks} addTypename={false}>
        <ProductItem />
      </MockedProvider>
    );
    expect(withMock);
  });
});
