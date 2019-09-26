import React, { FC } from 'react';

import SignInForm from '../../components/SignInForm/SignInForm';
import './SigninPage.scss';
import SignUp from '../../components/SignUp/SignUp';

const SigninPage: FC = (): JSX.Element => (
  <div className="sign-in-and-sign-up">
    <SignInForm />
    <SignUp />
  </div>
);

export default SigninPage;
