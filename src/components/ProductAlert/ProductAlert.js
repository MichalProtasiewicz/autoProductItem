import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  AlertSuccess,
  Cross,
  Icon,
  Statement,
  Car,
  Change,
  AlertWarning,
  ChangeCarButton,
  StatementWar,
  CarWar,
  Offer,
  StatementWrong,
  CarWrong,
  IconRed
} from './ProductAlert.style';

export function ProductAlertSuccess({ data }) {
  return (

    <AlertSuccess>
      <Cross href="javascript:void(0)">
        X
      </Cross>
      <Icon>✓</Icon>
      <Statement>
        <FormattedMessage id={'PRODUCT_ALERT_STATEMENT.SUCCESS'} />
        <Car>{data.car}</Car>
      </Statement>
      <Change href="javascript:void(0)">
        <FormattedMessage id={'PRODUCT_ALERT_BUTTON.CHANGE'} />
      </Change>
    </AlertSuccess>
    );
}

export function ProductAlertWarning({ data }) {
  return (
    <AlertWarning>
      <Cross href="javascript:void(0)">
        X
      </Cross>
      <Icon>!</Icon>
      <StatementWar>
        <FormattedMessage id={'PRODUCT_ALERT_STATEMENT.WARING'} />
        <CarWar><FormattedMessage id={'PRODUCT_ALERT_STATEMENT.WARING_CAR'} /></CarWar>
      </StatementWar>
      <ChangeCarButton href="javascript:void(0)">
        <FormattedMessage id={'PRODUCT_ALERT_BUTTON.CHANGE_CAR'} />
      </ChangeCarButton>
      <Offer><FormattedMessage id={'PRODUCT_ALERT_.WARING_OFFER'} /></Offer>
    </AlertWarning>
    );
}

export function ProductAlertWrong({ data }) {
  return (
    <AlertSuccess>
      <Cross href="javascript:void(0)">
        X
      </Cross>
      <IconRed>X</IconRed>
      <StatementWrong>
        <FormattedMessage id={'PRODUCT_ALERT_STATEMENT.WRONG_CAR'} />
        <CarWrong>{data.car}</CarWrong>
      </StatementWrong>
      <Change href="javascript:void(0)">
        <FormattedMessage id={'PRODUCT_ALERT_BUTTON.CHANGE'} />
      </Change>
    </AlertSuccess>
    );
}
