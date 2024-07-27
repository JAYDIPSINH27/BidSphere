// Author: Christin Saji

import React from 'react';
import SigninForm from '../../organisms/SigninForm';
import { signin } from '../../../shared/assets/signin.jpg';

const SigninTemplate = () => (
  <section className="min-h-0 pt-8 pb-0">
    <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-wrap items-center justify-center lg:justify-between">
      <div className="w-full md:w-6/12 lg:w-6/12">
        {/* Image Source: https://www.freepik.com/free-vector/mobile-login-concept-illustration_4957136.htm */}
        <img
          src={signin}
          className="w-full h-full object-cover"
          alt="Login Illustration"
        />
      </div>
      <div className="w-full md:w-6/12 lg:ms-6 lg:w-5/12 bg-bslightgreen p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-bsnavyblue">
          Sign In
        </h2>
        <SigninForm />
      </div>
    </div>
  </section>
);

export default SigninTemplate;
