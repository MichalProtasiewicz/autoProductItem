import React from 'react';
import { injectIntl } from 'react-intl';

import Image from 'react-image-autofit-frame';
import Placeholder from 'assets/Images/SignInBackground.jpg';

import { useTheme } from 'ThemeContext';

import Helmet from 'components/Helmet';

import {
  Section,
  Wrapper,
  Content,
  Imagebox,
  Footer
} from './SignInPage.style';

import SignInPanel from './Sections/SignInPanel';

const SignInPage = ({ intl }) => {
  const theme = useTheme();

  return (
    <>
      <Helmet title={'PAGE_TITLE.SIGN_IN'} message={'Sign in'} />
      <Section>
        <Wrapper>
          <Content>
            <SignInPanel />
          </Content>
          <Footer>
            By signing in, you accept{' '}
            <a
              href="http://www.bine.world"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy policy
            </a>{' '}
            <br />
            (including Use of Cookies and Other
            <br /> Technologies) and{' '}
            <a
              href="http://www.bine.world"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of use
            </a>
          </Footer>
        </Wrapper>
        <Wrapper hiddenMedium>
          <Imagebox>
            <Image imgSrc={Placeholder} alt="SRS SMART APP" />
          </Imagebox>
        </Wrapper>
      </Section>
    </>
  );
};

export default injectIntl(SignInPage);
