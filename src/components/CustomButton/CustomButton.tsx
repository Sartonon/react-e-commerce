import React, { FC } from 'react';

import './CustomButton.scss';

interface ICustomButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isGoogleSignIn?: boolean;
}

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
