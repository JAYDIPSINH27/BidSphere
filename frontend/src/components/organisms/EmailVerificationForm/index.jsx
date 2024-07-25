// Author: Christin Saji

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FormField from '../../molecules/FormField';
import Button from '../../atoms/button';

const EmailVerificationForm = ({ onVerify }) => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await onVerify(token);
    } catch (err) {
      setError('Verification failed');
    }
  };

  return (
    <form onSubmit={handleVerify} className="bg-bslightgreen p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-bsnavyblue">Verify Email</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <FormField
        type="text"
        placeholder="Verification Token"
        value={token}
        onChange={e => setToken(e.target.value)}
        name="token"
        label="Token"
      />
      <Button type="submit" className="w-full mt-4">Verify</Button>
    </form>
  );
};

export default EmailVerificationForm;
