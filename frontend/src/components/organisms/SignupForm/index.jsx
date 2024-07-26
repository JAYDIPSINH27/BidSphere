// Author: Christin Saji

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormField from '../../molecules/FormField';
import CheckboxField from '../../molecules/CheckboxField';
import RadioField from '../../molecules/RadioField';
import Button from '../../atoms/button';
import Modal from '../../molecules/LandingPage/Modal';
import { footerData } from '../../../shared/constants';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    role: '',
    terms: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const validatePhoneNumber = (phone) => {
    const phoneno = /^\d{10}$/;
    return phoneno.test(phone);
  };

  const validateField = (name, value) => {
    const errors = { ...formErrors };

    switch (name) {
      case 'name':
        if (!value.match(/^[A-Za-z\s]+$/)) {
          errors.name = 'Name should contain only letters';
        } else {
          delete errors.name;
        }
        break;
      case 'email':
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          errors.email = 'Invalid email format';
        } else {
          delete errors.email;
        }
        break;
      case 'phone':
        if (!validatePhoneNumber(value)) {
          errors.phone = 'Phone number should contain exactly 10 digits';
        } else {
          delete errors.phone;
        }
        break;
      case 'address':
        if (!value) {
          errors.address = 'Address is required';
        } else {
          delete errors.address;
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
      case 'confirmPassword':
        if (value !== formData.password) {
          errors.confirmPassword = 'Passwords do not match';
        } else {
          delete errors.confirmPassword;
        }
        break;
      case 'role':
        if (!value) {
          errors.role = 'Role is required';
        } else {
          delete errors.role;
        }
        break;
      case 'terms':
        if (!value) {
          errors.terms = 'You must agree to the terms and conditions';
        } else {
          delete errors.terms;
        }
        break;
      default:
        break;
    }
    setFormErrors(errors);
  };

  const validate = () => {
    const errors = {};

    if (!formData.name.match(/^[A-Za-z\s]+$/)) {
      errors.name = 'Name should contain only letters';
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = 'Invalid email format';
    }
    if (!validatePhoneNumber(formData.phone)) {
      errors.phone = 'Phone number should contain exactly 10 digits';
    }
    if (!formData.address) {
      errors.address = 'Address is required';
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
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.role) {
      errors.role = 'Role is required';
    }
    if (!formData.terms) {
      errors.terms = 'You must agree to the terms and conditions';
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
        const response = await axios.post('http://localhost:5001/auth/signup', formData);
        if (response.status === 201) {
          setSignupSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            confirmPassword: '',
            role: '',
            terms: false,
          });
          setFormErrors({});
          setTimeout(() => {
            setSignupSuccess(false);
            navigate('/signin');
          }, 5000);
        }
      } catch (err) {
        setFormErrors({ general: err.response.data.error || 'Signup failed. Please try again.' });
      }
    }
  };

  return (
    <div className="relative">
      {signupSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 font-medium text-white text-center py-2 px-4 rounded-lg shadow-lg">
          Signup successful! Please check your email to verify your account.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          name="name"
          label="Name"
          error={formErrors.name}
        />
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
        <FormField
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          label="Confirm Password"
          error={formErrors.confirmPassword}
        />
        <FormField
          type="text"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          name="phone"
          label="Phone Number"
          error={formErrors.phone}
        />
        <FormField
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          name="address"
          label="Address"
          error={formErrors.address}
        />
        <div className="flex items-center space-x-4">
          <span className="text-bsnavyblue font-semibold">Role:</span>
          <RadioField
            label="Bidder"
            value="bidder"
            onChange={handleChange}
            name="role"
            checked={formData.role === 'bidder'}
          />
          <RadioField
            label="Tender Issuer"
            value="issuer"
            onChange={handleChange}
            name="role"
            checked={formData.role === 'issuer'}
          />
        </div>
        {formErrors.role && <span className="text-red-500 text-sm mt-1">{formErrors.role}</span>}
        <CheckboxField
          label={(
            <span>
              I agree to the <button type="button" className="text-bsnavyblue font-bold hover:underline" onClick={() => setIsModalOpen(true)}>terms and conditions</button>
            </span>
          )}
          checked={formData.terms}
          onChange={handleChange}
          name="terms"
          error={formErrors.terms}
        />
        <div className="flex justify-center mt-8">
          <Button type="submit" className="w-full md:w-auto px-8 py-3 text-lg">Sign Up</Button>
        </div>
        {formErrors.general && <p className="text-red-500 text-center">{formErrors.general}</p>}
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Terms and Conditions"
        content={footerData.termsandservice.content}
      />
    </div>
  );
};

export default SignupForm;
