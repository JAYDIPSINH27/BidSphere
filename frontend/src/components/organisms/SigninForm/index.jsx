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
        if (value.length < 8) {
          errors.password = 'Password should be at least 8 characters long';
        } else if (!/[A-Za-z]/.test(value)) {
          errors.password = 'Password should contain at least one letter';
        } else if (!/\d/.test(value)) {
          errors.password = 'Password should contain at least one number';
        } else if (!/[@$!%*#?&]/.test(value)) {
          errors.password = 'Password should contain at least one special character';
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
    if (formData.password.length < 8) {
      errors.password = 'Password should be at least 8 characters long';
    } else if (!/[A-Za-z]/.test(formData.password)) {
      errors.password = 'Password should contain at least one letter';
    } else if (!/\d/.test(formData.password)) {
      errors.password = 'Password should contain at least one number';
    } else if (!/[@$!%*#?&]/.test(formData.password)) {
      errors.password = 'Password should contain at least one special character';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
    } else {
      setFormData({
        email: '',
        password: '',
        rememberMe: false,
      });
      setFormErrors({});
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
        <a href="#" className="text-bsnavyblue hover:underline">Forgot password?</a>
      </div>
      <div className="flex justify-center mt-8">
        <Button type="submit" className="w-full md:w-auto px-8 py-3 text-lg">Sign In</Button>
      </div>
    </form>
  );
};

export default SigninForm;
