import React from 'react';
<<<<<<< HEAD
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
=======
//FIXME: Biblioteka zamiast react-test-rerender -> JEST + ENZYME {shallow, mount}
import renderer from 'react-test-renderer';
import ProductItem from './ProductItem';

it('Product Item', () => {
  it('Init', () => {
    const tree = renderer.create(<ProductItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('With data', () => {
    const tree = renderer
      .create(
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
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('With data without discount', () => {
    const tree = renderer
      .create(
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
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
>>>>>>> f93a3b00efffe4921fbfd8e2cc1eeabb29ed2b7a
  });
});
