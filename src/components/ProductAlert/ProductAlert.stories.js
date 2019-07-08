import React from 'react';
import { storiesOf } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { IntlProviderWrapper } from '../../IntlContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MockedProvider } from 'react-apollo/test-utils';

import {ProductAlertSuccess, ProductAlertWarning, ProductAlertWrong} from './ProductAlert';
import Mocks from '../../Mocks';

addDecorator(story => (
  <CssBaseline>
    <MockedProvider mocks={Mocks} addTypename={false}>
      <IntlProviderWrapper>{story()}</IntlProviderWrapper>
    </MockedProvider>
  </CssBaseline>
));

storiesOf('ProductAlert', module)
  .add('Success', () => <ProductAlertSuccess data={{car: "MERCEDES S500 (8E2, B6) 1.8 T queattro, 140 PS, 103 kW"}}/>)
  .add('Warning', () => <ProductAlertWarning/>)
  .add('Wrong', () => <ProductAlertWrong data={{car: "MERCEDES S500 (8E2, B6) 1.8 T queattro, 140 PS, 103 kW"}}/>)

