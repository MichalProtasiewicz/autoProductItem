import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProductAlert from './ProductAlert';


storiesOf('ProductAlert', module)
  .add('default', () => <ProductAlert />)
