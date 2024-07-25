// Author: Christin Saji

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FormField from '../../molecules/FormField';
import Button from '../../atoms/button';

const ForgetPasswordForm = ({ onRequestReset }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateField = (name, value) => {
    const errors = {};

    switch (name) {
      case 'email':
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          errors.email = 'Invalid email format';
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const handleRequestReset = async (e) => {
    e.preventDefault();
    const validationErrors = validateField('email', email);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors.email);
    } else {
      try {
        await onRequestReset(email);
        setEmail('');
        setError('');
      } catch (err) {
        setError('Request failed');
      }
    }
  };

  return (
    <form onSubmit={handleRequestReset} className="bg-bslightgreen p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-bsnavyblue">Forget Password</h1>
      <FormField
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        name="email"
        label="Email"
        error={error}
      />
      <Button type="submit" className="w-full mt-4">Request Reset</Button>
    </form>
  );
};

export default ForgetPasswordForm;
