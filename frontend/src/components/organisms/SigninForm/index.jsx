// Author: Christin Saji

import React, { useState } from 'react';
import FormField from '../../molecules/FormField';
import CheckboxField from '../../molecules/CheckboxField';
import Button from '../../atoms/button';

const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    validateField(name, type === 'checkbox' ? checked : value);
  };

  const validateField = (name, value) => {
    const errors = { ...formErrors };

    switch (name) {
      case 'email':
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          errors.email = 'Invalid email format';
        } else {
          delete errors.email;
        }
        break;
      case 'password':
        if (!value) {
          errors.password = 'Password is required.';
        } else {
          delete errors.password;
        }
        break;
      default:
        break;
    }
    setFormErrors(errors);
  };

  const validate = () => {
    const errors = {};

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.password) {
      errors.password = 'Password is required.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
    } else {
      setFormErrors({ password: 'Wrong password. Please try again.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        type="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        name="email"
        label="Email Address"
        error={formErrors.email}
      />
      <FormField
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        label="Password"
        error={formErrors.password}
      />
      <div className="flex items-center justify-between mt-4">
        <CheckboxField
          label="Remember me"
          checked={formData.rememberMe}
          onChange={handleChange}
          name="rememberMe"
        />
        <a href="forget-password" className="text-bsnavyblue hover:underline">Forgot password?</a>
      </div>
      <div className="flex justify-center mt-8">
        <Button type="submit" className="w-full md:w-auto px-8 py-3 text-lg">Sign In</Button>
      </div>
    </form>
  );
};

export default SigninForm;
