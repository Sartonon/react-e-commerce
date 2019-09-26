import React, { FC } from 'react';

import SignInForm from '../../components/SignInForm/SignInForm';
import './SigninPage.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SigninPage: FC = (): JSX.Element => (
  <div className="sign-in-and-sign-up">
    <SignInForm />
    <SignUpForm />
  </div>
);

export default SigninPage;
