import React from 'react';
import {AlertS, Cross, Icon, Statement, Car, Change} from './ProductAlert.style';

class ProductAlert extends React.Component {
  render() {
    return (
      <AlertS>
        <Cross href="">X</Cross>
        <Icon>✓</Icon>
        <Statement>Produkt dopasowany do wybranego samochodu:</Statement>
        <Car>Mercedes S500 (8E2, B6) 1.8 T quattro, 140 PS, 103 kW</Car>
        <Change href="">ZMIEŃ</Change>
      </AlertS>
    );
  }
}

export default ProductAlert;
