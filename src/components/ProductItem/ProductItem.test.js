import React from 'react';
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
  });
});
