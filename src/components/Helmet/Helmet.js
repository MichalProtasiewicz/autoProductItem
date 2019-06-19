import React from 'react';
import { injectIntl } from 'react-intl';
import { Helmet as HelmetContext } from 'react-helmet-async';

export const Helmet = ({ intl, title, message }) => {
  return (
    <HelmetContext titleTemplate={`%s | ${process.env.REACT_APP_PAGE_TITLE}`}>
      <html lang={intl.locale} />
      <title lang={intl.locale}>
        {intl.formatMessage({
          id: title,
          defaultMessage: { message }
        })}
      </title>
    </HelmetContext>
  );
};

export default injectIntl(Helmet);
