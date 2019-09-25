import React, { FC } from 'react';

import SignInForm from '../../components/SignInForm/SignInForm';
import './SigninPage.scss';

const SigninPage: FC = (): JSX.Element => (
  <div className="sign-ng-and-sign-up">
    <SignInForm />
  </div>
);

export default SigninPage;
