import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfile } from '../../firebase/firebase.utils';
import { SignUpStyles } from './Styles';

const SignUpForm = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const clearForm = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't math");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      if (user) {
        await createUserProfile(user, { displayName });
        clearForm();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignUpStyles>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display name"
          value={displayName}
          handleChange={({ target }) => setDisplayName(target.value)}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={({ target }) => setEmail(target.value)}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={({ target }) => setPassword(target.value)}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm password"
          value={confirmPassword}
          handleChange={({ target }) => setConfirmPassword(target.value)}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpStyles>
  );
};

export default SignUpForm;
