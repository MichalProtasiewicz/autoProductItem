import HomePage from 'pages/HomePage';
import SignInPage from 'pages/Auth/SignInPage';
import ForgotPasswordPage from 'pages/Auth/ForgotPasswordPage';
import ResetPasswordPage from 'pages/Auth/ResetPasswordPage';

const Routes = [
  {
    path: '/sign-in',
    name: 'SIGN-IN-PAGE',
    component: SignInPage,
    exact: true
  },
  {
    path: '/forgot-password',
    name: 'FORGOT-PASSWORD',
    component: ForgotPasswordPage,
    exact: true
  },
  {
    path: '/reset-password',
    name: 'RESET-PASSWORD',
    component: ResetPasswordPage,
    exact: true
  },
  {
    path: '/',
    name: 'HOME-PAGE',
    component: HomePage,
    exact: true
  }
];

export default Routes;
