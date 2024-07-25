// Author: Christin Saji

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FormField from '../../molecules/FormField';
import Button from '../../atoms/button';

const ResetPasswordForm = ({ onSetNewPassword }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});

  const validateField = (name, value) => {
    const errors = {};

    switch (name) {
      case 'password':
        if (value.length < 8) {
          errors.password = 'Password should be at least 8 characters long';
        } else if (!/[A-Za-z]/.test(value)) {
          errors.password = 'Password should contain at least one letter';
        } else if (!/\d/.test(value)) {
          errors.password = 'Password should contain at least one number';
        } else if (!/[@$!%*#?&]/.test(value)) {
          errors.password = 'Password should contain at least one special character';
        }
        break;
      case 'confirmPassword':
        if (value !== password) {
          errors.confirmPassword = 'Passwords do not match';
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const handleSetNewPassword = async (e) => {
    e.preventDefault();
    const validationErrors = {
      ...validateField('password', password),
      ...validateField('confirmPassword', confirmPassword),
    };
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      try {
        await onSetNewPassword(password);
        setPassword('');
        setConfirmPassword('');
        setError({});
      } catch (err) {
        setError({ general: 'Password reset failed' });
      }
    }
  };

  return (
    <form onSubmit={handleSetNewPassword} className="bg-bslightgreen p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-bsnavyblue">Reset Password</h1>
      {error.general && <p className="text-red-500 text-center">{error.general}</p>}
      <FormField
        type="password"
        placeholder="New Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        name="password"
        label="New Password"
        error={error.password}
      />
      <FormField
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        name="confirmPassword"
        label="Confirm Password"
        error={error.confirmPassword}
      />
      <Button type="submit" className="w-full mt-4">Set Password</Button>
    </form>
  );
};

export default ResetPasswordForm;
