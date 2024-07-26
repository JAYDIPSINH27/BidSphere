// Author: Christin Saji

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import FormField from '../../molecules/FormField';
import Button from '../../atoms/button';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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
    setError(errors.email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
    validateField(name, value);
  };

  const handleRequestReset = async (e) => {
    e.preventDefault();
    const validationErrors = validateField('email', email);
    if (validationErrors) {
      setError(validationErrors);
    } else {
      try {
        await axios.post('http://localhost:5001/auth/request-password-reset', { email });
        setEmail('');
        setError('');
        setSuccessMessage('Password reset link has been sent to your email.');
      } catch (err) {
        setError('Request failed. Please try again.');
        setSuccessMessage('');
      }
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {successMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 font-medium text-white text-center py-2 px-4 rounded-lg shadow-lg">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleRequestReset} className="bg-bslightgreen p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-bsnavyblue">Forget Password</h1>
        <FormField
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleChange}
          name="email"
          label="Email"
          error={error}
        />
        <Button type="submit" className="w-full mt-4">Request Reset</Button>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
