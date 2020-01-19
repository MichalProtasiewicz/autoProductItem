import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { useTheme } from 'ThemeContext';

import Helmet from 'components/Helmet';

const BlackHolePage = ({ history }) => {
  const theme = useTheme();

  useEffect(() => {
    if (history.location.pathname !== '/404') history.push('/404');
  }, [history, history.location.pathname]);

  return (
    <>
      <Helmet title={'PAGE_TITLE.404'} message={'404'} />
      <div>
        <div>
          content
          <div>ICON</div>
          <div>OOPS!</div>
          <div>Sorry, this page isn't here.</div>
          <div>
            navigation
            <button>GO TO HOMEPAGE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(BlackHolePage);
