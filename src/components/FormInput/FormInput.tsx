import React, { FC } from 'react';

import './FormInput.scss';

interface IFormInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  value: string;
  type: string;
  required?: boolean;
}

const FormInput: FC<IFormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
