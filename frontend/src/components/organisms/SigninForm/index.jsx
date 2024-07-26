// Author: Christin Saji

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:5001/auth/signin', formData);
        if (response.status === 200) {
          const { token, role } = response.data;
          if (formData.rememberMe) {
            localStorage.setItem('token', token);
          } else {
            sessionStorage.setItem('token', token);
          }

          if (role === 'bidder') {
            navigate('/bidder-dashboard');
          } else if (role === 'issuer') {
            navigate('/issuer-dashboard');
          }
        }
      } catch (err) {
        setFormErrors({ general: err.response.data.error || 'Signin failed. Please try again.' });
      }
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
      {formErrors.general && <p className="text-red-500 text-center">{formErrors.general}</p>}
    </form>
  );
};

export default SigninForm;
