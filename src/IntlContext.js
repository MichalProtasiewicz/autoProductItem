import React, { useState } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';
import Lang from './lang';

addLocaleData([...en, ...pl]);

const Context = React.createContext();

const IntlProviderWrapper = ({ children }) => {
  const [locale, switchLanguage] = useState(navigator.language);
  console.log(`Current language: ${locale}`);
  return (
    <Context.Provider value={{ switchLanguage }}>
      <IntlProvider
        key={Lang[locale] ? locale : 'en-GB'}
        locale={Lang[locale] ? locale : 'en-GB'}
        messages={
          Lang[locale] ? Lang[locale] : Lang['en-GB']
        }
        defaultLocale="en-GB"
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export { IntlProviderWrapper, Context as IntlContext };
